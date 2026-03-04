import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '@/lib/blogData';

interface RelatedPostsProps {
  currentSlug: string;
  maxPosts?: number;
}

export default function RelatedPosts({ currentSlug, maxPosts = 3 }: RelatedPostsProps) {
  const related: BlogPost[] = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, maxPosts);

  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
        <div>
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-0.5">
            <BookOpen className="h-4 w-4" />
            <span>Continue Reading</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Related Articles</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{post.category}</span>
                <h3 className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-4 leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center text-blue-600 text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
