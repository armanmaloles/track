import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getGoogleUrl } from "../../api/auth";
import BrandHeader from "../../components/common/BrandHeader";
import Footer from "../../components/layout/Footer";
import styles from "./Login.module.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const redirectTarget =
        import.meta.env.VITE_OAUTH_REDIRECT_URL || window.location.origin;

      const data = await getGoogleUrl(redirectTarget);

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Failed to get Google login URL.");
      }
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err?.response);

      setError(
        err?.response?.data?.message ||
          err.message ||
          "Could not initiate Google login.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.pageContent}>
        <BrandHeader />
        <div className={styles.loginCard}>
          <h2 className={styles.title}>Welcome Back</h2>
          <p className={styles.description}>
            Sign in with your official Google account to access your calendars
            and tasks.
          </p>

          <button
            type="button"
            className={styles.googleButton}
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <FcGoogle className={styles.googleIcon} />
            {loading ? "Redirecting..." : "Continue With Google"}
          </button>

          {error && <p className={styles.errorText}>{error}</p>}

          <div className={styles.registerSection}>
            <span className={styles.registerText}>
              Don't have an account yet?
            </span>
            <p className={styles.info}>
              First-time users must authenticate with Google and provide an
              account code.
            </p>
            <Link to="/register" className={styles.secondaryButton}>
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
