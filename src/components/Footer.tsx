import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Foreign Exchange", path: "/services" },
        { label: "Global Remittance", path: "/services" },
        { label: "Treasury Management", path: "/services" },
        { label: "API Integration", path: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Leadership", path: "/about" },
        { label: "Careers", path: "/about" },
        { label: "Press", path: "/about" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "/services" },
        { label: "API Reference", path: "/services" },
        { label: "Support Center", path: "/contact" },
        { label: "Blog", path: "/services" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "support@metaflow.com",
      href: "mailto:support@metaflow.com",
    },
    // { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    // { icon: MapPin, text: "123 Financial District, NY 10001", href: "#" },
  ];

  return (
    <footer className="relative mt-20">
      {/* Background - Distinct dark color */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    MetaFlow
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Empowering businesses with cutting-edge financial technology
                  solutions. Manage all your payments, FX, and treasury needs
                  seamlessly on a single platform.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                    >
                      <contact.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-white mb-6"
                >
                  {section.title}
                </motion.h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-white/70 mb-6">
                Get the latest insights on global finance, technology trends,
                and MetaFlow updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className=" flex flex-col container mx-auto px-4 py-8 items-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/60 text-sm"
              >
                © {currentYear} MetaFlow. All rights reserved.
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
