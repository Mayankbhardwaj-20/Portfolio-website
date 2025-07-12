
'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Ready to discuss data analytics opportunities or collaborate on exciting projects? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:mayankbhardwaj200105@gmail.com"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-200 break-all">mayankbhardwaj200105@gmail.com</p>
            </a>

            <a 
              href="https://linkedin.com/in/mayank-bhardwaj-99b252364"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-linkedin-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-200">Connect with me professionally</p>
            </a>

            <a 
              href="https://github.com/Mayankbhardwaj-20"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-github-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-blue-200">View my code repositories</p>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
                />
              </div>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
              />
              <textarea 
                name="message"
                rows={5}
                maxLength={500}
                placeholder="Your Message (max 500 characters)"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-white text-blue-900 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://docs.google.com/document/d/1NN54vm6CwiGRg2VZ-2MjtWCFoF_YLN47/edit?usp=sharing&ouid=111900315595381207695&rtpof=true&sd=true"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-3 whitespace-nowrap cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-download-line"></i>
              </div>
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
