import { useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import './Hero.css'

const Hero = () => {
    useEffect(() => {
  const listItems = [...document.querySelectorAll(".listt")];

  const observerOptions = {
    rootMargin: "10px",
    threshold: 0.08,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const letters = [...entry.target.querySelectorAll(".spann")];
        letters.forEach((letter, idx) => {
          setTimeout(() => {
            letter.classList.add("active-1");
          }, idx * 30);
        });

        entry.target.classList.add("active-1");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

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
              : `<span class="spann">${char}</span>`
          )
          .join("") + `<span class="gap">&nbsp;</span>`
      )
      .join("");

    // Defer DOM update and observe
    setTimeout(() => {
      requestAnimationFrame(() => {
        item.innerHTML = wrappedHTML;
        item.classList.add("ready");
        observer.observe(item);
      });
    }, 30);
  });

  return () => observer.disconnect();
}, []);

    return(
        <>
                <Navbar/>
            <div className="hero-bg">
                <video 
                    className="video-bg-bg" 
                    src="https://lathuile.shop/wp-content/uploads/2023/11/Lathuile-Cashmere-_-Leleganza-dellabbigliamento-in-cashmere-Made-in-Italy.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                ></video>
                <div className='title-home-container'>
                    <ul className="home-list">
                        <div className="home-list-center">
                        <li className="listt elegant">Where Elegance Meets</li>
                        <li className="listt elegant">Expression</li>
                        </div>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Hero