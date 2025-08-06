import React from 'react'
import "./BlogDetails.css";
import HomeContent from "../../../content/HomeContent";
import courseBanner from "../../../assets/img/banners/newban1.webp";


import { Helmet } from "react-helmet";

function Courses(props) {
    return (
        <>
            <div className='courseBanner bqn1'><img alt="Courses Banner" title='Courses Banner' src={courseBanner} /></div>
            <div className="courses-container">
                <Helmet>
                    <title>BlogDetail</title>
                    <meta  name="description" content="BlogDetail" />
                </Helmet>

                <div className="courses-wrapper">
                    <h2 class="mainHeadingTotal">InnerPage</h2>

                    <p className='suprts1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className='suprts1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className='suprts1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className='suprts1'><b style={{ fontSize: "25px" }}>Date :</b></p>


                </div>






            </div>

            <HomeContent />
        </>
    )
}

Courses.propTypes = {

}

export default Courses;

