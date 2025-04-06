"use client";

import React, { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Collect form data with type assertions
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const sharingOption = (document.getElementById("sharingOption") as HTMLSelectElement).value;
    const foodPreference = (document.getElementById("foodPreference") as HTMLSelectElement).value;

    // Construct WhatsApp message
    const message = `Booking Request:
    - Name: ${fullName}
    - Phone: ${phoneNumber}
    - Address: ${address}
    - Sharing: ${sharingOption}
    - Food: ${foodPreference}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL (Replace with owner's phone number)
    const phoneNumberOwner = "917559839905"; // Change this to the owner's WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumberOwner}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="relative w-full flex items-center justify-center text-white text-center"
      style={{ height: "100vh" }} // Full screen height
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/5159095/5159095-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold tracking-tighter">Cozy & Budget-Friendly PG in Kozhikode</h1>
        <p className="mt-2 text-lg">Affordable & comfortable stay with modern amenities.</p>
        <button
          className="mt-4 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
          onClick={handleOpenModal}
        >
          Book Now
        </button>
      </div>

      {/* Shadow at the Bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black z-30 w-1/4">
            <h2 className="text-xl font-bold text-black mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-black">Full Name</label>
                <input type="text" id="fullName" className="border rounded w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Phone Number</label>
                <input type="tel" id="phoneNumber" className="border rounded w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Address</label>
                <input type="text" id="address" className="border rounded w-full p-2" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Sharing Options</label>
                <select id="sharingOption" className="border rounded w-full p-2 text-black">
                  <option value="2-sharing">2 Sharing</option>
                  <option value="3-sharing">3 Sharing</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Food Preference</label>
                <select id="foodPreference" className="border rounded w-full p-2">
                  <option value="with-food">With Food</option>
                  <option value="without-food">Without Food</option>
                </select>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit via WhatsApp
              </button>
              <button
                type="button"
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
