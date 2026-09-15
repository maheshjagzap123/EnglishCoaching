import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import BatchesPage from "./pages/BatchesPage";
import TrainersPage from "./pages/TrainersPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FreeDemoPage from "./pages/FreeDemoPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<CoursesPage />} />
        <Route path="/programs/:id" element={<CourseDetailPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/free-demo" element={<FreeDemoPage />} />
        <Route path="/privacy" element={<NotFoundPage />} />
        <Route path="/terms" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
