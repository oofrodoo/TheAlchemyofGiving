import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavBar";
import Hero from "../assets/hero.avif"; // You may want to use a different hero image for About page
import Footer from "../components/Footer";
import {
  Users,
  Heart,
  Target,
  ShieldCheck,
  Globe,
  Clock,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">

      {/* Hero Section */}
      <div className="w-full h-[90vh] flex items-center justify-center text-center relative">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            background: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        ></div>

        <div className="abosolute z-10 p-8 rounded-lg">
          <h1 className="text-white text-4xl font-bold mb-4">
            About The Alchemy of Giving
          </h1>
          <h2 className="text-white text-lg">
            Transforming generosity into meaningful impact
          </h2>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-12">
            We believe in the power of collective giving to create meaningful change. 
            Our platform connects passionate donors with impactful causes, making the 
            process of giving transparent, efficient, and accessible to everyone.
          </p>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-4xl font-bold text-green-500 mb-2">$2.4M+</h3>
              <p className="text-gray-600">Total Donations Raised</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-4xl font-bold text-green-500 mb-2">15K+</h3>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-4xl font-bold text-green-500 mb-2">50K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="w-full bg-white py-12">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Our Values
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center p-4">
            <Heart className="w-12 h-12 stroke-green-500 stroke-1 mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">
              Compassion
            </h3>
            <p className="text-gray-600">Empowering positive change through giving</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <ShieldCheck className="w-12 h-12 stroke-green-500 stroke-1 mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">
              Trust
            </h3>
            <p className="text-gray-600">Building transparent relationships</p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <Target className="w-12 h-12 stroke-green-500 stroke-1 mb-4" />
            <h3 className="text-xl font-medium text-stone-800 mb-2">
              Impact
            </h3>
            <p className="text-gray-600">Maximizing the effect of every donation</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">Michael Chen</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">Emily Taylor</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition duration-200">
            Start a Fundraiser
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;