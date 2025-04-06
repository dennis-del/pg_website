export default function Gallery() {
    return (
      <div className="container mx-auto my-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.trvl-media.com/lodging/105000000/104490000/104486600/104486514/0551d8fa.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" className="rounded-lg shadow-md" alt="Room 1" />
          <img src="https://images.trvl-media.com/lodging/105000000/104490000/104486600/104486514/0551d8fa.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" className="rounded-lg shadow-md" alt="Room 2" />
          <img src="https://images.trvl-media.com/lodging/105000000/104490000/104486600/104486514/0551d8fa.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" className="rounded-lg shadow-md" alt="Room 3" />
          <img src="https://images.trvl-media.com/lodging/105000000/104490000/104486600/104486514/0551d8fa.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" className="rounded-lg shadow-md" alt="Room 4" />
        </div>
      </div>
    );
  }
  