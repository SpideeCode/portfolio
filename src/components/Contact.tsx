import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_92hrt6b',  
      'template_aecdc3t',  
      formData,
      'Wjz9DsxhV1IjwyLna'     
    )
    .then(() => {
      setIsSubmitted(true);
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      setIsSending(false);
      alert('Erreur lors de l’envoi du message : ' + error.text);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal delay={200} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Restons en contact
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  N'hésitez pas à me contacter pour toute collaboration, 
                  question ou simplement pour échanger sur le développement web.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Localisation</h4>
                    <p className="text-gray-400">Brussels, Belgium</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="bg-green-600 p-3 rounded-lg group-hover:bg-green-700 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">ibiberisha02@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/SpideeCode"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                  >
                    <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/ibrahim-berisha-010121196/'
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                  >
                    <Linkedin className="w-6 h-6 text-white"/>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Contact Form */}
          <ScrollReveal delay={400} direction="right">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Décrivez votre projet ou votre besoin..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3
                      ${isSending ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <Send size={20} />
                    {isSending ? 'Envoi...' : 'Envoyer le message'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
