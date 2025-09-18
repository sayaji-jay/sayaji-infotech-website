'use client';


const ClientLogos = () => {
  // Client logos with clean, recognizable brands
  const clients = [
    { name: "Microsoft", text: "Microsoft" },
    { name: "Google", text: "Google" },
    { name: "Amazon", text: "Amazon" },
    { name: "Meta", text: "Meta" },
    { name: "Apple", text: "Apple" },
    { name: "Netflix", text: "Netflix" },
    { name: "Spotify", text: "Spotify" },
    { name: "Uber", text: "Uber" },
    { name: "Airbnb", text: "Airbnb" },
    { name: "Tesla", text: "Tesla" },
    { name: "Adobe", text: "Adobe" },
    { name: "Shopify", text: "Shopify" },
    { name: "IBM", text: "IBM" },
    { name: "Oracle", text: "Oracle" },
    { name: "Samsung", text: "Samsung" },
    { name: "Intel", text: "Intel" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Purple Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      {/* Full Width Container */}
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <p className="text-gray-400 text-lg font-medium">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Full Width Logos Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="relative h-24 overflow-hidden">
            <div
              className="flex items-center space-x-20 absolute top-0 whitespace-nowrap"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                animation: 'scroll-left 30s linear infinite'
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-16 flex items-center justify-center"
                >
                  <div className="text-gray-700 font-bold text-xl tracking-wide cursor-default transition-all duration-300 hover:text-gray-600">
                    {client.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left (offset) */}
          <div className="relative h-24 overflow-hidden mt-8">
            <div
              className="flex items-center space-x-20 absolute top-0 whitespace-nowrap"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                animation: 'scroll-right 35s linear infinite'
              }}
            >
              {/* Reverse order for opposite direction */}
              {[...clients.slice().reverse(), ...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
                <div
                  key={`${client.name}-reverse-${index}`}
                  className="flex-shrink-0 w-40 h-16 flex items-center justify-center"
                >
                  <div className="text-gray-700 font-bold text-xl tracking-wide cursor-default transition-all duration-300 hover:text-gray-600">
                    {client.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 px-4">
          <p className="text-gray-500 text-sm">
            Join 500+ companies that trust us with their digital transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;