import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "./BlogDetails.css";


function BlogDetail({ match }) {
  const { id } = match.params; // Get the `id` from URL params
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
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
      <div className='courseBanner'>
        <img
          title='Courses Banner'
          src={`https://www.backstagepass.co.in/blog_new/uploads/subevents/${event.inner_image}`}
          alt={event.tittle_event}
        />
      </div>
      <div className="courses-container">
        <Helmet>
          <title>BlogDetail</title>
          <meta  property="og:description" content="BlogDetail" />
          <link rel="canonical" href="https://www.backstagepass.co.in/blogs/" />
        </Helmet>

        <div className="courses-wrapper">
          <h1 className="mainHeadingTotal">{event.tittle_event}</h1>
          <p className='suprts1'>Blog Duration:{(event.duration)}</p>

          <p className='suprts1'>Blog Published Date: {formatDateToDMY(event.event_s_dt)}</p>
          <p className='suprts1' style={{ backgroundColor: "#000" }}>
            <p dangerouslySetInnerHTML={{ __html: event.description }} />
          </p>


        </div>
      </div>
    </div>
  );
}

export default withRouter(BlogDetail);
