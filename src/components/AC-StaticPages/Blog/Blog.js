import React, { useState, useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import courseBanner from '../../../assets/img/banners/CSGD.webp';
import { Helmet } from 'react-helmet';
import { IoMdTime } from "react-icons/io";
import { useSelector, shallowEqual } from "react-redux";
import noresult from '../../../assets/img/Icons/no-result.png';


// Function to truncate HTML content after a certain number of words
function truncateHtml(html, wordLimit) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const textContent = tempDiv.textContent || tempDiv.innerText || '';

  const words = textContent.split(' ');
  const truncatedText = words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '.....' : textContent;

  tempDiv.textContent = truncatedText;
  return tempDiv.innerHTML;
}

// Function to format date to DMY
function formatDateToDMY(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return '';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function Blog() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const wordLimit = 14;

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://backstagepass.co.in/reactapi/categories_list.php')
      .then(response => response.json())
      .then(result => {
        setCategories(result);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetch
    const url =
      selectedCatId === null
        ? 'https://www.backstagepass.co.in/blog_list.php'
        : `https://www.backstagepass.co.in/blog_list.php?categoryId=${selectedCatId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
          setCurrentPage(1); // reset page on category change
        } else if (data.status === "empty") {
          setData([]); // safe fallback
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch blogs', err);
        setIsLoading(false);
      });
  }, [selectedCatId]);

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = isMobileState ? 5 :12 ;
const totalPages = Math.ceil(data.length / itemsPerPage);
const indexOfLast = currentPage * itemsPerPage;
const indexOfFirst = indexOfLast - itemsPerPage;
const currentItems = data.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className='courseBanner bqn1'>
        <img alt="Courses Banner" title='Courses Banner' src={courseBanner} />
      </div>
      <div className="courses-containerb">
        <Helmet>
          {/* full Helmet untouched */}
        </Helmet>

        <div className="courses-wrapperblog" style={{ flexDirection: isMobileState ? "column" : "row" }}>
          <div className="left-column">
            <div className="CourseesOverView">
              <div style={{ width: "100%" }}>

                {data.length === 0 ? (
                  <div className='blog-content mainblogr'>
                    <div className="not-found-container">
                      <img src={noresult} alt="Result Not Found" />
                      <h2>No blogs available</h2>

                      <button onClick={() => window.location.reload()}>Back</button>

                    </div>
                  </div>
                ) : (
                  <>
        <div className='main-blg'>
  {currentItems.map((item) => (
    <Link to={`/blogs/${item.event_title_url}`} key={item.id}>
      <div className="maind">
        <div className="blog">
          <div className="blog-image">
            <img
              src={`https://www.backstagepass.co.in/blog_new/uploads/events/${item.card_image}`}
              alt={item.tittle_event}
            />
            <span className='t-icon'><IoMdTime /> {item.duration}mins</span>
          </div>
          <div className="blog-content">
            <div>
              <span>Published Date : {formatDateToDMY(item.event_s_dt)}</span>
              <h2>{item.tittle_event}</h2>
              <p dangerouslySetInnerHTML={{ __html: truncateHtml(item.description, wordLimit) }} />
              <Link to={`/blogs/${item.event_title_url}`}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


                  {totalPages > 1 && (
  <div className="pagination-container">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    ))}
  </div>
)}

                  </>
                )}
              </div>
            </div>
          </div>

          <div className='right-column'>
            <div className='textpostc'>
              <div className='textposthc'>Categories</div>
              <ul className='catext'>
                {categories.map((category) => (
                  <li key={category.cat_id}>
                    <div className='textrightpc'>
                      <p
                        onClick={() => setSelectedCatId(category.cat_id)}
                        className={selectedCatId === category.cat_id ? 'selected' : ''}
                        style={{ userSelect: 'none', cursor: 'pointer' }}
                      >
                        {category.cat_name}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Blog;
