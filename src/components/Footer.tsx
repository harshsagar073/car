import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-white border-t border-luxury-black/10">
      {/* Social Media Bar */}
      {/* Social Media Bar */}
<div className="bg-muted py-8">
  <div className="container mx-auto px-4 text-center">
    <div className="flex justify-center items-center space-x-6 mb-4">
      {/* Facebook */}
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
        <Facebook className="w-6 h-6 text-white" />
      </div>

      {/* Instagram */}
      <a href="https://www.instagram.com/bentley_rollsroyce_center?igsh=cnE2bWJxbm12NGVi&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </a>

      {/* Youtube */}
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
        <Youtube className="w-6 h-6 text-white" />
      </div>
    </div>
    
    {/* Instagram text link */}
    <p className="text-luxury-black mb-2">
      <a href="https://www.instagram.com/bentley_rollsroyce_center?igsh=cnE2bWJxbm12NGVi&utm_source=qr" target="_blank" rel="noopener noreferrer">
        https://www.instagram.com/bentley_rollsroyce_center
      </a>
    </p>
    <p className="text-luxury-black">SBCS/Blogs</p>
  </div>
</div>


      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-luxury-black mb-6">
                Saudi British Centre Service
              </h3>
              <p className="text-luxury-gray leading-relaxed text-sm mb-6">
                We specialize in Rolls-Royce and Bentley care, offering high-end maintenance, 
                bespoke detailing, and luxury upgrades. Our expert team combines advanced diagnostics 
                with handcrafted precision to deliver exceptional performance and elegance. 
                Trusted by elite clientele for discreet, white-glove service and automotive perfection.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold text-luxury-black mb-6">
                Useful Links
              </h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-luxury-gray hover:text-secondary transition-colors">Home</a></li>
                <li><a href="#lifestyle" className="text-luxury-gray hover:text-secondary transition-colors">Lifestyle</a></li>
                <li><a href="#models" className="text-luxury-gray hover:text-secondary transition-colors">Models</a></li>
                <li><a href="#service" className="text-luxury-gray hover:text-secondary transition-colors">Your Saudi British Centre Service</a></li>
                <li><a href="#about" className="text-luxury-gray hover:text-secondary transition-colors">About Saudi British Centre</a></li>
                <li><a href="#configurator" className="text-luxury-gray hover:text-secondary transition-colors">Configurator</a></li>
              </ul>
            </div>

            {/* Time Table */}
            <div>
              <h3 className="text-xl font-bold text-luxury-black mb-6">
                Time Table
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Monday</span>
                  <span className="text-luxury-black font-medium">9AM to 12:15PM
                  <br />
                    1:30-6:30PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Tuesday</span>
                  <span className="text-luxury-black font-medium">9AM to 12:15PM
                  <br />
                    1:30-6:30PM </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Wednesday</span>
                  <span className="text-luxury-black font-medium">9AM to 12:15PM
                  <br />
                    1:30-6:30PM </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Thursday</span>
                  <span className="text-luxury-black font-medium">9AM to 2:30PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Friday</span>
                  <span className="text-luxury-black font-medium">Closed</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Saturday</span>
                  <span className="text-luxury-black font-medium">9AM to 12:15PM
                  <br />
                    1:30-6:30PM </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-gray">Sunday</span>
                  <span className="text-luxury-black font-medium">9AM to 12:15PM
                  <br />
                    1:30-6:30PM </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-luxury-black mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-luxury-black font-medium">+966500909822</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-luxury-black font-medium">info@sbcservices.sa</span>
                </div>
                <div className="mt-4">
  <h4 className="font-semibold text-accent mb-0">Opening Hours</h4>
  <p className="font-bold text-black text-sm">Sat – Thur: 8:00 AM – 8:00 PM</p>
</div>
                          
                <div className="pt-4">
                  <p className="text-accent font-medium mb-1">
                     Riyadh 12874, Saudi Arabia
                  </p>
                  <p className="text-luxury-gray text-sm">
                    منطقة الرياض ،،الرياض، Riyadh 12874, Saudi Arabia
                  </p>
                </div>
               {/* Google Map */}
  <div className="mt-6 w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1813.1230629101028!2d46.7904292!3d24.6496551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07bafb4ce245%3A0xc3e2ac38d4504097!2sBentley%20Genuine%20Parts%20Repair%20and%20Maintenance!5e0!3m2!1sen!2sin!4v1757269345402!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
                
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-luxury-black flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-luxury-black/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">MODERN SLAVERY</a>
            <span className="text-luxury-gray">|</span>
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">RECALLS SEARCH</a>
            <span className="text-luxury-gray">|</span>
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">BENTLEY COLLECTION</a>
            <span className="text-luxury-gray">|</span>
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">Code of Conduct</a>
            <span className="text-luxury-gray">|</span>
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">Tax Strategy</a>
            <span className="text-luxury-gray">|</span>
            <a href="#" className="text-luxury-gray hover:text-secondary transition-colors">Whistleblower System</a>
          </div>
          
          <div className="text-center mt-4 text-sm text-luxury-gray">
            <p>© Saudi British Centre Service | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
