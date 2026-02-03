import tickIcon from "../assets/tick.png";
import privacyIcon from "../assets/verified-icon.png";
import loadingGif from "../assets/loading.gif";

const JourneySection = () => {
  return (
    <section className="px-4 md:px-6 py-8 md:py-8 max-w-4xl mx-auto text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-snug md:leading-[45px] max-sm:text-[25px]">
        <span className="bg-[#D2F801] px-1 py-0">My Personal Journey</span>
        <br />
        From Struggling to Band 9
      </h2>

      {/* Story text */}
      <div className="mt-4 md:mt-8 space-y-4 text-gray-900 text-lg leading-relaxed max-sm:text-sm">
        <p>
          I know exactly how it feels. When I first took IELTS, I thought
          Reading was just about reading fast.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            I used to read every single word in paragraphs, highlight what I thought was 
important, and then try to match statements or headings. 

          </li>
          <li>
           True or False or Not Given questions? I guessed, overthought, and often got them 
wrong. 

          </li>
          <li>
            Matching Headings? Impossible. I couldn’t figure out the main idea fast enough. 
          </li>
          <li>
            Matching Information? I would hunt randomly, panic when I couldn’t find an 
answer, and waste precious minutes. 

          </li>
        </ul>

        <p>
          The result? Bands are nowhere near what I deserved.{" "}
          <strong>I was frustrated, demotivated, and lost.</strong>
        </p>

        <p>
          Then I decided: <strong>enough is enough!</strong>
        </p>

        <p>
          I broke down IELTS Reading, completely analyzed 
examiner reports, patterns, and real passages. I discovered: 

        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Why most candidates fail. True or False or Not Given. </li>
          <li>How Band 9 scorers spot main ideas instantly. </li>
          <li> How they map scattered information without losing time. </li>
        </ul>
      </div>

      {/* Highlighted benefits with green ticks */}
      <div className="mt-8 space-y-3">
        <h6>After months of testing and refining, I created a system. Once I applied it: </h6>
        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            <span className="font-bold">True or False or Not Given</span> became easy and accurate.
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            <span className="font-bold">Matching Headings?</span> Done in seconds, not minutes.
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            <span className="font-bold">Matching Information?</span> I could map scattered details effortlessly.
          </span>
        </div>
      </div>

      {/* Result text */}
      <p className="mt-6 text-lg text-gray-900 text-center font-bold max-sm:text-sm">
        The result?{" "}
        <span className="text-red-600 font-bold">My Reading score skyrocketed</span>, 
        and since then, I’ve helped hundreds of candidates achieve{" "}
        <span className="font-bold">Band 8</span> and even{" "}
        <span className="text-red-600 font-bold">Band 9</span>.
      </p>

      {/* CTA Button */}
      <div className="mt-10 text-center">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden bg-[#D2F801] md:px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-xs max-sm:px-6 max-sm:py-4">
      JOIN THE 3-DAY IELTS READING WORKSHOP ₹99
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
      />
    </button>
  </a>

  <p className="mt-6 text-red-500 font-semibold max-sm:text-xs">
    🔥 TRY THE WORKSHOP RISK-FREE. ONLY 23 SEATS LEFT
  </p>

  {/* Privacy row */}
  <p className="mt-2 flex items-center justify-center gap-2 text-gray-900 font-medium text-sm max-sm:text-xs">
    <img src={privacyIcon} alt="secure checkout" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
    Live & Interactive | Secure & Safe Checkout
  </p>

  {/* Progress bar */}
  <div className="mt-2 md:mt-0 flex justify-center">
    <img src={loadingGif} alt="progress bar" className="w-96 max-sm:w-72" />
  </div>
</div>

    </section>
  );
};

export default JourneySection;
