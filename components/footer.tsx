export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Brand */}
        <div className="col-span-1 sm:col-span-3 lg:col-span-2">
          <h3 className="text-white text-2xl font-bold mb-4">FlowMetrics AI</h3>
          <p className="text-gray-400 max-w-sm">
            Predictive analytics for high-performing SaaS teams.  
            Turn data into revenue—without needing a data science team.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/product" className="hover:text-white">Features</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/integrations" className="hover:text-white">Integrations</a></li>
            <li><a href="#security" className="hover:text-white">Security</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="#careers" className="hover:text-white">Careers</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#guides" className="hover:text-white">Guides</a></li>
            <li><a href="#templates" className="hover:text-white">Templates</a></li>
            <li><a href="#webinars" className="hover:text-white">Webinars</a></li>
            <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FlowMetrics AI. All rights reserved.
      </div>
    </footer>
  );
}
