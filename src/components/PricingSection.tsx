
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Perfect for individuals getting started with digital health management",
      features: [
        "Basic health tracking",
        "Appointment scheduling",
        "Digital health records",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false,
      buttonClass: "bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600"

    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Ideal for users who want comprehensive health management features",
      features: [
        "Advanced health analytics",
        "Unlimited appointments",
        "Priority booking",
        "Telemedicine consultations",
        "Family account management",
        "24/7 chat support",
        "Health goal tracking",
        "Medication reminders"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      buttonClass: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
    },
    {
      name: "Family",
      price: "$19.99",
      period: "per month",
      description: "Complete health management solution for families and small groups",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Advanced family analytics",
        "Dedicated account manager",
        "Priority customer support",
        "Custom health reports",
        "Healthcare provider network",
        "Insurance integration"
      ],
      buttonText: "Get Started",
      popular: false,buttonClass: "bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600"

    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Flexible Plans for Every
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              User
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your healthcare needs. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full py-3 font-semibold rounded-xl ${plan.buttonClass}`}>
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-xl font-semibold">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
