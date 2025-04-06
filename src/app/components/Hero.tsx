"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const sharingOptions = ["2 Sharing", "3 Sharing"];
  const foodpreference = ["With Food", "Without Food"];
  const [sharingOption, setSharingOption] = useState(sharingOptions[0]);
  const [foodPreferenceSelected, setFoodPreferenceSelected] = useState(
    foodpreference[0]
  );
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    // Allow scrolling again when modal is closed
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  
    const message = `Booking Request:
  - Name: ${fullName}
  - Phone: ${phoneNumber}
  - Address: ${address}
  - Sharing: ${sharingOption}
  - Food: ${foodPreferenceSelected}`;
  
    const encodedMessage = encodeURIComponent(message);
    const phoneNumberOwner = "917559839905";
    const whatsappURL = `https://wa.me/${phoneNumberOwner}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  };
  

  return (
    <div
      className="relative w-full flex items-center justify-center text-white text-center"
      style={{ height: "100vh" }}
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
      <div className="relative z-10 px-4 max-w-full">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Cozy & Budget-Friendly PG in Kozhikode
        </h1>
        <p className="mt-2 text-base md:text-lg">
          Affordable & comfortable stay with modern amenities.
        </p>
        <button
          className="mt-4 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
          onClick={handleOpenModal}
        >
          Book Now
        </button>
      </div>

      {/* Shadow at the Bottom */}
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Modal - Mobile First Approach */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-20 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black z-30 w-full max-w-md">
            <h2 className="text-xl font-bold text-black mb-4">
              Booking Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-black">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="border rounded w-full p-2"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="border rounded w-full p-2"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-black">Address</label>
                <input
                  type="text"
                  id="address"
                  className="border rounded w-full p-2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <Listbox value={sharingOption} onChange={setSharingOption}>
                <div className="relative">
                  <label className="block mb-2 text-black">
                    Sharing Options
                  </label>
                  <Listbox.Button className="w-full border rounded p-2 text-left">
                    {sharingOption}
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-max bg-white shadow rounded">
                    {sharingOptions.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              <Listbox
                value={foodPreferenceSelected}
                onChange={setFoodPreferenceSelected}
              >
                <div className="relative mt-3">
                  <label className="block mb-2 text-black">
                    Food Preference
                  </label>
                  <Listbox.Button className="w-full border rounded p-2 text-left">
                    {foodPreferenceSelected}
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-max bg-white shadow rounded">
                    {foodpreference.map((option, idx) => (
                      <Listbox.Option
                        key={idx}
                        value={option}
                        className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                      >
                        {option}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Submit via WhatsApp
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
