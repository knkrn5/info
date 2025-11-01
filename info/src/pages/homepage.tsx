import { useState, useRef, useEffect } from "react";
import "./homepage.css";

interface Prize {
  id: number;
  emoji: string;
  label: string;
  color: string;
  chance: number;
}

const prizes: Prize[] = [
  { id: 1, emoji: "🎁", label: "Gift Box", color: "#FF6B6B", chance: 18 },
  { id: 2, emoji: "🎟   ️", label: "VIP Ticket", color: "#4ECDC4", chance: 15 },
  { id: 3, emoji: "🛍️", label: "Shopping", color: "#45B7D1", chance: 14 },
  { id: 4, emoji: "💎", label: "Diamond", color: "#FFA07A", chance: 12 },
  { id: 5, emoji: "🏆", label: "Trophy", color: "#98D8C8", chance: 10 },
  { id: 6, emoji: "�", label: "Discount", color: "#F7DC6F", chance: 16 },
  { id: 7, emoji: "🎉", label: "Party", color: "#BB8FCE", chance: 8 },
  { id: 8, emoji: "⭐", label: "Star", color: "#85C1E2", chance: 7 },
];

export default function Homepage() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [claimed, setClaimed] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Set up segment rotations on mount
  useEffect(() => {
    const segments = document.querySelectorAll(".wheel-segment");
    segments.forEach((segment, index) => {
      const angle = (360 / prizes.length) * index;
      (segment as HTMLElement).style.setProperty(
        "--segment-rotation",
        angle.toString()
      );
    });
  }, []);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setWonPrize(null);
    setShowClaimForm(false);
    setClaimed(false);

    // Select prize based on chance
    const rand = Math.random() * 100;
    let cumulative = 0;
    let selectedPrize = prizes[0];

    for (const prize of prizes) {
      cumulative += prize.chance;
      if (rand <= cumulative) {
        selectedPrize = prize;
        break;
      }
    }

    // Calculate rotation
    const prizeIndex = prizes.findIndex((p) => p.id === selectedPrize.id);
    const segmentAngle = 360 / prizes.length;
    const targetAngle = 360 - prizeIndex * segmentAngle - segmentAngle / 2;
    const spins = 5; // Number of full rotations
    const finalRotation = rotation + 360 * spins + targetAngle;

    setRotation(finalRotation);

    // Apply rotation to wheel using CSS custom property
    if (wheelRef.current) {
      wheelRef.current.style.setProperty(
        "--rotation",
        finalRotation.toString()
      );
    }

    // Show result after spin
    setTimeout(() => {
      setSpinning(false);
      setWonPrize(selectedPrize);
      setShowClaimForm(true);
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClaimPrize = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setClaimed(true);
      // Here you can add logic to save the claim to a database
      console.log("Prize claimed:", { prize: wonPrize, ...formData });
    }
  };

  const resetWheel = () => {
    setWonPrize(null);
    setShowClaimForm(false);
    setFormData({ name: "", phone: "" });
    setClaimed(false);
  };

  return (
    <div className="homepage-container">
      <div className="lucky-draw-section">
        <h1 className="main-title">🎰 Lucky Spin Wheel 🎰</h1>
        <p className="subtitle">Spin the wheel and win amazing prizes!</p>

        <div className="wheel-container">
          {/* Pointer */}
          <div className="wheel-pointer">▼</div>

          {/* Wheel */}
          <div
            ref={wheelRef}
            className={`wheel ${spinning ? "spinning" : ""}`}
            data-rotation={rotation}
          >
            {prizes.map((prize, index) => {
              const segmentAngle = 360 / prizes.length;
              const rotationDeg = index * segmentAngle;

              return (
                <div
                  key={prize.id}
                  className="wheel-segment"
                  data-rotation={rotationDeg}
                  data-color={prize.color}
                >
                  <div className="segment-content">
                    <div className="segment-emoji">{prize.emoji}</div>
                    <div className="segment-label">{prize.label}</div>
                  </div>
                </div>
              );
            })}
            <div className="wheel-center">SPIN</div>
          </div>

          {/* Spin Button */}
          <button
            className={`spin-button ${spinning ? "spinning" : ""}`}
            onClick={spinWheel}
            disabled={spinning || showClaimForm}
          >
            {spinning ? "Spinning..." : "SPIN NOW!"}
          </button>
        </div>

        {/* Prize Modal */}
        {showClaimForm && wonPrize && (
          <div className="modal-overlay">
            <div className="modal-content">
              {!claimed ? (
                <>
                  <h2 className="modal-title">🎉 Congratulations! 🎉</h2>
                  <button className="claim-prize-close" onClick={resetWheel}>
                    X
                  </button>

                  <div className="prize-display">
                    <div className="prize-badge" data-color={wonPrize.color}>
                      <span className="prize-emoji">{wonPrize.emoji}</span>
                      <span className="prize-name">{wonPrize.label}</span>
                    </div>
                  </div>
                  <p className="modal-description">
                    Fill in your details below to claim your prize!
                  </p>

                  <form onSubmit={handleClaimPrize} className="claim-form">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                        pattern="[0-9]{10,}"
                      />
                    </div>
                    <button type="submit" className="claim-button">
                      Claim Prize
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="modal-title">✅ Prize Claimed!</h2>
                    <button className="claim-prize-close" onClick={resetWheel}>
                      X
                    </button>
                  </div>
                  <div className="success-message">
                    <p>
                      Thank you, <strong>{formData.name}</strong>!
                    </p>
                    <p>
                      Your prize{" "}
                      <strong>
                        {wonPrize.emoji} {wonPrize.label}
                      </strong>{" "}
                      will be sent to <strong>{formData.phone}</strong>
                    </p>
                  </div>
                  <button onClick={resetWheel} className="reset-button">
                    Try Again
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
