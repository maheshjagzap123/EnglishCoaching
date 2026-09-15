import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function NotFoundPage() {
  return (
    <MainLayout title="Page Not Found">
      <div style={{ textAlign: "center", padding: "8rem 1.5rem" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔍</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1rem" }}>Page Not Found</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", fontSize: "1.0625rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary btn--lg">Go to Homepage</Link>
      </div>
    </MainLayout>
  );
}
