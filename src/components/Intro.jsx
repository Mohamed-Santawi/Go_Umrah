import React, { useEffect, useRef, useState } from "react";
import kaabaImage from "../assets/kaaba.jpg";
import logoImage from "../assets/intro-logo.png";
import backgroundAudio from "../assets/umrah-background.mp3";
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const particlesRef = useRef(null);
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); // Or replace with "/home" if your home route is different
  };
  useEffect(() => {
    // Audio setup
    audioRef.current = new Audio(backgroundAudio);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set initial volume to 50%

    // Particles setup
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random horizontal position
      const x = Math.random() * 100;
      particle.style.left = `${x}%`;

      // Random animation duration between 8s and 12s (much slower)
      const duration = Math.random() * 4 + 8;
      particle.style.animationDuration = `${duration}s`;

      particlesContainer.appendChild(particle);

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create particles less frequently (every 600ms)
    const interval = setInterval(createParticle, 600);

    // Clean up function
    return () => {
      clearInterval(interval);
      if (particlesContainer) {
        while (particlesContainer.firstChild) {
          particlesContainer.removeChild(particlesContainer.firstChild);
        }
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleAudioPlay = async () => {
    if (!audioRef.current) return;

    try {
      if (!isAudioPlaying) {
        await audioRef.current.play();
        setIsAudioPlaying(true);
      } else {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image with fade-in animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fade-in"
        style={{ backgroundImage: `url(${kaabaImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4">
        <div className="logo-container mb-8 fade-in-up-delay-2000">
          <img
            src={logoImage}
            alt="جو عمرة"
            className="logo w-32 h-32 object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up-delay-2500 text-white">
          منصة جو عمرة
        </h1>
        <p className="text-lg md:text-xl mb-8 fade-in-up-delay-3000 text-white">
          خدمتكم... شرف وأجر
        </p>
        <button
          onClick={handleClick}
          className="enter-btn px-8 py-3 border border-transparent text-base font-medium rounded-3xl bg-green-700 text-white cursor-pointer hover:bg-green-800 md:py-4 md:text-lg md:px-10 fade-in-up-delay-3500"
        >
          استكشف خدماتنا
        </button>

        {/* Audio Control Button */}
        <button
          onClick={handleAudioPlay}
          className="audio-fade-in absolute bottom-8 right-10 z-20 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
        >
          {isAudioPlaying ? <VscUnmute /> : <VscMute />}
        </button>
      </div>
    </div>
  );
};

export default Intro;
