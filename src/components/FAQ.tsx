import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is NutriMeds a replacement for my doctor?",
      answer: "No. NutriMeds offers supportive insights and educational information, not medical advice. Always consult with your healthcare provider before making any changes to your medication or treatment plan."
    },
    {
      question: "How accurate are your food-drug interaction rules?",
      answer: "Our interaction rules are based on published clinical studies, FDA guidelines, and peer-reviewed medical literature. Our database is continuously updated by our team of pharmacologists and is reviewed regularly for accuracy."
    },
    {
      question: "Can I use this for my parents or family members?",
      answer: "Yes! You can manage multiple profiles from one account (feature coming soon). Each profile maintains separate medical information and receives personalized recommendations based on their specific medications and health conditions."
    },
    {
      question: "Is my medical data safe and private?",
      answer: "Absolutely. All medical records and personal information are encrypted using bank-level security. We follow HIPAA compliance standards and never share your data with third parties. Your privacy is our top priority."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, subscriptions are month-to-month with no long-term commitment. You can cancel anytime from your account settings, and you'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you support medications from all countries?",
      answer: "We currently support medications approved by the FDA, EMA, and major international regulatory bodies. We're continuously expanding our database to include more regional medications and formulations."
    },
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant is trained on medical literature, nutritional guidelines, and drug interaction databases. It provides personalized suggestions based on your specific medications, but always recommends consulting with healthcare professionals for medical decisions."
    },
    {
      question: "What if I have multiple chronic conditions?",
      answer: "NutriMeds is designed to handle complex medical situations. You can input multiple conditions and medications, and our system will provide comprehensive guidance that considers all your health factors simultaneously."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about NutriMeds and how it can help you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl shadow-soft px-6 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you make the most of NutriMeds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@nutrimeds.app"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary bg-transparent text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;