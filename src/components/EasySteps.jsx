import React from "react";
import verifiedIcon from "../assets/verified-icon.png"; // ✅ verification icon
import loadingGif from "../assets/loading.gif"; // ✅ loading/progress gif
import StepsImage from "../assets/steps-image.png"; // ✅ desktop steps image
import MobileStepsImage from "../assets/mob.svg"; // ✅ mobile steps image

const EasySteps = () => {
  return (
    <section className="bg-[#1862E3] text-gray-900 px-2 py-12 md:py-16">
      {/* Heading */}
      <h2 className="text-[25px] md:text-4xl font-extrabold text-white text-center mb-0 md:mb-12">
        Crack IELTS Reading In{" "} <br />
        <span className="bg-[#D2F801] text-black px-2">3 Easy Steps</span>
      </h2>

      {/* Steps */}
      <div className="flex justify-center">
        {/* Mobile Image */}
        <img
          src={MobileStepsImage}
          alt="Steps mobile"
          className="w-full max-w-sm md:hidden"
        />

        {/* Desktop Image */}
        <img
          src={StepsImage}
          alt="Steps desktop"
          className="hidden md:block md:max-w-4xl w-full"
        />
      </div>

      {/* Pricing */}
      <div className="text-center md:mt-6">
        <h3 className="text-lg md:text-4xl text-white font-bold">
          Today Only: ₹99
        </h3>
        <p className="text-[#D2F801] text-sm md:text-xl font-semibold mt-4">
          🔥 ORIGINAL: ₹1,999 · LIMITED SEATS
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-200 text-xs md:text-base mt-4">
          <img src={verifiedIcon} alt="verified" className="w-5" />
          Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col items-center">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden bg-[#D2F801] px-4 md:px-8 py-6 rounded-2xl font-extrabold text-sm md:text-3xl">
      START YOUR BAND-9 READING SPRINT TODAY
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
      />
    </button>
  </a>

  <p className="mt-4 text-sm font-semibold text-white text-center">
    Live on Zoom | Feb 23rd – 25th, 2026 | 9 PM – 11 PM IST
  </p>
</div>


      {/* Progress Bar */}
      <div className="relative mt-2 md:mt-2 flex flex-col items-center">
        <img src={loadingGif} alt="Loading progress" className="w-72 md:w-96" />
      </div>
    </section>
  );
};

export default EasySteps;
