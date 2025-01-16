import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Add spacing below the navbar */}
      <div className="pt-16 px-4 md:px-8">
        {/* Page Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <header className="bg-green text-white text-center py-8 px-6">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">
              Dive into the delights of delectable foods and internet cafe services. Where each Kota weaves a story of culinary mastery and passionate craftsmanship.
            </p>
          </header>

          <main className="py-8 px-6 md:px-10 space-y-12">
            {/* Our Story & Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-4">
                Our Story & Services
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-bold">Putsoa Global Enterprise</span>, we aim to bring you the best of both worlds: incredible food and modern connectivity. Rooted in our kasi flavors and vibes, we craft each meal with care, serving up a mix of bold taste and soulful experiences.
              </p>
            </section>

            {/* Our Kasi Flavors & Vibes */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-4">
                Our Kasi Flavors & Vibes
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Inspired by the heart of the hood, we bring you unforgettable flavors and unmatched vibes. From sizzling street-style treats to soulful hospitality, we serve up kasi culture on every plate.
              </p>
            </section>

            {/* Our Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-4">
                Our Services
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🍟</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Catering
                    </h3>
                    <p className="text-gray-700 text-lg">
                      We serve fresh, crispy fried chips and kotas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">🍔</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">Fast Food</h3>
                    <p className="text-gray-700 text-lg">
                      Enjoy delicious meals without the long wait.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">📦</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Online Ordering
                    </h3>
                    <p className="text-gray-700 text-lg">Coming Soon!</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">💻</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Internet Cafe
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Stay connected with our reliable internet cafe services.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-600 inline-block mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                From mouth-watering meals to modern tech services, we’re here to make every experience with{" "}
                <span className="font-bold">Putsoa Global Enterprise</span>{" "}
                special. Experience the perfect blend of kasi vibes and culinary craftsmanship.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
