import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const DonatedItems = () => {
  const [donations, setDonations] = useState([]);

  // Load donations from localStorage on component mount
  useEffect(() => {
    const storedDonations = JSON.parse(
      localStorage.getItem("donations") || "[]"
    );
    setDonations(storedDonations);
  }, []);

  const handleAction = (id, action) => {
    Swal.fire({
      title: `Confirm ${action}?`,
      text: `Are you sure you want to ${action} this donation?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: action === "accept" ? "#10B981" : "#EF4444",
      confirmButtonText: action === "accept" ? "Accept" : "Reject",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedDonations = donations.map((donation) =>
          donation.id === id
            ? {
                ...donation,
                status: action === "accept" ? "accepted" : "rejected",
              }
            : donation
        );

        // Update state and localStorage
        setDonations(updatedDonations);
        localStorage.setItem("donations", JSON.stringify(updatedDonations));

        // Show confirmation
        Swal.fire({
          icon: action === "accept" ? "success" : "info",
          title: `Donation ${action === "accept" ? "Accepted" : "Rejected"}`,
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Donated Items</h1>
        {donations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No donations received yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {donations.map((donation) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{donation.items}</h3>
                    <p className="text-gray-600">Donated by: {donation.name}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {donation.description}
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-500 text-sm">
                        Email: {donation.email}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Phone: {donation.phone}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Address: {donation.address}
                      </p>
                    </div>
                  </div>
                  {donation.image && (
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={donation.image}
                        alt="Donated item"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    {donation.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleAction(donation.id, "accept")}
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleAction(donation.id, "reject")}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {donation.status === "accepted" && (
                      <span className="text-green-500 font-medium">
                        Accepted
                      </span>
                    )}
                    {donation.status === "rejected" && (
                      <span className="text-red-500 font-medium">Rejected</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatedItems;

// In DonateForm.jsx, update the handleSubmit function
const handleSubmit = (e) => {
  e.preventDefault();

  // Create new donation with unique ID and pending status
  const newDonation = {
    ...formData,
    id: Date.now(),
    status: "pending",
    date: new Date().toISOString().split("T")[0],
  };

  // Get existing donations and add new one
  const existingDonations = JSON.parse(
    localStorage.getItem("donations") || "[]"
  );
  localStorage.setItem(
    "donations",
    JSON.stringify([...existingDonations, newDonation])
  );

  // Show success message and redirect
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
