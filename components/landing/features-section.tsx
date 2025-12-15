export function FeaturesSection() {
  return (
      <section id="product" className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              About our <span className="text-[#1DD1A1]">product</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn about some of the features that we offer you on our platform.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reduces loss</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce losses due to rejections in international standards.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Improve rankings</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminates subjectivity in manual classification.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Increases producer profitability by optimizing quality.
              </p>
            </div>
          </div>

          {/* Laptop Frame with Video */}
          <div className="mt-5 max-w-6xl mx-auto scale-85">
            <div className="relative">
              {/* Laptop Body */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-3 shadow-2xl">
                {/* Laptop Screen Bezel */}
                <div className="bg-black rounded-t-lg p-2">
                  {/* Video Container */}
                  <div className="relative bg-black rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
                    <iframe
                        src="https://www.youtube.com/embed/ewp0oIa4cMU"
                        title="Video del producto"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                  </div>
                </div>

                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl shadow-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>

              {/* Keyboard section */}
              <div className="relative -mt-1">
                <div className="h-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl mx-auto" style={{ width: "85%" }}></div>
              </div>

              {/* Shadow under laptop */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
  )
}