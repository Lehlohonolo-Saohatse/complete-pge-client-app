import React from "react";

const OurServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Add spacing below the navbar */}
      <div className="pt-16 px-4 md:px-8">
        {/* Page Content */}
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <header className="bg-green text-white text-center py-8 px-6">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="mt-2 text-lg">
              Experience the perfect blend of technology and culinary artistry.
            </p>
          </header>

          {/* Main Content */}
          <main className="py-8 px-6 md:px-10 space-y-12">
            {/* Internet Cafe Section */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-6">
                Internet Cafe Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      High-Speed Internet
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Stay connected with our fast and reliable internet services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🖨️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Printing Services
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Convenient and affordable printing, scanning, and copying.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Online Services
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Assistance with applications, registrations, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Computer Space
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Area for typing and surfing the Internet.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Food Cafe Section */}
            <section>
              <h2 className="text-3xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-6">
                Food Cafe Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🍟</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Crispy Fried Chips
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Freshly made and seasoned to perfection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🥙</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Kotas</h3>
                    <p className="text-gray-700 text-lg">
                      Enjoy our signature kotas made with love and bold flavors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🍔</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Fast Food
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Get your favorite meals quickly without compromising taste.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">📦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Online Ordering
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Coming Soon: Order your favorites online!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
