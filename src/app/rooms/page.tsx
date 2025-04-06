"use client";
import React from "react";
import { FaWifi, FaTv, FaShower, FaBed } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "Single Room",
    image: "https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743751085-N2317B7K3I2YBZHPHENO/image-asset.jpeg",
    price: "₹5,000 / month",
    features: ["Free Wi-Fi", "Attached Bathroom", "Single Bed"],
  },
  {
    id: 2,
    name: "Double Sharing Room",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/0b/ed/61/grand-plaza-suites.jpg",
    price: "₹3,000 / month",
    features: ["Free Wi-Fi", "Shared Bathroom", "Two Beds"],
  },
  {
    id: 3,
    name: "AC Room",
    image: "https://www.houzlook.com/assets/images/upload/Rooms/Bed%20Rooms/View_01-20200822103638797.jpg",
    price: "₹7,500 / month",
    features: ["AC", "Free Wi-Fi", "Attached Bathroom", "TV"],
  },
];

export default function RoomsPage() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Rooms</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-60">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
              <p className="text-gray-600 mb-4">{room.price}</p>
              <ul className="space-y-1 text-sm text-gray-700">
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {feature.includes("Wi-Fi") && <FaWifi />}
                    {feature.includes("Bathroom") && <FaShower />}
                    {feature.includes("Bed") && <FaBed />}
                    {feature.includes("TV") && <FaTv />}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
