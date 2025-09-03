import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  Send,
  Building2,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Cpu,
  Clock,
  Lock,
  Database,
} from "lucide-react";

const Services = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description:
        "Execute trades and transfers in milliseconds with our high-performance infrastructure.",
      details:
        "Our proprietary technology stack processes millions of transactions per second, ensuring your financial operations never slow down. Built on cloud-native architecture with global edge locations for optimal performance.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level security with multi-factor authentication and encryption at rest and in transit.",
      details:
        "SOC 2 Type II certified with end-to-end encryption, biometric authentication, and real-time fraud detection. Our security protocols exceed industry standards and are regularly audited by third-party security firms.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with financial institutions and businesses across 10+ countries worldwide.",
      details:
        "Seamlessly integrate with local banking systems, handle 100+ currencies, and comply with international regulations. Our network spans major financial hubs and emerging markets for truly global coverage.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Monitor your financial performance with comprehensive dashboards and real-time reporting.",
      details:
        "Advanced AI-powered insights, customizable KPI tracking, and predictive analytics help you make data-driven decisions. Export reports in multiple formats and integrate with your existing business intelligence tools.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support with dedicated account managers for enterprise clients.",
      details:
        "Multi-language support team available via phone, chat, and email. Enterprise clients receive dedicated account managers with direct access to our technical experts and priority response times.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      icon: Lock,
      title: "Custom Solutions",
      description:
        "Tailored financial solutions designed to meet your specific business requirements.",
      details:
        "Our team of financial experts works closely with you to understand your unique needs and develop customized solutions. From API integrations to white-label platforms, we build exactly what your business requires.",
      gradient: "from-teal-500 to-blue-500",
      delay: 0.6,
    },
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description:
        "Advanced machine learning algorithms provide predictive analytics and risk assessment.",
      details:
        "Leverage cutting-edge AI and machine learning to gain predictive insights into market trends, risk assessment, and optimization opportunities. Our algorithms continuously learn and improve from vast amounts of financial data.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.7,
    },
    {
      icon: Database,
      title: "Scalable Infrastructure",
      description:
        "Built on cloud-native architecture that scales with your business growth.",
      details:
        "Our infrastructure automatically scales to handle your growing transaction volumes and user base. Built on AWS, Google Cloud, and Azure with global CDN distribution for optimal performance worldwide.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.8,
    },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Foreign Exchange (FX)",
      description:
        "Access competitive exchange rates across 10+ currency pairs with real-time pricing and instant execution.",
      features: [
        "Spot and forward contracts",
        "Real-time market rates",
        "Hedging strategies",
        "Multi-currency accounts",
        "Automated trading",
        "Risk management tools",
      ],
      gradient: "from-blue-500 to-cyan-500",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Send,
      title: "Global Remittance",
      description:
        "Send money worldwide with lightning-fast transfers, competitive fees, and transparent pricing.",
      features: [
        "Instant transfers",
        "10+ countries",
        "Competitive fees",
        "Real-time tracking",
        "Multiple payment methods",
        "Recurring transfers",
      ],
      gradient: "from-green-500 to-emerald-500",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Building2,
      title: "Treasury Management",
      description:
        "Optimize your cash flow with comprehensive treasury solutions and automated financial operations.",
      features: [
        "Cash flow optimization",
        "Investment management",
        "Liquidity planning",
        "Automated reconciliation",
        "Multi-bank connectivity",
        "Advanced reporting",
      ],
      gradient: "from-purple-500 to-pink-500",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const integrations = [
    {
      icon: Zap,
      title: "Lightning Fast APIs",
      description:
        "RESTful APIs with comprehensive documentation and real-time webhooks.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with SOC 2 compliance and end-to-end encryption.",
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% uptime guarantee.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Real-time dashboards and predictive insights powered by AI.",
    },
  ];

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

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
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services & Features
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From foreign exchange to global remittance and treasury management,
            we provide comprehensive financial solutions that drive your
            business forward.
          </p>
        </motion.div>

        {/* Features Section - Accordion */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the cutting-edge capabilities that make MetaFlow the most
              advanced financial technology platform in the world.
            </p>
          </motion.div>

          {/* Features Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-white/60 transition-transform duration-200 ${
                          openFeature === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {openFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-white/20"
                  >
                    <div className="pt-4">
                      <p className="text-white/80 leading-relaxed">
                        {feature.details}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet all your
              business needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Service Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current`}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Seamless Integration
              </h3>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Connect MetaFlow with your existing systems through our robust
                APIs and integrations. Whether you're using ERP systems,
                accounting software, or custom applications, we make integration
                simple and secure.
              </p>
              <ul className="space-y-3 mb-8">
                {integrations.map((integration, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <integration.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80">{integration.title}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View API Documentation
              </motion.button>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Developer Friendly
              </h4>
              <p className="text-white/70">
                Get started with our comprehensive SDKs and sample code
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust MetaFlow for their global
              financial needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
