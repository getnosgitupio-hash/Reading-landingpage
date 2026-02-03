import { useState } from "react";

const faqs = [
  {
    question: "Is this for beginners or repeat test-takers?",
    answer:
      "Short answer - both. We start from first principles, then layer Band 9 tactics. If you’re stuck at 6 to 6.5, this is built to break that ceiling.",
  },
  {
    question: "Will this help if my exam is in 1-2 weeks?",
    answer:
      "Yes. It’s a 3-day execution system with drill sheets and a 7-day plan to lock gains quickly.",
  },
  {
    question: "Academic or General Training?",
    answer:
      "Works for both. The techniques (decoding, headings, info-mapping, time boxing) apply to either module.",
  },
  {
    question: "What exactly do you cover in 3 days?",
    answer:
      "Day-1: T/F/NG Decoding + NOT GIVEN vs FALSE litmus test.\nDay-2: Matching Headings in minutes (3-step paragraph analysis).\nDay-3: Information Mapping + time splits + verification loop.",
  },
  {
    question: "Do I need to read super fast?",
    answer:
      "No. We teach reading smart, not fast - how to land on the answer sentence without rereading the whole passage.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Replays are provided. Watch your schedule inside the 10-day guarantee window.",
  },
  {
    question: "Do I get materials to practice?",
    answer:
      "Yes. Drill sheets, cheat cards (T/F/NG, Headings, Info-Map), locator map, error-log, and a 7-day practice plan.",
  },
  {
    question: "How soon will I see improvement?",
    answer:
      "Many students report jumps within a week. Typical uplift is +1.5 to +2.5 bands with consistent practice.",
  },
  {
    question: "Is there personal doubt-clearing?",
    answer:
      "Yes - live Q&A plus a guided framework to fix your exact sticking points.",
  },
  {
    question: "What if it’s not for me?",
    answer:
      "You’re covered by our 10-Day Risk-Free promise. Attend or watch replays, try the drills - if you don’t feel it’s worth ₹99, we’ll refund you.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Heading */}
      <h2 className="text-[25px] md:text-4xl font-bold text-center mb-6 sm:mb-8 leading-snug">
        Need To Know More? Here Are The Questions We Get Asked The Most…
      </h2>

      {/* FAQ Items */}
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 text-left font-medium text-sm sm:text-base hover:bg-gray-50"
            >
              {faq.question}
              <span className="ml-2 text-lg sm:text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                className="px-3 sm:px-4 py-2 sm:py-3 text-gray-700 text-sm sm:text-base whitespace-pre-line"
                style={{ fontFamily: "Onest Regular" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
