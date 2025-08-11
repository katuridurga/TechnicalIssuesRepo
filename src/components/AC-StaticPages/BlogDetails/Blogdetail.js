import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "./BlogDetails.css";
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";
import { FaHome, FaArrowRight } from 'react-icons/fa';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BlogDetail({ match }) {
  const { id } = match.params; // Get the `id` from URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [lastTimeSent, setLastTimeSent] = useState(null); // To track last sent time
  const [sessionId, setSessionId] = useState(null);


  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [recentPosts, setRecentPosts] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    PhoneNumber: '', email: '', city: '', comments: '', url: window.location.href, from: 'blog'
  });

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "PhoneNumber" && /^[0-9]{10}$/.test(value)) {
      try {
        const response = await fetch(`https://www.backstagepass.co.in/reactapi/checkenquirypagemobile.php?contactNumber=${value}`);

        if (response.status === 200) {
          alert('This mobile number is already registered with in the last 3 months our team will get back to you.');
          setFormData((prevData) => ({
            ...prevData,
            PhoneNumber: '',  // Reset the contact number field to an empty string
          }));
        }
      } catch (error) {
        console.error('Error checking mobile number:', error);
        alert('Failed to validate mobile number. Please try again.');
      }
    }
  };
  const handleSubmit = async (event) => {
    // alert("Your Data Submitted successfully");
    //console.log(formData);
    setOpen(true);
    //console.log('pranathi');


    event.preventDefault();
    try {
      const response = await axios.post("https://www.backstagepass.co.in/enquiry_react.php", formData);
      console.log(response);
      //alert(response.statuscode);

      setFormData({
        firstname: '', PhoneNumber: '', email: '', city: '', comments: '', url: window.location.href, from: 'blog'
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  useEffect(() => {
    fetch(`https://www.backstagepass.co.in/blog_list_new.php?id=${id}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log('Fetched data:', jsonData); // 👈 Check the structure
        setRecentPosts(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const bannerRef = useRef(null);

  // Function to calculate scroll percentage

  const handleScroll = () => {
    if (!bannerRef.current) return;

    const bannerHeight = 500; // Fixed height of the banner
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollTop <= bannerHeight) {
      setScrollPercentage(0); // No progress before banner
    } else {
      const adjustedScroll = scrollTop - bannerHeight;
      const adjustedHeight = scrollHeight - bannerHeight;
      const scrolled = Math.floor((adjustedScroll / adjustedHeight) * 100);
      setScrollPercentage(scrolled);
    }
  };
  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    // Get the current page URL
    const pageUrl = window.location.href;
    let currentSessionId = sessionStorage.getItem('sessionId');

    // If session ID doesn't exist, create one and save it to sessionStorage
    if (!currentSessionId) {
      currentSessionId = uuidv4();  // Generate new session ID
      sessionStorage.setItem('sessionId', currentSessionId); // Store session ID in sessionStorage
    }

    // Set sessionId in state
    setSessionId(currentSessionId);

    // Send the page view to the PHP API
    fetch('https://www.backstagepass.co.in/reactapi/track_page.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'sessionId': currentSessionId,
        'page_url': pageUrl,
        'blog_url': id,  // Assuming `id` is a prop
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the whole response to debug
        if (data.success) {
          console.log('Page view logged successfully.');
        } else {
          console.error('Error logging page view:', data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]); // Make sure to add `id` to the dependency array



  useEffect(() => {
    // Set the start time when the page loads
    const startTime = new Date().getTime();
    setStartTime(startTime);
    setLastTimeSent(startTime);
    let currentSessionId = sessionStorage.getItem('sessionId');

    // If session ID doesn't exist, create one and save it to sessionStorage
    if (!currentSessionId) {
      currentSessionId = uuidv4();  // Generate new session ID
      sessionStorage.setItem('sessionId', currentSessionId); // Store session ID in sessionStorage
    }

    // Set sessionId in state
    setSessionId(currentSessionId);

    // Start tracking time every 30 seconds
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeSpent = (currentTime - lastTimeSent) / 1000; // Time in seconds

      // Send the time increment to the PHP backend
      const pageUrl = window.location.href;

      fetch('https://www.backstagepass.co.in/reactapi/track_time_spent.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          sessionId: currentSessionId,
          page_url: pageUrl,
          blog_url: id,
          time_spent: timeSpent,  // Send the incremental time spent
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Time sent to server:', data);
        })
        .catch(error => {
          console.error('Error sending time:', error);
        });

      // Update lastTimeSent so the next interval measures from the correct time
      setLastTimeSent(currentTime);
      // }, 30000); // Run the function every 30 seconds
    }, 30000); // Run the function every 30 seconds

    // Cleanup the interval when the component unmounts or when the page is about to unload
    const handleBeforeUnload = (event) => {
      const endTime = new Date().getTime();
      const timeSpent = (endTime - startTime) / 1000; // Time in seconds

      // Send the final time spent data to the PHP backend
      const pageUrl = window.location.href;

      fetch('https://www.backstagepass.co.in/reactapi/track_time_spent.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          sessionId: currentSessionId,
          page_url: pageUrl,
          blog_url: id,
          time_spent: timeSpent,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Final time sent to server:', data);
        })
        .catch(error => {
          console.error('Error sending final time:', error);
        });

      // Optional: Show confirmation dialog before leaving the page
      const confirmationMessage = 'Are you sure you want to leave?';
      event.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For old versions of Firefox
    };

    // Listen for the page unload event
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [id, startTime, lastTimeSent]); // Run once when the component mounts or when the blog 

  useEffect(() => {
    console.log('Fetching event with ID:', id);

    // Fetch the event details based on the ID
    fetch(`https://www.backstagepass.co.in/blog_edit.php?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        // Assuming the response is an array and taking the first element
        setEvent(data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching event:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const formatDateToDMY = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return ''; // Return empty string if invalid date

    const day = String(date.getDate()).padStart(2, '0');

    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const month = monthNames[date.getMonth()];

    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching event: {error.message}</p>;
  }

  if (!event) {
    return <p>No event data available.</p>;
  }


  return (

    <div>
      <Helmet>




        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "India’s Best Game Development college | Backstage Pass Institute of Gaming",
                "item": "https://www.backstagepass.co.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": event.meta_tittle,
                "item": window.location.href
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Backstage Pass Institute of Gaming",
        "url": "https://www.backstagepass.co.in/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.backstagepass.co.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            },
            "headline": event.meta_tittle,
            "description": event.meta_des,
            "image": `https://www.backstagepass.co.in/blog_new/uploads/subevents/${event.inner_image}`,
            "author": {
              "@type": "Organization",
              "name": "Backstage Pass Institute of Gaming",
              "url": "https://www.backstagepass.co.in/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Backstage Pass Institute of Gaming",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.backstagepass.co.in/logo-16c7e4db.webp"
              }
            },
            "datePublished": formatDateToDMY(event.event_s_dt) // Ensure this returns a valid ISO or date string
          })}
        </script>
      
        {Number(event.event_id) === 70 && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the average game developer salary in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "₹6–12 LPA depending on experience and skills."
          }
        },
        {
          "@type": "Question",
          "name": "Can you earn ₹1 crore in game development in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, especially in senior roles or international studios, some professionals earn ₹1 crore+ annually."
          }
        },
        {
          "@type": "Question",
          "name": "Is game development a good career in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! With rising demand and growing salaries, its one of the most exciting creative tech careers today. Backstage Pass graduates are building their careers at leading game studios like Ubisoft, Rockstar Games, EA, and Zynga with high-paying roles right after college. If you have a passion for games, then it is the best time to start developing a game."
          }
        }
      ]
    })}
  </script>
)}

