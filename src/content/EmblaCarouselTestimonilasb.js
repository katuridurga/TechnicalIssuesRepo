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
    text: "Backstage Pass has an advantage over other colleges since its students are industry-ready, meaning they are ready to begin their careers immediately after graduation, without additional training or fine-tuning. As far as I know, Backstage Pass is the only college dedicated exclusively to game development and game art & design",
    name: "Rajat Ojha",
    role: "CEO & Co-Founder,Gamitronics",
    avatar: "https://www.backstagepass.co.in/rajatojha-ed3d0983.webp?img=2",
  },
  {
    text: "We have been recruiting from Backstage Pass for a couple of years now. They have a certain quality and their courses are amazing! We don't have to wait until the end of the academic year for us to be able to hire their students. Instead, we can hire them right in the middle because they are excellent in what they do. We definitely recommend Backstage Pass.",
    name: "Sridhar",
    role: "CEO, Purple Talk",
    avatar: "https://www.backstagepass.co.in/shridhar-dd6c063d.webp?img=3",
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
    text: "Innovation and adaptability are crucial for growth in the modern generation. Therefore, we require a creative and determined workforce. Students from Backstage Pass have excelled in both of these areas. We were very impressed with how they questioned the status quo and developed more effective working methods.",
    name: "Navin Mandal",
    role: "Co-Founder & CTO,  Immersive Labz",
    avatar: "https://www.backstagepass.co.in/navinmandal-280e276b.webp?img=6",
  },
  {
    text: "Backstage Pass is the first of its kind of gaming college in India with some great industry experts. I had the joy of learning from the people who work in the game industry and was taught about the working of the game industry that helped me a lot while working at EA Sports. So, Backstage Pass was a life-changing experience.",
    name: "Anshul Soni",
    role: "Software Engineer, EA Sports, Seattle, USA",
    avatar: "https://backstagepass.co.in/AnshulSoni-cf9bf58b.webp?img=7",
  },
  {
    text: "Our front-end lead Arsalan is a graduate from Backstage Pass and it is a pleasure to see how passionate he is about gaming. Whenever we interview a candidate from Backstage Pass, we find something unique that they bring in; their focus, understanding and knowledge about gaming even before they start working in a company.",
    name: "Kashyap Reddy",
    role: "Co-Founder, HitWicket",
    avatar: "https://backstagepass.co.in/kashyapreddy-889e8da6.webp?img=8",
  },
  {
    text: "While doing my Graduation at Backstage Pass, I started my own Game studio Seven Summits with the help of this gaming college. We learned concepts related to Game Art, Game Design, Level design, etc. from Industry Experts. In order to mark your footprint in the game industry, Backstage Pass is the best place to start.",
    name: "Asar Dhandala",
    role: "Founder/ Game Designer/ Producer, Seven Summits",
    avatar: "https://backstagepass.co.in/Asar-268f6887.webp?img=9",
  },
  {
    text: "When I was searching for colleges that offer Game Art and Design courses, Backstage Pass stood out as the best choice. Once I joined, I discovered the vast opportunities within the gaming industry. In just two years, my skills improved by 60%, thanks to the solid foundation provided. I also worked on a game called Infocus, which was recognized at IGDC. The one-on-one mentorship at Backstage Pass played a crucial role in my learning, as it helped identify and refine the specific skills I needed to develop.",
    name: "Aniket Mukhi",
    role: "4th-Year Student in Game Art & Design",
    avatar: "https://www.backstagepass.co.in/AniketMukhi-c777716a.webp?img=10",
  },
  {
    text: "My passion for gaming led me to pursue a course at Backstage Pass, and it completely transformed my understanding of game art. I learned how entertainment-focused artwork differs from traditional fine arts and how to approach art in a way that makes it a seamless part of the game world. This insight helped me develop a structured approach to game art, turning creativity into immersive gaming experiences.",
    name: "Surya Shanka",
    role: "Concept artist at Hitwicket",
    avatar: "https://www.backstagepass.co.in/Suryashankha-5232eea7.webp?img=11",
  },
  {
    text: "Backstage Pass is one of the few colleges in India that offers a game development course with computer science as a core subject and it truly stands out in this category. The mentors were incredibly supportive throughout my journey. After years of playing games, the ability to now create games that millions enjoy is a rewarding experience. Looking back, I can confidently say that my four years at Backstage Pass were well worth the effort.",
    name: "Srivatsan Prativadibhayankara",
    role: "Senior Unity Developer, Product Madness",
    avatar: "https://www.backstagepass.co.in/Srivatsan-713173e3.webp?img=12",
  },
  {
    text: "Backstage Pass was the catalyst that let me do bigger things as it provided me a very strong foundation. It was more than just exams. There is a lot of scope for knowledge sharing and it played a big role in how I was able to get good at my craft.",
    name: "JOSEPH KALATHIL",
    role: "Gameplay Programmer Hacksaw studios,stockholm, sweden",
    avatar: "https://www.backstagepass.co.in/JoesphKalathil-d9008f68.webp?img=13",
  },
];

const Testimonials = () => {
  const scrollRef = useRef();
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

  const updateLayout = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setCardsPerPage(1);
      setScrollWidth(screenWidth);
    } else {
      setCardsPerPage(3);
      setScrollWidth(330 * 3 + 20 * 2);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
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

  const fullPagesOnly = testimonials.slice(0, totalPages * cardsPerPage);

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
          {Array.from({ length: totalPages }).map((_, i) => (
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


