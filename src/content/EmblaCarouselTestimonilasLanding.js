import React, { useState, useRef, useEffect } from "react";
import "./lpbachelorstestimonial.css";
import AnimatedText from "../components/AC-StaticPages/landingpage/AnimatedText";

const testimonials = [
  {
    text: "From being a student in the first batch of Backstage Pass to being a mentor later, I have seen BSP grow from a small ambitious game development & game design institute to a full-fledged gaming college. With the game industry's continued growth and future potential, I'm certain they're on the right track to impart the right knowledge and skills to produce competent professionals.",
    name: "Sushil George",
    role: "Sr. Game Developer, Product Madness, London, UK",
    avatar: "https://www.backstagepass.co.in/SushilGeorge-028c91ea.webp?img=1",
  },

  {
    text: "Backstage Pass brings the like-minded under a single roof. Our courses related to game development & game design were custom- tailored to meet the requirements of the game industry and I feel it is the right place to start for a successful career in the game industry.",
    name: "Jithin Peter",
    role: "Sr. Game Programmer, sumo digital, Bangalore",
    avatar: "https://www.backstagepass.co.in/JithinPeter-bd2017d7.webp?img=4",
  },
  {
    text: "One of the best aspects of Backstage Pass is that it gives you the option to interact with a lot of individuals who have a strong interest in game development and the freedom to work together with students from other streams, such as design or art, to create incredible outcomes.",
    name: "Anand Dhavle",
    role: "Gameplay Programmer, Tarsier Studios, Sweden",
    avatar: "https://www.backstagepass.co.in/AnandDhwale-da6efb8f.webp?img=5",
  },
 

  {
    text: "While doing my Graduation at Backstage Pass, I started my own Game studio Seven Summits with the help of this gaming college. We learned concepts related to Game Art, Game Design, Level design, etc. from Industry Experts. In order to mark your footprint in the game industry, Backstage Pass is the best place to start.",
    name: "Asar Dhandala",
    role: "Founder/ Game Designer/ Producer, Seven Summits",
    avatar: "https://backstagepass.co.in/Asar-268f6887.webp?img=9",
  },

 
];

const Testimonials = () => {
  const scrollRef = useRef();
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
  const maxVisibleDots = 4;

  const getVisibleDotRange = () => {
    if (window.innerWidth >= 768) {
      // Desktop: show all dots
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    let start = Math.max(0, activePage - Math.floor(maxVisibleDots / 2));
    let end = start + maxVisibleDots;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(0, end - maxVisibleDots);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };
  const updateLayout = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    setCardsPerPage(1); // ✅ Only 1 card per page on mobile
    setScrollWidth(screenWidth); // ✅ Set scroll width exactly as the viewport
  } else {
    setCardsPerPage(3);
    setScrollWidth(330 * 3 + 20 * 2); // You can fine-tune this for desktop spacing
  }
};


  useEffect(() => {
  updateLayout();
  window.addEventListener("resize", updateLayout);

  // Reset to first page
  if (scrollRef.current) {
    scrollRef.current.scrollLeft = 0;
  }

  return () => window.removeEventListener("resize", updateLayout);
}, []);


  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToPage = (pageIndex) => {
    const container = scrollRef.current;
    container.scrollTo({
      left: pageIndex * scrollWidth,
      behavior: "smooth",
    });
    setActivePage(pageIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / scrollWidth);
      setActivePage(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollWidth]);

  // Swipe support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const startTime = useRef(0);
  const lastX = useRef(0);

  const onPointerDown = (xPos) => {
    isDragging.current = true;
    startX.current = xPos - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    startTime.current = Date.now();
    lastX.current = xPos;
    scrollRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (xPos) => {
    if (!isDragging.current) return;
    const walk = (xPos - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
    lastX.current = xPos;
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";

    const deltaTime = Date.now() - startTime.current;
    const deltaX = lastX.current - startX.current;
    const velocity = deltaX / deltaTime;

    const currentScroll = scrollRef.current.scrollLeft;
    const currentPage = Math.round(currentScroll / scrollWidth);

    if (velocity > 0.3) {
      scrollToPage(Math.max(currentPage - 1, 0));
    } else if (velocity < -0.3) {
      scrollToPage(Math.min(currentPage + 1, totalPages - 1));
    } else {
      scrollToPage(currentPage);
    }
  };

  const onMouseDown = (e) => onPointerDown(e.pageX);
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    onPointerMove(e.pageX);
  };
  const onMouseUp = () => onPointerUp();
  const onMouseLeave = () => onPointerUp();
  const onTouchStart = (e) => onPointerDown(e.touches[0].pageX);
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    onPointerMove(e.touches[0].pageX);
  };
  const onTouchEnd = () => onPointerUp();

  const fullPagesOnly = testimonials;

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <AnimatedText direction="up" delay={0.2}>
          <h2 className="mainHeadingTotall-2">Testimonials</h2>
        </AnimatedText>
      </div>

      <div className="testimonial-slider-wrapper">
        <div
          className="testimonial-slider"
          ref={scrollRef}
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="testimonial-slider-inner">
            {fullPagesOnly.map((item, index) => {
              const isExpanded = expandedCards[index] || false;
              return (
                <AnimatedText direction="up" delay={0.2} key={index}>
                  <div
                    className="testimonial-card"
                    style={{
                      flex: `0 0 ${100 / cardsPerPage}%`,
                      maxWidth: `${100 / cardsPerPage}%`,
                    }}
                  >
                    <h4>
                      {item.title} <span>”</span>
                    </h4>
                    <p className={`testimonial-text ${isExpanded ? "expanded" : ""}`}>
                      {item.text}
                    </p>
                    {item.text.split(" ").length > 30 && (
                      <button
                        className="show-more-btn"
                        onClick={() => toggleExpand(index)}
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                    <div className="testimonial-profile">
                      <img src={item.avatar} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedText>
              );
            })}
          </div>
        </div>

        <div className="dots">
          {getVisibleDotRange().map((i) => (
            <span
              key={i}
              className={`dot ${activePage === i ? "active" : ""}`}
              onClick={() => scrollToPage(i)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


