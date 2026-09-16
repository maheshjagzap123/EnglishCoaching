// ============================================================
// ENGLISH IN ACTION — Video content (demo)
// Uses configurable YouTube video IDs. Replace youtubeId values
// with a real client's own videos. Players are lazy-loaded
// (thumbnail → click to load) for performance.
// ============================================================

// A neutral, non-branded featured video ID can be swapped per client.
export const featuredVideo = {
  youtubeId: "iCvmsMzlF7o", // demo placeholder — replace per client
  title: "A Sample English Lesson",
  desc: "See how a practical, activity-based Veyora session feels — speaking first, theory second.",
  category: "Sample Lesson",
};

export const videos = [
  { id: "v1", youtubeId: "iCvmsMzlF7o", title: "Everyday English Tips", category: "English Tips" },
  { id: "v2", youtubeId: "iCvmsMzlF7o", title: "Speaking Practice", category: "Speaking Practice" },
  { id: "v3", youtubeId: "iCvmsMzlF7o", title: "Interview Preparation", category: "Interview Prep" },
  { id: "v4", youtubeId: "iCvmsMzlF7o", title: "Public Speaking", category: "Public Speaking" },
  { id: "v5", youtubeId: "iCvmsMzlF7o", title: "Classroom Activities", category: "Classroom" },
  { id: "v6", youtubeId: "iCvmsMzlF7o", title: "Student Success Stories", category: "Success Stories" },
];

export default videos;
