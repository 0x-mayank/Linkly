import React, { useState } from "react";
import axios from "axios";

export default function HeroSection() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = () => {
    axios.post('https://linkly-backend-r1cb.onrender.com/api/short',{originalUrl})
      .then((res)=>{
        setShortUrl(res.data);
        console.log("Api Response", res.data)
      })
      .catch((error) => console.log(error))
    console.log(originalUrl)
  }

  return (
    <section className="w-full flex flex-col items-center text-center px-4 mt-50 py-16relative">
      <span className="px-4 py-1 mb-4 rounded-full bg-white shadow-md border border-gray-200 text-sm text-blue-600">
        🔵 Free forever, no signup required
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Shorten URLs <br /> with style
      </h1>
      <p className="mt-4 max-w-xl text-gray-600">
        Transform your long URLs into clean, shareable links. Track performance
        and get insights with our modern URL shortener.
      </p>
      <div className="mt-8 w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="https://your-long-url.com"
            className="w-full px-4 py-3 border-2 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Shorten URL
          </button>
        </div>
        {shortUrl && (
          <div className="mt-6 bg-gray-50 rounded-md p-4 border text-center">
            <p className="text-sm font-semibold text-gray-500">
              YOUR SHORTENED URL
            </p>
            <div className="flex items-center justify-center mt-2">
              <a href= {`https://linkly-backend-r1cb.onrender.com/${shortUrl.url.shortUrl}`}
              rel="noopener noreferrer"
              target="_blank"
              className='text-blue-500 underline mt-2'
              >
              {`link.ly/${shortUrl?.url.shortUrl}`}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
