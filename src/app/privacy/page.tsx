import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DSPPPPA",
  description: "Privacy Policy for the Private Public Property Protection Agency website.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
      
      <div className="prose prose-slate lg:prose-lg max-w-none space-y-8 text-slate-700">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
          <p>
            The Private Public Property Protection Agency ("DSPPPPA", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Create and manage your account.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
            <li>Email you regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-slate-100 rounded-lg">
            <p className="font-semibold text-slate-900">Data Protection Officer</p>
            <p>Private Public Property Protection Agency</p>
            <p>Block B: Federal Agency, Gwarimpa, Abuja, Nigeria</p>
            <p>Email: privacy@DSPPPPA.gov.ng</p>
            <p>Phone: +234 800 555 0199</p>
          </div>
        </section>
        
        <p className="text-sm text-slate-500 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}



