import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  BarChart3,
  Clock,
  Lock,
  Cpu,
  Database,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Execute trades and transfers in milliseconds with our high-performance infrastructure.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level security with multi-factor authentication and encryption at rest and in transit.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with financial institutions and businesses across 150+ countries worldwide.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Monitor your financial performance with comprehensive dashboards and real-time reporting.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support with dedicated account managers for enterprise clients.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      icon: Lock,
      title: "Custom Solutions",
      description:
        "Tailored financial solutions designed to meet your specific business requirements.",
      gradient: "from-teal-500 to-blue-500",
      delay: 0.6,
    },
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description:
        "Advanced machine learning algorithms provide predictive analytics and risk assessment.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.7,
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description:
        "Built on cloud-native architecture that scales with your business growth.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.8,
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
            Powerful{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the cutting-edge capabilities that make MetaFlow the most
            advanced financial technology platform in the world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Join thousands of businesses that have already transformed their
              financial operations with MetaFlow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold text-lg"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
