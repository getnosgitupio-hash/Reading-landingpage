import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import verifiedIcon from "../assets/verified-icon.png";
import bgImage from "../assets/bg.png";
import loadingGif from "../assets/loading.gif";
import "../App.css";
import Heroimage from "../assets/banner.png";

const WorkshopLanding = () => {
  return (
    <div
      className="px-0 md:px-6 pt-0 md:pt-3 pb-8 text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto p-4 md:p-6 rounded-lg">
        <h2 className="text-4xl md:text-[48px] font-extrabold leading-8 md:leading-snug max-sm:text-[21px]">
          Are You Looking to{" "}
          <span className="bg-[#D2F801] px-1 font-extrabold">
           Score Band 8+ in IELTS Writing
          </span>{" "}
          & Finally Get Your{" "}
          <span className="bg-[#D2F801] px-1 font-extrabold">Band 8+</span>{" "}
       Visa in 2026?
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-xl mt-4 max-sm:text-[16px]">
         In just 3 days, I’ll show you the exact system Band 8+ scorers use to solve passages faster, answer accurately, and avoid common traps.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative mt-10 max-w-3xl mx-auto max-sm:px-2">
        {/* Left Arrow + Tag (HIDE on mobile) */}
        <img
          src={arrowLeft}
          alt="arrow left"
          className="absolute -left-12 top-10 w-28 z-10 hidden md:block"
        />
        <span className="absolute bottom-20 -left-28 bg-[#D2F801] font-medium text-lg text-left px-3 py-2 rounded z-10 hidden md:block">
          LED BY <br />{" "}
          <h3 className="font-extrabold text-3xl">CA GANESH BUGUIDI</h3>
        </span>
        <span className="absolute bottom-80 -left-48 text-xl font-medium hidden md:block">
          Replays included
        </span>

        {/* Video Embed */}
       <div className="rounded-lg overflow-hidden shadow-lg">
        <img alt="Workshop Banner" className="w-full h-auto" src={Heroimage} />
        </div>

        {/* Right Arrow + Tags (HIDE on mobile) */}
        <img
          src={arrowRight}
          alt="arrow right"
          className="absolute right-[7.4rem] -bottom-[17%] w-24 hidden md:block"
        />
        <span className="absolute top-24 -right-10 bg-[#D2F801] font-normal text-xl px-3 py-2 rounded hidden md:block">
          TRAINED <strong className="font-extrabold">THOUSANDS</strong> <br />{" "}
          ACROSS INDIA
        </span>
        <span className="absolute -bottom-20 -right-4 text-xl font-medium hidden md:block">
          Beginner-friendly
        </span>
      </div>

      {/* Pricing Section */}
      <div className="mt-4 md:mt-12 bg-white/80 p-6 lg:p-2 rounded-lg max-w-lg mx-auto max-sm:p-3">
        <h3 className="text-4xl font-bold max-sm:text-lg">
          Today Only: <span className="text-black text-4xl max-sm:text-lg">₹99</span>
        </h3>
        <p className="text-[#FE0000] text-2xl font-semibold mt-4 max-sm:text-sm">
          🔥 ORIGINAL: ₹1,999 - LIMITED SEATS
        </p>
        <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 py-2 lg:py-5">
        <div className="hidden sm:flex items-center gap-6 text-md text-black/80">
          <span>⭐ 4.9/5 Rating</span>
          <span>👥 10k+ Students</span>
        </div>
      </div>
      </div>

      {/* CTA Button */}
      <a
  href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="uppercase group relative overflow-hidden bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-base max-sm:px-4 max-sm:py-3">
    JOIN THE 3-DAY Writing WORKSHOP
    <span
      aria-hidden="true"
      className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
    />
  </button>
</a>

<p className="mt-4 text-center text-sm font-semibold text-gray-700">
  Live on Zoom | Feb 23rd – 25th, 2026 | 9 PM – 11 PM IST
</p>


      {/* Progress Bar */}
      <div className="relative mt-0 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-60 md:w-96 max-sm:w-72"
        />
      </div>
    </div>
  );
};

export default WorkshopLanding;
