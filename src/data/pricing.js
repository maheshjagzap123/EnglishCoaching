// ============================================================
// PRICING / LEARNING PLANS (demo content)
// No fixed prices are shown — plans lead to an enquiry, which is
// realistic for a coaching academy. Fully configurable per client.
// ============================================================

export const pricingPlans = [
  {
    id: "personalized",
    name: "Personalized Plan",
    for: "Learners who want focused, guided support.",
    highlight: false,
    features: [
      "1-on-1 attention",
      "Custom learning path",
      "Flexible timings",
      "Weekly personal feedback",
    ],
    cta: "Get a Custom Plan",
  },
  {
    id: "group",
    name: "Group Learning",
    for: "Learners who thrive on interactive practice.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Small batch sizes",
      "Daily speaking practice",
      "Role plays & discussions",
      "Morning / evening / weekend",
    ],
    cta: "Ask About Fees",
  },
  {
    id: "exam",
    name: "Exam Preparation",
    for: "IELTS / TOEFL / PTE focused preparation.",
    highlight: false,
    features: [
      "Exam-specific strategies",
      "Mock tests & scoring",
      "Speaking & writing focus",
      "Targeted improvement plan",
    ],
    cta: "Ask About Fees",
  },
];

export default pricingPlans;
