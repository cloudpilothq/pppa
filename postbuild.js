const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const oldNext = path.join(outDir, '_next');
const newNext = path.join(outDir, 'assets');

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('out directory not found');
  process.exit(1);
}

// 1. Rename _next to assets
if (fs.existsSync(oldNext)) {
  fs.renameSync(oldNext, newNext);
  console.log('Renamed _next to assets');
} else if (!fs.existsSync(newNext)) {
  console.error('_next directory not found and assets directory not found');
  process.exit(1);
}

// 2. Walk through all files and replace /_next/ with /assets/
function walkAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkAndReplace(filePath);
    } else {
      const ext = path.extname(file);
      if (['.html', '.js', '.css', '.json', '.txt', '.xml', '.svg'].includes(ext)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('/_next/')) {
          content = content.replace(/\/_next\//g, '/assets/');
          fs.writeFileSync(filePath, content, 'utf8');
        }
        if (content.includes('\\"_next\\/')) {
            content = content.replace(/\\\"_next\\\//g, '\\"assets\\/');
            fs.writeFileSync(filePath, content, 'utf8');
        }
         // Also replace references that Next.js might store without prefixes
         if (content.includes('"/_next/')) {
           content = content.replace(/"\/_next\//g, '"/assets/');
           fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    }
  }
}

console.log('Replacing references...');
walkAndReplace(outDir);
console.log('Post-build replacements complete!');
