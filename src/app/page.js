import HeroSection from "@/Components/HeroSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection/>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Feature {item}</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Logo</h4>
              <div className="flex space-x-4">
                {/* Social Icons */}
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-8 h-8 bg-gray-700 rounded-full" />
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-gray-400 mb-4">Product</h5>
              <ul className="space-y-2">
                {['Explore', 'Apps', 'Features'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-gray-300">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-gray-400 mb-4">Company</h5>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-gray-300">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-gray-400 mb-4">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 rounded-l-lg px-4 py-2 w-full"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