{Number(event.event_id) === 75 && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are there creative courses after 12th that offer high salaries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Creative fields like Game Art & Design, Animation, UI/UX Design, Visual Communication, and even Content Creation can lead to high-paying careers. These industries value originality and hands-on skills, and with the rise of digital platforms, there’s growing demand (and pay!) for talented creators."
          }
        },
        {
          "@type": "Question",
          "name": "Can arts students pursue high-paying careers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, arts students can build successful and high-paying careers too. Courses in Design, Psychology, Digital Marketing, Law, Mass Communication, and even Entrepreneurship are in high demand. With the right skills and specialization, you can earn just as much as science or commerce graduates."
          }
        },
        {
          "@type": "Question",
          "name": "Do high-salary careers require engineering or medical degrees only?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not anymore. While engineering and medical are still valuable, high-paying careers today also come from fields like Data Science, Game Development, AI, Law, Design, Finance, and Business. What matters more is your skill, passion, and how much you’re willing to learn and grow."
          }
        },
        {
          "@type": "Question",
          "name": "Is game development a good career choice after 12th?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, game development is a fantastic choice if youre passionate about games, art, or coding. The gaming industry is booming globally and in India, offering both creative satisfaction and high salaries. With the right education and portfolio, you can work on games enjoyed by millions and build a rewarding global career."
          }
        }
      ]
    })}
  </script>
)}
{Number(event.event_id) === 76 && (
   <script type="application/ld+json">
    {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can one person be both a designer and a developer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Especially in small indie game teams, one person may handle both design and development. However, in bigger studios, these roles are often separate to focus on specialised skills."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to know how to code to become a game designer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not always. While coding helps, many game designers work more on ideas, storylines, and gameplay mechanics. Basic knowledge of game engines or scripting can definitely give you an edge."
            }
          },
          {
            "@type": "Question",
            "name": "What skills do I need to become a game developer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You’ll need strong programming skills (like C++, C#, Python), logical thinking, problem-solving abilities, and experience using game engines like Unity or Unreal."
            }
          }
        ]
      })}
  </script>
)}



        <title>{event.meta_tittle}</title>
        <meta property="og:title" content={event.meta_tittle} />
        <meta  name="description" content={event.meta_des} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      {/* <div className='courseBanner'>
        <img
          title={event.tittle_event}
          src={`https://www.backstagepass.co.in/blog_new/uploads/subevents/${event.inner_image}`}
          alt={event.tittle_event}
        />
      </div> */}


      {/* <div ref={bannerRef} className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular" style={{backgroundImage: `url(https://www.backstagepass.co.in/blog_new/uploads/subevents/${event.inner_image})`, backgroundPosition: "bottom", backgroundSize: "cover"}}>
<div className="et_pb_row et_pb_row_0">
<div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
<div className="et_pb_text_inner"><h1 className="title white-txtt1" style={{padding:"30px", color: "#fff"}}></h1></div>
</div>
</div>
</div>
</div> */}
      {/* <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollPercentage}%`, height: "4px", backgroundColor: "#ed1b24" }}
        ></div>
        <div className="pr1">{`${scrollPercentage}%`}</div>
      </div> */}
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li>
              <a href="#!"><FaHome className="icon" /> Home</a>
            </li>
            <li>
              <a href="/blogs"><FaArrowRight className="icon" />Blogs</a>
            </li>
            <li>
              <a href="#!"><FaArrowRight className="icon" />{event.tittle_event} </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="courses-container blogContainer" style={{ display: "flex", gap: "20px", flexDirection: isMobileState ? "column" : "row" }}>
        {/* Left Section */}

        <div className="left-section" style={{ width: isMobileState ? "100%" : "70%" }}>

          <p className="datformate">{formatDateToDMY(event.event_s_dt)}</p>
          <h1 className='titlehdcontent'>{event.tittle_event}</h1>
          <img title={event.tittle_event} src={`https://www.backstagepass.co.in/blog_new/uploads/subevents/${event.inner_image}`} alt={event.tittle_event} style={{ width: isMobileState ? "100%" : "85%", height: "auto", marginTop: "20px" }} />
          <p className='testtitle'>{event.event_schema}</p>
          <div className="courses-wrapperb mainpost">
            <div>
              <p className="suprts1" style={{ backgroundColor: "#000" }}>
                <span dangerouslySetInnerHTML={{ __html: event.description }} />
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section" style={{ width: isMobileState ? "100%" : "30%" }}>
          <div className="textpost">
            <div className="textposth">Recent Posts</div>
            <ul>
              {recentPosts.map((post, index) => (
                <Link
                  to={`/blogs/${post.event_title_url}`}
                  key={post.id}
                  onClick={() => window.location.href = `/blogs/${post.event_title_url}`} // Forces reload
                >
                  <li key={index}>

                    <div className="left imagel">
                      <img src={`https://www.backstagepass.co.in/blog_new/uploads/events/${post.card_image}`} alt={post.tittle_event} />
                    </div>
                    <div className="right textrightp">
                      <p>{post.tittle_event}</p>
                    </div>

                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Blog Form */}
          <div id="blogcouncel">
            <div className="textposth">Enquire Now</div>
            <div className="containers-blog">


              <form onSubmit={handleSubmit} className="formainblog">
                <div className="formGrid-blog" data-form-id="need-guidance" data-form="step1-container">


                  <div className="">
                    <label className="" for="firstname">Full Name</label>
                    <input className="" placeholder="Full Name" id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleInputChange} required />
                  </div>


                </div>
                <div className="formGrid-blog" data-form-id="need-guidance" data-form="step1-container">
                  <div className="">
                    <label className="" for="PhoneNumber">Phone Number</label>
                    <input className="" placeholder="Phone Number" id="PhoneNumber" name="PhoneNumber" type="tel" pattern="[6-9][0-9]{9}" minLength="10" maxLength="10" value={formData.PhoneNumber} onChange={handleInputChange} required />
                  </div>
                  <div className="">
                    <label className="" for="city">City</label>
                    <input className="" placeholder="City" id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} required />
                  </div>
                </div>
                <div className="formGrid-blog" data-form-id="need-guidance" data-form="step1-container">
                  <div className="">
                    <label className="" for="email">Email</label>
                    <input className="" placeholder="Email" id="email" name="email" value={formData.email} onChange={handleInputChange} type="email" required />
                  </div>

                </div>
                <div className="formGrid-blog" data-form-id="need-guidance" data-form="step1-container">

                  <div className="" style={{ width: isMobileState ? "100%" : "100%" }}>
                    <label className="" for="comments">Comments</label>
                    <textarea
                      className="input-gray"
                      name="comments"
                      id="comments"
                      placeholder="Enter your comments here..."
                      value={formData.comments}
                      onChange={handleInputChange}

                      rows="6"
                      maxLength={40}
                      style={{ color: 'white' }}
                      title="max 40 characters allowed"
                    ></textarea>
                    <small style={{ color: '#888', fontSize: '12px' }}>Allow maximum 40 characters</small>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <button className=" three button brand size200 w-full sm:w-auto" data-form-id="need-guidance" data-form="step1-button-continue" type="submit">
                    Submit
                  </button>

                </div>
              </form>
              <React.Fragment>

                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>{"Thank you for reaching out to us"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" style={{ fontSize: "19px", fontWeight: "500", fontFamily: "'Montserrat', sans-serif" }}>
                      We appreciate your interest and will get in touch with you soon.

                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} style={{ fontSize: "21px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>Close</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default withRouter(BlogDetail);
