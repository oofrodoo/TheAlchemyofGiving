import React from "react";
import Navbar from "../components/NavBar";

export default function AcceptableItems() {
  const donationItems = [
    { title: "Clothing", image: "src/assets/clothes.jpg", description: "Includes clothing for women, men, and children: purses, belts, ties, wallets, dresses, shirts, pants, and shoes." },
    { title: "Household Items", image: "src/assets/household.avif", description: "Kitchen items, small appliances, bedding, linens, pillows, curtains, rugs, jewelry, cosmetics, and home decor." },
    { title: "Toys", image: "src/assets/toys.jpg", description: "Stuffed animals, board games, dolls, action figures, and sporting goods." },
    { title: "Electronics", image: "src/assets/electronics.jpg", description: "Gaming consoles, computers, laptops, monitors, DVD players, cameras, and small electronics. (No TVs)" },
    { title: "Books", image: "src/assets/books.jpg", description: "All types of books including hardcovers, paperbacks, fiction, non-fiction, and e-readers." },
    { title: "Equipment", image: "src/assets/equipments.jpg", description: "Exercise equipment, sporting gear, tools, and yard tools (excluding fuel-powered items)." },
    { title: "Small Furniture", image: "src/assets/small furniture.jpg", description: "Mirrors, nightstands, headboards, office chairs, and other small home furnishings." },
    { title: "Miscellaneous", image: "src/assets/last.jpg", description: "Bicycles, musical instruments, small filing cabinets, and various small appliances." },
  ];

  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-red-500 mb-10">List of Acceptable Donations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {donationItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <img src={item.image} alt={item.title} className="w-100 h-50 object-cover rounded-lg" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
