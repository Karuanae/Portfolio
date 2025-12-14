import React, { useState } from 'react';
import { CheckCircle, Star, Zap, ShoppingCart, PenTool, Camera, Users, ChevronRight, ExternalLink } from 'lucide-react';

const Services = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'BRONZE',
      title: 'Starter Website',
      price: 'KES 20,000 - 30,000',
      timeline: '1-2 weeks',
      description: 'Perfect for startups, personal brands, and small local businesses',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      buttonColor: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700',
      features: [
        '1-3 pages (Home, About, Contact)',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Social media integration',
        'Contact form with email notifications',
        '1 month of free support and minor updates',
        'Basic Google Analytics setup'
      ],
      idealClient: 'Perfect for entrepreneurs just starting out who need a professional online presence quickly.'
    },
    {
      id: 2,
      name: 'SILVER',
      title: 'Business Growth Website',
      price: 'KES 40,000 - 80,000',
      timeline: '2-4 weeks',
      description: 'Perfect for growing companies, established professionals, service businesses',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      features: [
        '5-8 pages (Home, About, Services, Portfolio/Blog, Contact, etc.)',
        'Custom professional design with animations',
        'Advanced SEO optimization',
        'Google Analytics and Search Console setup',
        'Blog or portfolio section with CMS',
        'Newsletter signup integration',
        '3 months of free support and updates',
        '2-hour training session on managing your site'
      ],
      idealClient: 'Ideal for established businesses ready to scale their digital presence',
      popular: true
    },
    {
      id: 3,
      name: 'GOLD',
      title: 'Premium Website / E-commerce',
      price: 'KES 100,000 - 150,000+',
      timeline: '4-8 weeks',
      description: 'Perfect for established brands, e-commerce businesses, companies needing custom features',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      features: [
        'Unlimited pages and custom features',
        'Full e-commerce integration (if needed)',
        'Payment gateway integration (M-Pesa, card payments)',
        'Custom booking or client portal systems',
        'Advanced SEO and performance optimization',
        'Comprehensive analytics and reporting setup',
        '6 months of free support and maintenance'
      ],
      idealClient: 'For businesses needing enterprise-level solutions and advanced functionality'
    }
  ];

  const additionalServices = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Logo Design & Branding',
      price: 'KES 8,000 - 15,000',
      description: 'Custom logo design with brand guidelines'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Content Writing',
      price: 'KES 1,500 per page',
      description: 'Professional copy that converts'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photography Coordination',
      price: 'KES 5,000 coordination fee',
      description: 'Connect with professional photographers'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Social Media Setup',
      price: 'KES 3,000 - 8,000',
      description: 'Professional profiles across all platforms'
    }
  ];

  const consultingServices = [
    {
      title: 'Strategy Session',
      price: 'KES 3,000 - 5,000 per hour',
      duration: 'Video call or in-person (Nairobi)',
      features: [
        'Complete analysis of your current digital presence',
        'Personalized growth strategy recommendations',
        'Technology stack recommendations',
        'Competitive analysis insights',
        'Actionable next steps with priorities',
        'Follow-up summary document'
      ]
    },
    {
      title: 'Digital Audit',
      price: 'KES 10,000 - 15,000',
      duration: '3-5 business days',
      features: [
        'Comprehensive website performance analysis',
        'SEO audit and improvement recommendations',
        'Social media presence evaluation',
        'Competitor analysis and benchmarking',
        'Detailed report with prioritized action items',
        '1-hour consultation to discuss findings'
      ]
    },
    {
      title: 'Monthly Retainer',
      price: 'KES 20,000 - 40,000 per month',
      duration: '3-month minimum',
      features: [
        'Ongoing website updates and improvements',
        'Monthly performance reports and insights',
        'Priority technical support and troubleshooting',
        'Strategic guidance and planning sessions',
        'Content updates and blog management',
        'Security monitoring and backups'
      ]
    }
  ];

  const PackageModal = ({ pkg, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-2 bg-gradient-to-r ${pkg.color} rounded-t-3xl`}></div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className={`text-lg font-bold ${pkg.textColor}`}>{pkg.name}</span>
                {pkg.popular && (
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                    MOST POPULAR
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
              <div className="text-2xl font-bold text-gray-900 mb-4">{pkg.price}</div>
              <div className="flex items-center text-gray-600">
                <Zap className="h-5 w-5 mr-2" />
                <span className="font-medium">{pkg.timeline} delivery</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-900"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className={`${pkg.bgColor} rounded-2xl p-6 mb-6 border ${pkg.borderColor}`}>
                <h4 className="font-semibold text-gray-900 mb-4">Perfect for:</h4>
                <p className="text-gray-700">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ideal Client</h4>
                <p className="text-gray-700 leading-relaxed">{pkg.idealClient}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button className={`${pkg.buttonColor} text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all flex-1`}>
                  <span className="flex items-center justify-center">
                    Select This Package
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </span>
                </button>
                <a
                  href="#contact"
                  className="flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-gray-50 transition-all text-gray-700 font-medium flex-1"
                >
                  <span>Custom Quote</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <CheckCircle className={`w-5 h-5 ${pkg.textColor}`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${pkg.bgColor} p-4 rounded-xl border ${pkg.borderColor}`}>
                <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
                <p className="text-sm text-gray-700">
                  After selecting this package, we'll schedule a discovery call to discuss your specific requirements and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-32 bg-white relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Services & Pricing
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Web Development
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Rate Card
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing for professional websites. Choose the package that fits your business needs.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-6"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group cursor-pointer bg-white rounded-2xl border-2 ${pkg.borderColor} hover:shadow-xl transition-all duration-300 relative`}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${pkg.color} rounded-t-2xl`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className={`w-6 h-6 ${pkg.textColor} mr-2`} />
                    <span className={`text-xl font-bold ${pkg.textColor}`}>{pkg.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {pkg.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  {pkg.price}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {pkg.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color} mr-3 mt-1.5 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                        <span className="text-sm">View all {pkg.features.length} features</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className={`w-full ${pkg.buttonColor} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0`}>
                    <span className="flex items-center justify-center">
                      Select Package
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Additional
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                Services
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Complete your digital transformation with our comprehensive range of additional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <div className="text-xl font-bold text-gray-900 mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Add to package</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Services */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                Consulting
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Get expert guidance and strategic insights to maximize your digital presence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
                <div className="text-gray-500 text-sm mb-8">{service.duration}</div>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-3 mt-1 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                    <span className="flex items-center justify-center">
                      Book {service.title}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get a personalized quote or schedule a free consultation to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
            <span className="text-gray-400 hidden sm:block">or</span>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-blue-300 hover:bg-gray-50 transition-all duration-300 min-w-[200px]"
            >
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Package Modal */}
      {selectedPackage && (
        <PackageModal 
          pkg={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}
    </section>
  );
};

export default Services;