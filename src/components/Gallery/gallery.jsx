import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './gallery.css';

export default function Gallery() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  useEffect(() => {
    const listItems = [...document.querySelectorAll(".parallex-text")];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letters = [...entry.target.querySelectorAll(".span-letter")];
          letters.forEach((letter, idx) => {
            setTimeout(() => {
              letter.classList.add("active-2");
            }, idx * 30);
          });

          entry.target.classList.add("active-2");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "10px", threshold: 0.08 });

    listItems.forEach((item) => {
      const itemText = item.innerText || "";
      if (!itemText.trim()) return;

      const wrappedHTML = itemText
        .split(" ")
        .map(word =>
          word
            .split("")
            .map(char =>
              char === " "
                ? `<span class="gap">&nbsp;</span>`
                : `<span class="span-letter">${char}</span>`
            )
            .join("") + `<span class="gap">&nbsp;</span>`
        )
        .join("");

      setTimeout(() => {
        requestAnimationFrame(() => {
          item.innerHTML = wrappedHTML;
          item.classList.add("ready-text");
          observer.observe(item);
        });
      }, 30);
    });

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: 'https://framerusercontent.com/images/tzlLMHyfSP3naJjRsFMXvCc6nGI.webp',
      y: lg,
      text: "Try this one"
    },
    {
      src: 'https://akkeknitwear.com/website/wp-content/uploads/2023/10/akke-3-1.jpg',
      y: md,
      text: "Wow type"

    }
  ];

  return (
    <div ref={container} className="parallax-container">
      <div className="parallex-heading">
        <h1 className="parallex-text">Designed with soul, stitched with passion</h1>
      </div>

      <div className="parallax-images">
        {/* Static side image */}
        <div className="image-container">
          <p className='image-middle-text'>New Arrival</p>
          <img
            src="https://www.oscardelarenta.com/cdn/shop/files/hompage_V4.jpg?v=1747854240&width=2560"
            alt="side"
            className="parallax-img"
          />
        </div>

        {/* Scrolling parallax images */}
        {images.map(({ src, y, text }, i) => (
          <motion.div key={`i_${i}`} style={{ y }} className="image-container">
            <p className='image-text-parallel'>{text}</p>
            <img src={src} alt={`parallax-${i}`} className="parallax-img" />
          </motion.div>
        ))}
      </div>

      <div className="parallex-view-all">
        <a href=''>View All</a>
      </div>
    </div>
  );
}
