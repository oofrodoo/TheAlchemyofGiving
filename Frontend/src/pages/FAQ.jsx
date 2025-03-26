import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start a fundraiser?",
          answer:
            "Starting a fundraiser is easy! Click the 'Start a Fundraiser' button, fill in your campaign details, add photos or videos, set your goal, and share your story. We'll guide you through each step.",
        },
        {
          question: "Is there a fee to create a fundraiser?",
          answer:
            "No, creating a fundraiser is completely free. We only charge a small processing fee on donations to cover transaction costs and platform maintenance.",
        },
        {
          question: "What types of fundraisers can I create?",
          answer:
            "You can create fundraisers for various causes including medical expenses, education, community projects, creative projects, and more. All fundraisers must comply with our terms of service.",
        },
      ],
    },
    {
      category: "Donations",
      questions: [
        {
          question: "How quickly will I receive my donations?",
          answer:
            "Donations are typically processed within 2-5 business days and transferred directly to your connected bank account.",
        },
        {
          question: "Can I donate anonymously?",
          answer:
            "Yes, you can choose to make your donation anonymous during the checkout process. Your name won't be displayed publicly.",
        },
        {
          question: "Is my donation tax-deductible?",
          answer:
            "Tax deductibility depends on the type of fundraiser and the organization. Donations to verified nonprofit organizations are typically tax-deductible.",
        },
      ],
    },
    {
      category: "Campaign Management",
      questions: [
        {
          question: "Can I edit my fundraiser after launching?",
          answer:
            "Yes, you can edit your fundraiser's details, updates, and images at any time through your dashboard.",
        },
        {
          question: "How do I share my fundraiser?",
          answer:
            "You can share your fundraiser through social media, email, or by copying your unique campaign link from your dashboard.",
        },
        {
          question: "Can I set up recurring donations?",
          answer:
            "Yes, donors have the option to set up monthly recurring donations to support your cause long-term.",
        },
      ],
    },
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-500 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Find answers to common questions about The Alchemy of Giving
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {filteredFAQ.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const isOpen = openItems[`${categoryIndex}-${questionIndex}`];
                return (
                  <div key={questionIndex} className="border-b border-gray-200">
                    <button
                      className="w-full py-6 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                    >
                      <span className="text-left text-lg font-medium text-gray-900">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center p-8 bg-white rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
