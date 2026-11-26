import "./styles.css";

import { useEffect, useState } from "react";

export default function Home() {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const dismissed = localStorage.getItem("dismissedMobileModal");
    if (!dismissed && isMobile) {
      setShowMobileModal(true);
    }
  }, []);

  const handleDismiss = () => {
    if (dontShowAgain) {
      localStorage.setItem("dismissedMobileModal", "true");
    }
    setShowMobileModal(false);
  };

  return (
    <>
      {showMobileModal && (
        <div className="mobile-modal-overlay">
          <div className="mobile-modal">
            <h2>Best Viewed on Desktop</h2>
            <p>
              This site is designed for larger screens to give you the best
              experience. Some elements might not display perfectly on mobile.
            </p>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              Don’t show this again
            </label>

            <button onClick={handleDismiss}>Continue Anyway</button>
          </div>
        </div>
      )}
    </>
  );
}
