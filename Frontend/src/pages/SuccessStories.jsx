import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Share2,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import studyingImg from "../assets/studying.jpg";
import ruralHouseImg from "../assets/ruralhouse.jpg";

const SuccessStories = () => {
  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);
  const [filter, setFilter] = useState("all");

  const stories = [
    {
      id: 1,
      category: "education",
      title: "Digital Learning for Rural Schools",
      beneficiary: "Rural Education Foundation",
      image: studyingImg,
      description:
        "Provided 100 laptops to underprivileged students, enabling remote learning during the pandemic.",
      impact: "1,200+ students benefited",
      date: "March 2024",
      testimonial:
        "These laptops have transformed our ability to provide quality education...",
      likes: 234,
      comments: 45,
      shares: 89,
    },
    {
      id: 2,
      category: "household",
      title: "Home Essentials for New Families",
      beneficiary: "Family Support Network",
      image: ruralHouseImg,
      description:
        "Furnished 25 homes for families transitioning from temporary housing.",
      impact: "25 families supported",
      date: "February 2024",
      testimonial:
        "Having a fully furnished home has given us stability and hope...",
      likes: 567,
      comments: 78,
      shares: 156,
    },
    // Add more success stories as needed
  ];

  const impactMetrics = [
    { icon: Users, value: "5,000+", label: "Lives Impacted" },
    { icon: Heart, value: "$2.4M", label: "Value Donated" },
    { icon: TrendingUp, value: "89%", label: "Success Rate" },
  ];

  const filterStories = (category) => {
    setFilter(category);
  };

  // Add this function to handle navigation
  const handleDonateClick = () => {
    navigate("/donateform");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Success Stories
          </motion.h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Witness the impact of your generosity through real stories of
            transformation
          </p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <metric.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </h3>
              <p className="text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "education", "household", "clothing"].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => filterStories(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 
                ${
                  filter === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories
            .filter((story) => filter === "all" || story.category === filter)
            .map((story) => (
              <motion.div
                key={story.id}
                layoutId={`story-${story.id}`}
                onClick={() => setSelectedStory(story)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {story.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {story.date}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {story.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {story.comments}
                      </span>
                      <span className="flex items-center">
                        <Share2 className="w-4 h-4 mr-1" />
                        {story.shares}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`story-${selectedStory.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedStory.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedStory.description}
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-green-800 italic">
                    "{selectedStory.testimonial}"
                  </p>
                  <p className="text-green-600 font-medium mt-4">
                    - {selectedStory.beneficiary}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-gray-500">{selectedStory.date}</div>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Be Part of Our Next Success Story
          </h2>
          <motion.button
            onClick={handleDonateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Start Donating Today
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
