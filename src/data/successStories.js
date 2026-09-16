// ============================================================
// SUCCESS STORIES + TRANSFORMATION (demo/sample content)
// These are SAMPLE stories for demonstration only.
// ============================================================

// Featured, detailed story
export const featuredStory = {
  id: "s1",
  name: "Ananya (Sample Student)",
  course: "Spoken English",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&q=80",
  challenge: "Froze up whenever she had to speak English in a group.",
  journey:
    "Over eight weeks of small-batch practice, role plays and weekly feedback, she moved from one-word answers to leading a group discussion.",
  outcome: "Now speaks up confidently in team meetings.",
  quote:
    "I stopped translating in my head and just started speaking. The practice sessions made all the difference.",
};

// Smaller supporting stories
export const successStories = [
  {
    id: "s2",
    name: "Rohan (Sample Student)",
    course: "Interview Preparation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: "I walked into my interview calm and prepared, and actually enjoyed the conversation.",
    outcome: "Cleared his first HR round with confidence.",
  },
  {
    id: "s3",
    name: "Sara (Sample Student)",
    course: "Business English",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    quote: "Writing emails and leading calls feels natural now, not stressful.",
    outcome: "Leads client calls at work.",
  },
];

// Before / After transformation snapshots (sample)
export const transformation = {
  before: {
    label: "Before",
    quote: "I was uncomfortable speaking English in groups.",
    points: [
      "Hesitated to speak up",
      "Feared making mistakes",
      "Limited everyday vocabulary",
    ],
  },
  after: {
    label: "After",
    quote: "I can now participate more confidently in conversations.",
    points: [
      "Speaks up in groups",
      "Comfortable making mistakes",
      "Richer, natural vocabulary",
    ],
  },
};

export default successStories;
