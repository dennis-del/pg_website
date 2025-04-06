"use client";

import React, { useState } from "react";

const PriceDetails: React.FC = () => {
  const [sharingOption, setSharingOption] = useState<"2-sharing" | "3-sharing">("2-sharing");
  const [foodPreference, setFoodPreference] = useState<"with-food" | "without-food">("with-food");

  const downPayment: number = 6000;

  const prices: Record<string, Record<string, number>> = {
    "2-sharing": { "with-food": 6000, "without-food": 3500 },
    "3-sharing": { "with-food": 5000, "without-food": 3000 },
  };

  const totalPrice: number = prices[sharingOption][foodPreference];

  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Price Details</h2>
      <p className="mb-2">Down Payment: <span className="font-semibold">{downPayment} INR</span></p>

      {/* Sharing Options */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Sharing Options</label>
        <select
          className="w-full border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-300"
          value={sharingOption}
          onChange={(e) => setSharingOption(e.target.value as "2-sharing" | "3-sharing")}
        >
          <option value="2-sharing">2 Sharing</option>
          <option value="3-sharing">3 Sharing</option>
        </select>
      </div>

      {/* Food Preference */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Food Preference</label>
        <select
          className="w-full border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-blue-300"
          value={foodPreference}
          onChange={(e) => setFoodPreference(e.target.value as "with-food" | "without-food")}
        >
          <option value="with-food">With Food</option>
          <option value="without-food">Without Food</option>
        </select>
      </div>

      <h3 className="text-xl font-semibold">
        Total Price: <span className="text-blue-500">{totalPrice} INR</span>
      </h3>
    </div>
  );
};

export default PriceDetails;
