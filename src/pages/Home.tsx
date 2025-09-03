import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Users,
  Plug,
  Settings,
  Play,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: TrendingUp, value: "100%", label: "Succesful Volume" },
    { icon: Globe, value: "10+", label: "Countries" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
    { icon: Users, value: "1K+", label: "Clients" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description:
        "Execute trades and transfers in milliseconds with our high-performance infrastructure",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "Enterprise-level security with multi-factor authentication and encryption",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Connect with financial institutions across 10+ countries worldwide",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const integrations = [
    { name: "ERP Systems", description: "SAP, Oracle, NetSuite" },
    { name: "Accounting Software", description: "QuickBooks, Xero, Sage" },
    { name: "Banking APIs", description: "Open Banking, SWIFT, SEPA" },
    {
      name: "Trading Platforms",
      description: "Bloomberg, Reuters, TradingView",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                MetaFlow
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-white/90"
            >
              The Future of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Global Finance
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Revolutionizing how businesses manage payments, FX, and treasury
              operations. Built with cutting-edge technology for the digital
              economy.
            </motion.p>

            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 rounded-2xl text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div> */}

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MetaFlow?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep financial expertise
              to deliver a platform that transforms how businesses manage their
              global financial operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500">
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/10 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Get started with MetaFlow in three simple steps and transform your
              financial operations today.
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Lines - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/50 to-blue-500/30 transform -translate-y-1/2 z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 origin-left"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Connect",
                  description:
                    "Integrate with your existing systems through our secure APIs and start your journey",
                  icon: Plug,
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-500/10 to-blue-600/10",
                  delay: 0,
                },
                {
                  step: "02",
                  title: "Configure",
                  description:
                    "Set up your preferences, customize your dashboard, and configure your workflows",
                  icon: Settings,
                  gradient: "from-cyan-500 to-cyan-600",
                  bgGradient: "from-cyan-500/10 to-cyan-600/10",
                  delay: 0.3,
                },
                {
                  step: "03",
                  title: "Execute",
                  description:
                    "Start trading, sending money, and managing treasury operations with confidence",
                  icon: Play,
                  gradient: "from-emerald-500 to-emerald-600",
                  bgGradient: "from-emerald-500/10 to-emerald-600/10",
                  delay: 0.6,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: item.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  {/* Step Card */}
                  <div
                    className={`backdrop-blur-md bg-gradient-to-br ${item.bgGradient} border border-white/20 rounded-3xl p-8 h-full hover:border-white/40 transition-all duration-500 relative overflow-hidden`}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Step Number with Icon */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500`}
                      >
                        {/* Pulsing Ring */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: item.delay,
                          }}
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full`}
                        />

                        {/* Step Number */}
                        <span className="text-2xl font-bold text-white relative z-10">
                          {item.step}
                        </span>

                        {/* Icon Overlay */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center bg-white/20 rounded-full"
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-center group-hover:text-white/90 transition-colors duration-300">
                        {item.description}
                      </p>

                      {/* Success Indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute top-4 right-4"
                      >
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </motion.div>
                    </div>

                    {/* Floating Particles */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: item.delay,
                      }}
                      className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full"
                    />
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: item.delay + 0.5,
                      }}
                      className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full"
                    />
                  </div>

                  {/* Mobile Connecting Arrow */}
                  {index < 2 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-blue-400"
                      >
                        <ArrowRight className="w-6 h-6 rotate-90" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + dot * 0.2 }}
                    viewport={{ once: true }}
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See what our clients say about MetaFlow and how we've transformed
              their financial operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 h-full hover:bg-white/20 transition-all duration-500">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Integrations Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Seamless{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Connect MetaFlow with your existing tools and workflows for a
              unified financial experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {integration.name}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-md bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-white/20 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Financial Operations?
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join thousands of businesses that trust MetaFlow for their
                global financial needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white font-semibold text-lg group"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
