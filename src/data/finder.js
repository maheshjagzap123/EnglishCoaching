// ============================================================
// COURSE FINDER — goals → recommended course id (maps to courses.js)
// Assessment teaser categories also live here.
// ============================================================

// Each goal maps to a course `id` from src/data/courses.js
export const finderGoals = [
  { id: "speak", label: "Speak confidently", courseId: "basic-spoken-english" },
  { id: "interview", label: "Prepare for interviews", courseId: "advanced-spoken-english" },
  { id: "workplace", label: "Improve workplace English", courseId: "advanced-spoken-english" },
  { id: "ielts", label: "Prepare for IELTS", courseId: "english-grammar" },
  { id: "grammar", label: "Improve grammar", courseId: "english-grammar" },
  { id: "public", label: "Public speaking", courseId: "advanced-spoken-english" },
];

export const finderModes = [
  { id: "online", label: "Online" },
  { id: "offline", label: "Offline" },
  { id: "either", label: "Either" },
];

// English level assessment teaser (demo interaction only — no certification)
export const assessmentCategories = [
  { id: "speaking", label: "Speaking", desc: "How naturally you express ideas out loud." },
  { id: "grammar", label: "Grammar", desc: "Accuracy in tenses, structure and usage." },
  { id: "vocabulary", label: "Vocabulary", desc: "Range of words you can use with ease." },
  { id: "confidence", label: "Confidence", desc: "How comfortable you feel speaking up." },
];

export default finderGoals;
