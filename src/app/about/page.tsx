// src/app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      {/* Description */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to Kozhikode PG – your trusted destination for comfortable and
          affordable accommodation in the heart of Kozhikode. Our goal is to
          provide a homely stay experience with a focus on cleanliness, safety,
          and convenience.
          <br />
          <br />
          Whether you're a student, working professional, or traveler, we ensure
          a peaceful environment where you can feel at home. Our PG is
          thoughtfully designed to cater to modern needs while maintaining a
          warm and welcoming atmosphere. With a dedicated team to support your
          daily living, we go beyond just offering rooms – we offer a community
          you can rely on.
        </p>
      </section>

      {/* Services */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Furnished single and shared rooms</li>
          <li>24/7 water and electricity</li>
          <li>Free Wi-Fi and housekeeping</li>
          <li>Security and CCTV surveillance</li>
        </ul>
      </section>

      {/* Transport Availability */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Transport Availability</h2>
        <p className="text-gray-700 leading-relaxed">
          Our PG is well-connected to all major parts of the city. Public buses,
          auto-rickshaws, and app-based taxis are easily accessible. We are just
          2 km from the railway station and 1 km from the nearest bus stop.
        </p>
      </section>
    </div>
  );
}
