import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, HelpCircleIcon } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
        <p className="text-xl text-muted-foreground">
          Unlock your musical potential with our cutting-edge software suite
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Basic",
            price: "$9.99",
            description: "For hobbyists and beginners",
            features: [
              "10 virtual instruments",
              "50 audio effects",
              "5GB cloud storage",
              "Community forum access",
            ],
          },
          {
            title: "Pro",
            price: "$24.99",
            description: "For serious musicians and producers",
            features: [
              "50 virtual instruments",
              "100 audio effects",
              "25GB cloud storage",
              "Priority email support",
              "Collaboration tools",
            ],
          },
          {
            title: "Enterprise",
            price: "Custom",
            description: "For studios and professional teams",
            features: [
              "Unlimited virtual instruments",
              "Unlimited audio effects",
              "100GB cloud storage",
              "24/7 phone support",
              "Advanced collaboration tools",
              "Custom plugin integration",
            ],
          },
        ].map((tier) => (
          <Card key={tier.title} className="flex flex-col dark:bg-[#000000]">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="text-green-500 mr-2 h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {tier.title === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "Can I switch plans later?",
              answer:
                "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
            },
            {
              question: "Is there a free trial available?",
              answer:
                "We offer a 14-day free trial for all our plans. No credit card required to start your trial.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
            },
            {
              question: "Do you offer educational discounts?",
              answer:
                "Yes, we offer special discounts for students and educational institutions. Please contact our sales team for more information.",
            },
          ].map((faq) => (
            <Card key={faq.question} className="bg-[#000000]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircleIcon className="mr-2 h-5 w-5" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
