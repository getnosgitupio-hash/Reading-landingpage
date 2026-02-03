import React from "react";
import tickIcon from "../assets/tick.png"; // ✅ your tick image
import verifiedIcon from "../assets/verified-icon.png"; // ✅ your verification icon
import loadingGif from "../assets/loading.gif"; // ✅ your loading/progress gif

const WorkshopSchedule = () => {
  return (
    <section className="px-2 md:px-6 py-12 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 max-sm:text-[25px]">
        <span className="bg-[#D2F801] px-2">3-Day Workshop</span> Schedule
      </h2>

      {/* Day Cards */}
 <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
  {/* Day 1 */}
  <div className="bg-white shadow-md text-left">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 1</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        True, False & Not Given
      </h4>
    </div>
    <div className="p-6">
      <p className="font-semibold max-sm:text-sm">
        What you usually do: Guess blindly, overthink statements, lose marks.
      </p>

      <p className="mt-3 font-semibold max-sm:text-sm">What I’ll teach you:</p>
      <ul className="space-y-2 mt-2 text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Step-by-step decoding method to identify the exact meaning.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Keyword alignment strategy to spot traps.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Live practice to build speed and confidence.
        </li>
      </ul>

      <p className="mt-4 text-sm text-gray-900">
        Your takeaway: Never guess blindly and instantly spot NOT GIVEN vs FALSE.
      </p>
    </div>
  </div>

  {/* Day 2 */}
  <div className="bg-white shadow-md text-left">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 2</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        Matching Headings
      </h4>
    </div>
    <div className="p-6">
      <p className="font-semibold max-sm:text-sm">
        What you usually do: Read every word, waste time, choose headings that
        “sound correct.”
      </p>

      <p className="mt-3 font-semibold max-sm:text-sm">
        What Band 9 scorers do (my strategy):
      </p>
      <ul className="space-y-2 mt-2 text-sm lg:text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          3-step paragraph analysis.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Recognize patterns like examiners do.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Eliminate wrong options instantly.
        </li>
      </ul>

      <p className="mt-4 text-sm text-gray-900">
        Your takeaway: Match headings effortlessly and finish faster than 90% of
        test takers.
      </p>
    </div>
  </div>

  {/* Day 3 */}
  <div className="bg-white shadow-md text-left ">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 3</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        Matching Information
      </h4>
    </div>
    <div className="p-6">
      <p className="font-semibold max-sm:text-sm">
        What you usually do: Hunt randomly, panic, reread endlessly.
      </p>

      <p className="mt-3 font-semibold max-sm:text-sm">
        What Band 9 scorers do (my strategy):
      </p>
      <ul className="space-y-2 mt-2 text-sm lg:text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Information Mapping technique.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Connect scattered info logically.
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Practice tricks that save minutes per question.
        </li>
      </ul>

      <p className="mt-4 text-sm text-black">
        Your takeaway: Read smart, never miss scattered info, and turn this
        dreaded section into a scoring machine.
      </p>
    </div>
  </div>
</div>


      {/* Text section */}
      <div className="max-w-4xl mx-auto mt-8 md:mt-12 text-left">
        <h3 className="font-extrabold text-lg md:text-xl max-sm:text-base">
          Score Big Now Or <br /> Build Reading Power For Life
        </h3>
        <p className="mt-6 text-gray-800 leading-relaxed text-base md:text-lg max-sm:text-sm">
          When I first cracked <strong>Band 9</strong>, I realised Reading wasn’t about speed it was about systems...
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed text-base md:text-lg max-sm:text-sm">
          Here’s the best part: this workshop gives you both options...
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-8 md:mt-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold max-sm:text-lg">Today Only: ₹99</h3>
        <p className="text-[#FE0000] text-xl font-semibold mt-2 max-sm:text-sm">
          🔥 ORIGINAL: ₹1,999 - LIMITED SEATS
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-950 text-base mt-2 max-sm:text-xs">
          <img src={verifiedIcon} alt="verified" className="w-5 max-sm:w-4" />
          Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex flex-col items-center">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-sm max-sm:px-6 max-sm:py-3">
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
      <div className="relative mt-0 md:mt-2 flex flex-col items-center">
        <img src={loadingGif} alt="Loading progress" className="w-60 md:w-96 max-sm:w-72" />
      </div>
    </section>
  );
};

export default WorkshopSchedule;
