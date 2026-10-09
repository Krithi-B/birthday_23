"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ChevronRight,
  Heart,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const GALLERY_ITEMS = [
  { type: "photo", src: "/photos/photo_1.jpeg", alt: "Photo 1" },
  { type: "photo", src: "/photos/photo_2.jpeg", alt: "Photo 2" },
  { type: "photo", src: "/photos/photo_3.jpeg", alt: "Photo 3" },
  { type: "photo", src: "/photos/photo_4.jpeg", alt: "Photo 4" },
  { type: "photo", src: "/photos/photo_5.jpeg", alt: "Photo 5" },
  { type: "video", src: "/photos/photo_6.mp4", alt: "video" },
];

const releaseNotes = [
  "+1 year of being ridiculously wonderful",
  "Improved boyfriend capabilities",
  "Enhanced cuteness and hotness",
  "Known issue: still impossible not to love",
];

export default function BirthdayPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [compressed, setCompressed] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);

  // Automatically finish the boot screen.
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIntroComplete(true);
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, []);

  // Start the number animation after the intro finishes.
  useEffect(() => {
    if (!introComplete) return;

    const interval = window.setInterval(() => {
      setCompressed((previous) => !previous);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [introComplete]);

  const terminalLines = useMemo(
    () => [
      "$ npm run birthday",
      "> birthday@23.0 start",
      "✓ Loading birthday protocol",
      "✓ Loading favourite person",
      "✓ Loading tiny amount of chaos",
      "✓ Compiling happiness",
      "BUILD SUCCESSFUL ♥",
    ],
    [],
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
          >
            <div className="boot-content">
              <div className="boot-brand">
                <Terminal size={16} /> birthday.exe
              </div>
              <div className="boot-lines">
                <p>Initializing birthday protocol...</p>
                <p>
                  User: <span>Pushp Ranjan</span>
                </p>
                <p>
                  Version: <span>23.0</span>
                </p>
                <p>
                  Birth year detected: <span>2003</span>
                </p>
              </div>
              <div className="progress-track">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2 }}
                />
              </div>
              <p className="boot-status">
                System ready<span className="blink">_</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hero section-pad" id="top">
        <div className="nav-pill">
          <span>
            <span className="status-dot" /> birthday.exe
          </span>
          <span>v23.0</span>
        </div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow"></p>
          <h1 style={{ marginTop: "10px" }}>
            Happy birthday,
            <br />
            <em>Pratikuuuu</em>
          </h1>
          <p className="hero-subtitle">
            Somehow, 2003 has been compressed into a very handsome version 23.0
          </p>
        </motion.div>

        <motion.div
          className="compress-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={
            introComplete
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.96 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card-label">AGE COMPRESSION ENGINE</div>
          <div className="number-stage" aria-live="off">
            <motion.div
              className="big-number digit-number"
              initial={false}
              animate={{ scale: 1 }}
            >
              <motion.span className="digit" layout>
                2
              </motion.span>
              {[0, 1].map((zero) => (
                <motion.span
                  key={zero}
                  className="digit zero-digit"
                  initial={false}
                  animate={{
                    width: compressed ? "0em" : "0.62em",
                    opacity: compressed ? 0 : 1,
                    scale: compressed ? 0 : 1,
                  }}
                  transition={{
                    duration: compressed ? 0.55 : 0.45,
                    ease: compressed ? "easeInOut" : "backOut",
                  }}
                  aria-hidden="true"
                >
                  0
                </motion.span>
              ))}

              <motion.span className="digit" layout>
                3
              </motion.span>
            </motion.div>
          </div>
          <div className="compression-line">
            <span>2003</span>
            <span className="line" />
            <span>23</span>
          </div>
        </motion.div>

        <button
          className="scroll-cue"
          onClick={() => scrollTo("release")}
          aria-label="Scroll down"
        >
          <span>there's more</span>
          <ArrowDown size={16} />
        </button>
      </section>

      <section className="section-pad narrow" id="release">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p className="eyebrow">Release notes</p>
            <h2>Version 23.0</h2>
          </div>
        </div>

        <div className="release-grid">
          <div className="spec-card">
            <div className="spec-row">
              <span>Release date</span>
              <strong>10/10/2003</strong>
            </div>
            <div className="spec-row">
              <span>Current version</span>
              <strong>23.0</strong>
            </div>
            <div className="spec-row">
              <span>System status</span>
              <strong className="green">STABLE ✓</strong>
            </div>
            <div className="spec-row">
              <span>Availability</span>
              <strong>24/7</strong>
            </div>
            <div className="spec-row">
              <span>Maintainer</span>
              <strong>Krithi B</strong>
            </div>
          </div>

          <div className="notes-card">
            <button
              className="notes-header"
              onClick={() => setShowNotes((value) => !value)}
            >
              <span>
                <Sparkles size={17} /> What's new in v23.0?
              </span>
              <motion.span animate={{ rotate: showNotes ? 90 : 0 }}>
                <ChevronRight size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {showNotes && (
                <motion.div
                  className="notes-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {releaseNotes.map((note, index) => (
                    <p key={note}>
                      <span>0{index + 1}</span>
                      {note}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section-pad narrow">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <p className="eyebrow">A few captured moments</p>
            <h2>Photo archive</h2>
          </div>
        </div>

        <div className="photo-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              className={`photo-frame photo-${index + 1}`}
              key={item.src}
              whileHover={{ y: -5 }}
            >
              {item.type === "video" ? (
                <video
                  className="gallery-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 45vw, 33vw"
                  className="photo-placeholder"
                />
              )}

              <div className="photo-overlay">
                <span>
                  {item.type === "video" ? `STAGE_0${index + 1}` : `STAGE_0${index + 1}`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad message-section">
        <div className="message-window">
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>message.txt</span>
            <span>♡</span>
          </div>
          <div className="message-content">
            <p className="eyebrow">03 / from me to you</p>
            <h2>A little something I wanted to tell you.</h2>
            <p className="personal-message">
              Many more happy returns of the day mere pyaare pratikuuuuu🥳🎉. I
              wish you all the success and happiness you truly deserve, and good
              luck for all your future endeavours❤️. You're one year older,
              wiser, cuter, hotter and sexier now😜. Enjoy your year to the
              fullest. Looking forward to celebrating many more birthdays with
              you, kissing you at midnight and wishing you a very happy
              birthday🙈. Well for now, I love you soo much mere baby don😘.
              Tumhare birthday pe tumse zyada excited main hoti hu, and I love
              that feeling🥰. I'm the luckiest girl to have you as my
              boyfriend✨. Khaa jaana hai tumhe, you're that cutalisious. Once
              again, happy birthday mere delicate darlingsss🤗❤️.
            </p>
            <div className="signature">
              — Krithu <Heart size={15} fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad terminal-section">
        <button
          className="terminal-toggle"
          onClick={() => setShowTerminal((value) => !value)}
        >
          <Terminal size={17} />{" "}
          {showTerminal ? "Close birthday.exe" : "Run birthday.exe"}
        </button>
        <AnimatePresence>
          {showTerminal && (
            <motion.div
              className="terminal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              {terminalLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.16 }}
                  className={line.includes("SUCCESS") ? "success" : ""}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="final-section">
        <div className="final-glow" />
        <p className="eyebrow">
          <Heart size={14} fill="currentColor" /> final output
        </p>
        <h2>
          23 looks good
          <br />
          <em>on you.</em>
        </h2>
        <p>Happy birthday Cutu.</p>
        <p className="final-small">
          Here's to version 23.0 — and every version that comes after it. ❤️
        </p>
        <button className="back-button" onClick={() => scrollTo("top")}>
          Run it again ↑
        </button>
      </section>

      <footer>made with too much love & a suspicious amount of code.</footer>
    </main>
  );
}
