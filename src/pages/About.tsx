import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "5+", label: "Years of Experience", icon: Award },
    { number: "100%", label: "Successful Volume", icon: TrendingUp },
    { number: "10+", label: "Countries Supported", icon: Globe },
    { number: "1000+", label: "Enterprise Clients", icon: Users },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We prioritize the security of your financial data with bank-grade encryption and compliance with global financial regulations.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Constantly evolving our platform with cutting-edge technology to provide the best financial solutions for our clients.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connecting businesses worldwide with seamless cross-border financial services and local market expertise.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MetaFlow
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Pioneering the future of global financial technology with
            innovation, security, and unwavering commitment to our clients'
            success.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              MetaFlow has been at the forefront of financial
              technology innovation, transforming how businesses manage their
              global financial operations. What started as a small startup has
              grown into a trusted partner for enterprises worldwide.
            </p>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Our mission is to democratize access to global financial services,
              making it possible for businesses of all sizes to compete on the
              world stage. We believe that every business deserves access to the
              same financial tools and opportunities as the largest
              corporations.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Today, we process good amount of annual transaction volume,
              serving clients across several countries with our comprehensive suite
              of FX, remittance, and treasury management solutions.
            </p>
          </div>

          <div className="relative">
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To become the world's most trusted platform for global
                  financial operations, enabling businesses to thrive in an
                  interconnected world economy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-20"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the MetaFlow Family
            </h3>
            <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Ready to transform your business with our comprehensive financial
              solutions? Let's discuss how MetaFlow can help you achieve your
              global financial goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold text-lg"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
