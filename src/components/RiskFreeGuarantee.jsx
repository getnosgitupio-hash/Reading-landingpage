import React from "react";
import blueBadge from "../assets/blue-badge.png"; 
import verifiedIcon from "../assets/verified-icon.png"; 
import loadingGif from "../assets/loading.gif"; 

const RiskFreeGuarantee = () => {
  return (
    <section className="px-6 pt-28 pb-12 md:pb-20 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 leading-snug max-sm:text-xl">
        14 days - Risk-free{" "}
        <span className="bg-[#D2F801] px-2">Guarantee*</span>
      </h2>

      {/* P.S. Line + Badge in Flex */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between mb-6 text-center md:text-left">
        <p className="font-bold text-base md:text-3xl max-sm:text-sm">
          P.S. Try the IELTS Reading Workshop completely risk-free.
        </p>
        <img
          src={blueBadge}
          alt="Client Review Badge"
          className="max-w-[10rem] md:max-w-[14rem] mx-auto md:mx-0 mt-4 md:mt-0"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-gray-800 leading-relaxed mb-4 max-sm:text-sm">
          I’m so confident this 3-day system will help you hit Band 8+ in
          Reading that I’m backing it with a simple promise:{" "}
          <strong>
            attend the sessions or watch the replays, do the drill sheets,
            practise with mock tests under time
          </strong>
          , and if after getting your IELTS result you don’t achieve Band 8+,
          just reach out within 14 days and I’ll refund your ₹99.
        </p>

        <p className="text-gray-800 leading-relaxed mb-4 max-sm:text-sm">
          No tricks, no hard feelings, just share the proof and we’ll make it
          right.
        </p>

        <p className="text-gray-800 leading-relaxed text-sm md:text-base max-sm:text-xs">
          <strong>Fair-use T&Cs:</strong> valid within 14 days of your official
          IELTS result release, for first-time enrolments, after a good-faith
          attempt (attend workshop all 3 days + complete the Day-1 drill +
          attempt mock tests). Refunds are processed to the original payment
          method.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="text-center mt-8 md:mt-12">
        <h3 className="text-2xl md:text-3xl font-bold max-sm:text-lg">
          Today Only: ₹99
        </h3>
        <p className="text-[#FE0000] text-xl font-semibold mt-3 max-sm:text-sm">
          🔥 ORIGINAL: ₹1,999 · LIMITED SEATS
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-950 text-base mt-3 max-sm:text-xs">
          <img src={verifiedIcon} alt="verified" className="w-4 md:w-5" />
          Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-4 md:mt-8 flex flex-col items-center">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden text-black bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-sm max-sm:px-4 max-sm:py-3">
      JOIN THE 3-DAY BAND-9 SPRINT NOW
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
      />
    </button>
  </a>

  <p className="mt-4 text-sm font-semibold text-gray-800 max-sm:text-xs text-center">
    Live on Zoom | Feb 23rd – 25th, 2026 | 9 PM – 11 PM IST
  </p>
</div>


      {/* Progress bar */}
      <div className="relative mt-2 md:mt-4 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
};

export default RiskFreeGuarantee;
