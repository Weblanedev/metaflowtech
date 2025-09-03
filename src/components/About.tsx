const About = () => {
  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "100%", label: "Successful Volume" },
    { number: "10+", label: "Countries Supported" },
    { number: "1000+", label: "Enterprise Clients" },
  ];

  const values = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Trust & Security",
      description:
        "We prioritize the security of your financial data with bank-grade encryption and compliance with global financial regulations.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "Constantly evolving our platform with cutting-edge technology to provide the best financial solutions for our clients.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Global Reach",
      description:
        "Connecting businesses worldwide with seamless cross-border financial services and local market expertise.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About MetaFlow
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MetaFlow has been at the forefront of financial technology
              innovation, transforming how businesses manage their global
              financial operations. What started as a small startup has grown
              into a trusted partner for enterprises worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our mission is to democratize access to global financial services,
              making it possible for businesses of all sizes to compete on the
              world stage. We believe that every business deserves access to the
              same financial tools and opportunities as the largest
              corporations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we process good amount of successful volume, serving
              clients across 10+ countries with our comprehensive suite of FX,
              remittance, and treasury management solutions.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
              <div className="text-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's most trusted platform for global
                  financial operations, enabling businesses to thrive in an
                  interconnected world economy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join the MetaFlow Family
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to transform your business with our comprehensive financial
              solutions? Let's discuss how MetaFlow can help you achieve your
              global financial goals.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
