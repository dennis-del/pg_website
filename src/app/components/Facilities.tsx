export default function Facilities() {
    return (
      <div className="container mx-auto my-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <span className="text-3xl">📶</span>
            <p>Free WiFi</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <span className="text-3xl">🥘</span>
            <p>Home Cooked Food</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <span className="text-3xl">🛏️</span>
            <p>Comfortable Rooms</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <span className="text-3xl">💧</span>
            <p>24/7 Water Supply</p>
          </div>
        </div>
      </div>
    );
  }
  