const Services = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      title: "Foreign Exchange (FX)",
      description:
        "Access competitive exchange rates across 150+ currency pairs with real-time pricing and instant execution.",
      features: [
        "Spot and forward contracts",
        "Real-time market rates",
        "Hedging strategies",
        "Multi-currency accounts",
        "Automated trading",
        "Risk management tools",
      ],
      cta: "Explore FX Services",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      title: "Global Remittance",
      description:
        "Send money worldwide with lightning-fast transfers, competitive fees, and transparent pricing.",
      features: [
        "Instant transfers",
        "150+ countries",
        "Competitive fees",
        "Real-time tracking",
        "Multiple payment methods",
        "Recurring transfers",
      ],
      cta: "Send Money Now",
      color: "from-green-500 to-green-600",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
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
      cta: "Manage Treasury",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foreign exchange to global remittance and treasury management,
            we provide comprehensive financial solutions that drive your
            business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card p-8 h-full">
              {/* Service Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
              >
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Service Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-accent-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current`}
                >
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Seamless Integration
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Connect MetaFlow with your existing systems through our robust
                APIs and integrations. Whether you're using ERP systems,
                accounting software, or custom applications, we make integration
                simple and secure.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    RESTful APIs with comprehensive documentation
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Pre-built connectors for popular platforms
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Webhook support for real-time updates
                  </span>
                </li>
              </ul>
              <button className="btn-outline">View API Documentation</button>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Developer Friendly
              </h4>
              <p className="text-gray-600">
                Get started with our comprehensive SDKs and sample code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
