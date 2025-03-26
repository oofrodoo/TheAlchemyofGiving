import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const DonateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    items: "",
    description: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create new donation with unique ID and pending status
    const newDonation = {
      ...formData,
      id: Date.now(),
      status: "pending",
      date: new Date().toISOString().split("T")[0],
    };

    // Handle image if present
    if (formData.image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Save donation with image data URL
        const donationWithImage = {
          ...newDonation,
          image: reader.result,
        };

        // Get existing donations and add new one
        const existingDonations = JSON.parse(
          localStorage.getItem("donations") || "[]"
        );
        localStorage.setItem(
          "donations",
          JSON.stringify([...existingDonations, donationWithImage])
        );

        // Show success message
        showSuccessMessage();
      };
      reader.readAsDataURL(formData.image);
    } else {
      // Save donation without image
      const existingDonations = JSON.parse(
        localStorage.getItem("donations") || "[]"
      );
      localStorage.setItem(
        "donations",
        JSON.stringify([...existingDonations, newDonation])
      );

      // Show success message
      showSuccessMessage();
    }
  };

  const showSuccessMessage = () => {
    Swal.fire({
      icon: "success",
      title: "Thank You for Your Generous Donation!",
      text: "Your kindness will make a difference in someone's life.",
      footer: '"No one has ever become poor by giving" - Anne Frank',
      confirmButtonColor: "#10B981",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/success");
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Donate Items
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Pickup Address
              </label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="items"
                className="block text-sm font-medium text-gray-700"
              >
                Items to Donate
              </label>
              <input
                type="text"
                name="items"
                id="items"
                value={formData.items}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Item Image
              </label>
              <div className="mt-1 flex items-center">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-50 file:text-green-700
                    hover:file:bg-green-100"
                />
              </div>
              {formData.image && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Donation
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DonateForm;
