import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Shield, Star, Award, ArrowRight } from 'lucide-react'
import Hero from '../assets/hero.avif'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavBar'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="w-full h-[90vh] flex items-center justify-center text-center relative">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh"
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
            Welcome to The Alchemy of Giving
          </h1>
          
          <p className="text-white text-xl mb-12 max-w-3xl mx-auto">
            A platform dedicated to connecting donors with those in need through simple, secure, and transparent giving.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login" className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full font-medium text-lg transition duration-200 shadow-lg hover:shadow-xl">
              Login
            </Link>
            <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-medium text-lg transition duration-200 shadow-lg hover:shadow-xl">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-white py-20 px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About The Alchemy of Giving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're transforming the way people give and receive help by creating meaningful connections between donors and recipients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2023, The Alchemy of Giving was created with a simple mission: to make giving as easy and impactful as possible. We believe that everyone has something to give, and everyone deserves the opportunity to receive help when needed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our platform connects those who wish to donate items or funds directly with individuals and organizations who need them most, eliminating middlemen and ensuring that 100% of your contribution reaches its intended destination.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're looking to donate household items, educational materials, or financial support, The Alchemy of Giving provides a secure, transparent, and efficient way to make a difference.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500 mb-2">$2.4M+</p>
                  <p className="text-gray-600">Donations Raised</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500 mb-2">15K+</p>
                  <p className="text-gray-600">Campaigns</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500 mb-2">50K+</p>
                  <p className="text-gray-600">Lives Impacted</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500 mb-2">120+</p>
                  <p className="text-gray-600">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at The Alchemy of Giving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Compassion</h3>
              <p className="text-gray-600">
                We believe in empathy and understanding as the foundation of meaningful giving.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We maintain complete openness about how donations are used and distributed.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our operations and relationships.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Dignity</h3>
              <p className="text-gray-600">
                We respect the inherent worth of every individual in our giving and receiving community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start making a difference today
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-1 bg-green-100 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Step 1 */}
              <div className="md:text-right">
                <div className="relative">
                  <div className="hidden md:flex absolute top-0 right-0 md:right-[-28px] w-14 h-14 bg-green-500 rounded-full items-center justify-center z-10 text-white font-bold text-xl">1</div>
                  <h3 className="text-2xl font-bold mb-4 mr-10">Create an Account</h3>
                  <p className="text-lg text-gray-600 mt-5">Sign up in less than 2 minutes and join our community of givers and receivers.</p>
                </div>
              </div>
              <div className="md:mt-32"></div>

              {/* Step 2 */}
              <div></div>
              <div>
                <div className="relative">
                  <div className="hidden md:flex absolute top-0 left-[-28px] w-14 h-14 bg-green-500 rounded-full items-center justify-center z-10 text-white font-bold text-xl">2</div>
                  <h3 className="text-2xl font-bold mb-4 ml-10">Browse or Create Campaigns</h3>
                  <p className="text-lg text-gray-600 mt-5">Explore ongoing donation campaigns or start your own to meet specific needs.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:text-right">
                <div className="relative">
                  <div className="hidden md:flex absolute top-0 right-[-28px] w-14 h-14 bg-green-500 rounded-full items-center justify-center z-10 text-white font-bold text-xl">3</div>
                  <h3 className="text-2xl font-bold mb-4 mr-10">Make a Difference</h3>
                  <p className="text-lg text-gray-600 mt-5">Donate items or funds securely and track your contribution's impact.</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-green-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join The Alchemy of Giving?
          </h2>
          <p className="text-white text-xl mb-8 opacity-90">
            Create your account today and become part of a community dedicated to making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login" className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full font-medium text-lg transition duration-200">
              Login
            </Link>
            <Link to="/signup" className="bg-transparent hover:bg-green-600 text-white border-2 border-white px-10 py-4 rounded-full font-medium text-lg transition duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
