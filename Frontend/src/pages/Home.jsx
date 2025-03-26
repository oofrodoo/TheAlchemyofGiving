import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.avif";
import Courasel from "../assets/Courasel.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import {
  Heart,
  Target,
  Coffee,
  Palette,
  AlertTriangle,
  GraduationCap,
  Users,
  Crosshair,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      {/* Hero Section */}
      <div className="w-full h-[100vh] flex items-center justify-center text-center relative">
        <div className="absolute top-0 left-0 right-0 ">
        </div>

        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            background: `url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        ></div>

        {/* Content */}
        <div className="abosolute z-10  p-8 rounded-lg">
          <h1 className="text-white text-4xl font-bold mb-4">
            A Little Care Can Change the World
          </h1>

          <button className="bg-green-300 hover:bg-green-500 text-gray-800 px-6 py-2 rounded-full font-medium transition duration-200 mb-4">
            Start a Fundraiser!
          </button>

          <h2 className="text-white text-lg">
            For Individuals and charities. No startup fees. No hidden fees.
          </h2>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-white mt-4 py-12 px-8">
        {/* Section Title */}
        <h1 className="text-center text-5xl font-bold text-gray-800 mb-8">
          Designed to Do Good
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] items-center gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Peer 2 Peer fundraiser for individuals, teams & supporters
            </h2>
            <p className="text-lg text-gray-600">
              Allow your community to become individual fundraisers or encourage
              a friendly competition by creating teams, setting team captains,
              and getting real-time updates.
            </p>
          </div>

          {/* Right Image*/}
          <div>
            <img
              src={Courasel}
              alt="Fundraising Example"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Campaings */}
      <div className="w-full bg-gray-50 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          Trending Campaings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto mt-8">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Helps */}

      <div className="w-full bg-white py-8">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-6">
          The Alchemy of Giving Helps
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-4">
            <Coffee className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Clubs & Community
            </h3>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-4">
            <Palette className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Creative Projects
            </h3>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-4">
            <AlertTriangle className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Disaster Relief
            </h3>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center p-4">
            <GraduationCap className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Fraternities & Sororities
            </h3>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center text-center p-4">
            <Crosshair className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Fun & Special Events
            </h3>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center text-center p-4">
            <Users className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Kids & Family
            </h3>
          </div>

          {/* Item 7 */}
          <div className="flex flex-col items-center text-center p-4">
            <Users className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">LGBT</h3>
          </div>

          {/* Item 8 */}
          <div className="flex flex-col items-center text-center p-4">
            <Heart className="w-10 h-10 stroke-green-500 stroke-1 mb-2" />
            <h3 className="text-base font-medium text-stone-800">
              Medical & Health
            </h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
