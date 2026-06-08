export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center mb-6">
                <img src="/img/logo.png" alt="VEXEX Logo" className="h-12 w-auto object-contain brightness-0 invert" />
             </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Building intelligent digital experiences that transform businesses and accelerate growth through premium software engineering.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/vexex.ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                IG
              </a>
              <a href="https://www.linkedin.com/in/md-momeen-0133aa34a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>momeen.md359@gmail.com</li>
              <li>+91 74188 21261</li>
              <li>1/153 Walajabath Road, Vandalur, Chennai - 600048</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VEXEX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
