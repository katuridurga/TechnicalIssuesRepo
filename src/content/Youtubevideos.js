import React from 'react';
import EmblaCarouselTestimonilasVideos from './EmblaCarouselTestimonilasVideos'
import { Helmet } from "react-helmet";

import "./YoutubeVideos.css"

function Testimonials() {

  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
         {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Game Designer Journey | Backstage Pass Alumni",
  "description": "Meet Vipul, a Backstage Pass alumnus (Batch 2018) and currently a Game Designer at YesGnome Gaming Solutions.

In this video, he shares how learning game design, collaborating with peers, and understanding real workflows helped him transition from an engineering mindset to a creative design career.

If you’re curious about game design, problem-solving, and building industry-ready games, this story is worth watching.",
  "thumbnailUrl": "https://www.backstagepass.co.in/vipul-ed9a63dd.webp",
  "uploadDate": "2025-12-23",
  "duration": "PT1M5S",
  "contentUrl": "https://youtu.be/lmQ0tylpeuw?si=kTQnsEMZ3Unx8udB"
}
            `}
        </script>

        <script type="application/ld+json">
          {`
          {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Real Industry Exposure from Day One | Ankush at IGDC & GGJ | Backstage Pass Institute of Gaming",
  "description": "From his very first semester at Backstage Pass, Ankush stepped into real industry exposure through IGDC and Global Game Jam.

Collaborating under pressure, building alongside passionate creators, and experiencing live industry environments significantly strengthened his confidence.

At Backstage Pass, learning goes beyond classrooms — it’s about shaping future-ready professionals through real-world experiences.",
  "thumbnailUrl": "https://www.backstagepass.co.in/ankush-e2e296c5.webp",
  "uploadDate": "2026-01-27",
  "duration": "PT0M47S",
  "contentUrl": "https://youtu.be/BBc74tIWqKk?si=vv30gP1wj3Rrq7et"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
        {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Backstage Pass Institute of Gaming Alumni Byte | Rishi Prakaash",
  "description": "From classroom chats to coding games! Rishi Prakash, Batch 2020, shares his journey from our campus to a successful career in software development at Mobilityware, California. Learn how his BSP degree was the perfect launchpad for his career in the ever-evolving tech industry.",
  "thumbnailUrl": "https://www.backstagepass.co.in/rishi-f7abb1e4.webp",
  "uploadDate": "2024-12-13",
  "duration": "PT0M55S",
  "contentUrl": "https://www.youtube.com/watch?v=-h33trH8YLU"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
   {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Senior Game Producer at Zynga | Alumni Talk",
  "description": "Alumni Talks: Know few words from the Alumnus of Backstage Pass Institute of Gaming from our 1st batch of Game Development Course Rajiv Chavali Senior Game Producer at Zynga",
  "thumbnailUrl": "https://www.backstagepass.co.in/rajiv-91a0768f.webp",
  "uploadDate": "2024-04-16",
  "duration": "PT0M40S",
  "contentUrl": "https://www.youtube.com/watch?v=8RogLRiFQY8"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Proud Parents Speak | Backstage Pass Institute of Gaming",
  "description": "In this video, Bhanu's parents share their reflections on watching their child develop new skills and confidence in his passion for games. It’s a powerful reminder that investing in early education and development is empowering the next generation to lead.",
  "thumbnailUrl": "https://www.backstagepass.co.in/Bhanu-8e7eeda2.webp",
  "uploadDate": "2026-02-17",
  "duration": "PT4M35S",
  "contentUrl": "https://www.youtube.com/watch?v=V-Y3VxFxjys"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How a GAMING COURSE Transformed My Career | Game Developer Success Story",
  "description": "Hear from Harshit Adepu, a successful game developer alumnus of Backstage Pass! Discover the impact of choosing a specialized gaming education and the journey into the game development industry. Learn about making big decisions and finding the right path to pursue your passion. Watch to gain insights and inspiration",
  "thumbnailUrl": "https://www.backstagepass.co.in/harshit-95605cbe.webp",
  "uploadDate": "2025-05-12",
  "duration": "PT0M54S",
  "contentUrl": "https://www.youtube.com/watch?v=xi-1AeB7Krg"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Why We Chose Backstage Pass: Parents' Testimony | Krushna Thakur",
  "description": "In this video, Rajesh Singh Thakur and Sunita Rajesh Singh Thakur, parents of Krushna Thakur (CS & Game Dev student), share their firsthand experience with Backstage Pass Institute of Gaming.
They discuss:
The transition from Nagpur to Hyderabad.
The quality of education and faculty support.
Hostel facilities and student well-being.
Why they believe this is the best environment for an aspiring game developer in India.
At Backstage Pass, we strive to provide a world-class ecosystem for students to excel in the gaming and tech industries.
Learn more about our courses: https://www.backstagepass.co.in/courses/",
  "thumbnailUrl": "https://www.backstagepass.co.in/Krushna-61b71342.webp",
  "uploadDate": "2026-04-07",
  "duration": "PT0M54S",
  "contentUrl": "https://www.youtube.com/watch?v=dLvatbiLrwM"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Backstage Pass Alumnus to Sumo Digital | Jithin Peter’s Career Story",
  "description": "Meet Jithin Peter, a Backstage Pass alumnus (Batch 2010) and Principal Programmer at Sumo Digital with over 9 years of professional experience. His career journey showcases consistent learning, technical excellence, and collaboration within international game development teams. We are proud to celebrate Jithin’s growth and continued contribution to the gaming industry.",
  "thumbnailUrl": "https://www.backstagepass.co.in/WebsiteVideoBanner1-0292bace.webp",
  "uploadDate": "2026-03-09",
  "duration": "PT2M18S",
  "contentUrl": "https://www.youtube.com/watch?v=gY7TXYWoi5w"
}
            `}
        </script>
        <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How Sandeep landed a job at Sony PlayStation | Backstage Pass Alumni Stories",
  "description": "What does it take to go from a "naive" student to a designer at Sony PlayStation? In this video, Sandeep (Class of 2022) shares his experience studying Game Development and Computer Science at Backstage Pass Institute of Gaming.
The transition from a student developer to a professional designer.
The impact of mentorship from industry veterans like Bala Sir, Swapna Ma’am, and Rahul Sir.
His thoughts on the brand-new Backstage Pass campus.
Why participating in Game Jams is crucial for your career.
"The more your passion speaks, that's how you go places."
Interested in a career in Gaming?
Visit our website to explore our Bachelor’s and Master’s programs in Game Design, Development, and Art: https://www.backstagepass.co.in/",
  "thumbnailUrl": "https://www.backstagepass.co.in/sandeep-8b26fb3c.webp",
  "uploadDate": "2026-03-02",
  "duration": "PT1M23S",
  "contentUrl": "https://youtu.be/zhir5FxzGFI?si=qro3wE1_OFubAqBz"
}
            `}
        </script>

      </Helmet>
      <section id="page-need_guidance-section" className="need-guidance-form flex items-end md:items-center md:min-h-[680px] lg:min-h-[800px] relative z-[11] -mt-[2px] overflow-hidden" data-locomotive-section-id="page-need_guidance" data-locomotive-section-type="need_guidance" style={{
        background: "#fff", marginTop: "0px", boxShadow: " 0 2px 15px 0px rgba(0, 0, 0, 0.1)", position: "relative", zIndex: '1'
      }}>

        <div className="min-h-full h-full w-full  relative z-[3] py-4 md:py-8 rec">
          <div className="sm:max-w-[480px] lg:max-w-[560px]" style={{ maxWidth: "100%" }}>

            {/* <h3 className="mainHeadingTotal">Testimonials</h3> */}
            <div className="v-c-p700 text-shadow-dp500 text-txt60">

            </div>

            <div className="">

              <EmblaCarouselTestimonilasVideos slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Testimonials;
