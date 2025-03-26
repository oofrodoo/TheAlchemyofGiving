import React from 'react'
import card from "../assets/card.jpg";

const Card = () => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white p-4">
      {/* Header with title and image */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h2 className="text-xl font-bold text-stone-800">
          Donate<br />
          for<br />
          Good
        </h2>
        <div className="bg-white p-1 border border-green-500">
          <img 
            src={card}
            alt="Sudani Refugee Relief" 
            className="w-24 h-32 object-cover"
          />
        </div>
      </div>
      {/* Progress bar */}
      <div className="mt-4 mb-2">
        <div className="w-full h-2 bg-green-500"></div>
      </div>

      {/* Amount and percentage */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-stone-800">$9,188</span>
        <span className="text-lg text-stone-800">92%</span>
      </div>

      {/* Location info */}
      <div className="text-sm text-stone-800 mb-4">
        <p>Itahari, Sunsari</p>
        <p>New Phone</p>
      </div>

      {/* Donate button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-center font-medium">
        DONATE
      </button>
    </div>
  )
}

export default Card
