import React from 'react';
import './about-us.css';
import ashleyPhoto from '../../images/Ashley_Professional_Photo.JPG';
import rachelPhoto from '../../images/RachelPhoto.JPG';
import elizabethPhoto from '../../images/Elizabeth.jpg';
import lillyPhoto from '../../images/Lilly.jpg'

const AboutUsPage = () => {
    return (
        <div className='about-us-container'>
            <div className='about-us-content'>
                <div className='section'>
                    <div className='section-header'>
                        Misson Statement
                    </div>
                    <div className='section-text-container'>
                        <div className='section-text'>
                            At REAL, our mission is to provide a reliable and user-friendly period tracker 
                            prioritizing privacy and accessibility. We aim to help users manage their menstrual cycles 
                            for medical reasons, family planning, and personal organization without compromising their 
                            personal data. Our web-based application, built with C#, React, and SQL, offers features like 
                            cycle forecasts, phase tracking, a calendar for past and future cycles, and a symptoms log. We 
                            ensure data protection by avoiding the use of personal information for login, keeping user data 
                            secure and confidential. At REAL, we are dedicated to supporting our community with a trustworthy 
                            and secure period tracking tool.
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='section-header'>
                        What is REAL?
                    </div>
                    <div className='section-text-container'>
                        <div className='section-text'>
                            This web-based application will include a forecast feature that provides users with predictions 
                            of their upcoming menstrual cycles, including start and end dates, ovulation day, and the fertile 
                            window. This feature includes a phase tracking component that monitors which phase — menstrual, 
                            follicular, ovulation, or luteal — the user is currently in. A calendar feature will allow users to 
                            view cycle data from previous cycles and expected cycle data for months to come. The website will 
                            additionally feature a symptoms log where users can track daily symptoms such as cramps, bloating, 
                            headaches, as well as energy and mood levels.
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='section-header'>
                        Who is REAL?
                    </div>
                    <div className='section-text-container'>
                        <div className='section-text'>
                            We are a team of four dedicated women, all pursuing degrees in computer science. Our shared goal is to 
                            develop a trustworthy and user-friendly period tracker. This project is part of our software development 
                            coursework, and we are committed to creating a reliable tool that meets the needs of our users.
                        </div>
                    </div>
                </div>

                <div className="fourcircles">
                    <div className="image-container">
                        <img className="circular_image" src={ashleyPhoto} alt="Ashley" />
                        <div className='member-description'>
                            <div className='name'>Ashley Chambers</div><br />
                            Front End Development & Design
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="circular_image" src={elizabethPhoto} alt="Elizabeth" />
                        <div className='member-description'>
                            <div className='name'>Elizebeth Bridges</div><br />
                            Front End Development & Design
                        </div>
                    </div>
                    <div className="image-container">
                        <img className='circular_image' src={rachelPhoto} alt='Rachel' />
                        <div className='member-description'>
                        <div className='name'>Rachel Basinski</div><br />
                            Full Stack
                        </div>
                    </div>
                    <div className="image-container">
                        <img className="circular_image" src={lillyPhoto} alt="Lilly" />
                        <div className='member-description'>
                            <div className='name'>Lilly Neeson</div><br />
                            Back End Development & Databasing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;