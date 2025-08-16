export default function About() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "Shorten your links in seconds with our optimized engine.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             className="w-7 h-7 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Clean Links",
      desc: "Transform long, messy URLs into short, professional ones.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             className="w-7 h-7 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-7 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Share Anywhere",
      desc: "Works across social media, chats, and professional platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             className="w-7 h-7 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M6.343 6.343l.707.707M17.657 6.343l-.707.707M17.657 17.657l-.707-.707M6.343 17.657l.707-.707" />
        </svg>
      ),
    },
    {
      title: "Reliable & Free",
      desc: "Linkly is free to use, always available, and secure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth={1.5} 
             stroke="currentColor" 
             className="w-7 h-7 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7zM12 11c0-3.866-3.582-7-8-7v14c4.418 0 8-3.134 8-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Why Choose <span className="text-indigo-600">Linkly?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
