import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Gift,
  Home,
  BookOpen,
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Footer from "../components/Footer";

const Donate = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Household Appliances",
      icon: Home,
      items: [
        "Refrigerators",
        "Washing Machines",
        "Microwaves",
        "Air Conditioners",
      ],
      description:
        "Your gently used appliances can help families in need create a comfortable home environment.",
    },
    {
      id: 2,
      title: "Educational Materials",
      icon: BookOpen,
      items: ["Laptops", "Tablets", "Books", "School Supplies"],
      description:
        "Support education by donating learning tools and resources to students who need them most.",
    },
    {
      id: 3,
      title: "Clothing & Accessories",
      icon: ShoppingBag,
      items: ["Clean Clothes", "Shoes", "Bags", "Winter Wear"],
      description:
        "Help others stay warm and confident with your clothing donations.",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      info: "donations@alchemyofgiving.org",
      action: "mailto:donations@alchemyofgiving.org",
    },
    {
      icon: MapPin,
      title: "Drop-off Location",
      info: "123 Charity Street, NY 10001",
      action: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Donations Make a Difference
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Transform lives by donating your gently used items to those in
              need
            </p>
            <motion.button
              onClick={() => navigate("/donateform")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Start Donating Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Can You Donate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <category.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Gift className="w-4 h-4 mr-2 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <contact.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">1,234+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <Gift className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">5,678+</h3>
              <p className="text-gray-600">Items Donated</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <Home className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">890+</h3>
              <p className="text-gray-600">Families Supported</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
