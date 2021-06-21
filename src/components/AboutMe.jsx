import React from 'react';
import Typical from 'react-typical';
import MyTimeline from './MyTimeline';
import dheeraj1 from './img-comp/Dheeraj-1.jpg'
import Button from '@material-ui/core/Button';




function openLinkedin() {
    window.open('https://bit.ly/3hqvX1V');
}

function openWebsite() {
    window.open('https://dheerajgogoi.netlify.app/');
}

function AboutMe() {
    return(
        <section className='about-me-section offset' id='aboutMe'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12' data-aos='fade-up'>
                        <center>
                            <img className='img-fluid my-photo-2' src={dheeraj1} alt='' />
                        </center>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12' data-aos='fade-up'>
                        <p className='whoAmI'>Who <span style={{color: 'red'}}>Am</span> I ?</p>
                        <p className="my-name-work">I am Dheeraj Gogoi
                        <br />
                        {/* I love */}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'I love Machine Learning.',
                                1000,
                                'I love Android Development.',
                                1000,
                                'I love Web Development.',
                                1000,
                                'I love Photo Editing.',
                                1000,
                                "Let's Collaborate !!!",
                                1000,
                            ]}
                        /></p>
                        <p className='my-info'>I am a Computer Science and Engineering (B.Tech) undergraduate pursuing from Tezpur University, currently in my 2nd semester. I am a full stack MERN developer, and the website you're currently seeing is made using the following technology. My areas of interest include Machine learning, Data Science, Android Development and Web development. I have several other projects that are made using various other tools and are displayed in the Projects section.
                        <br /><br />
                        My details are displayed below, you can mail, call, SMS or WhatsApp me if needed. Interested ones can check out my resume by clicking the My Resume button.</p>
                        <div className='row my-3'>
                            <div className='col'>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Birthday :</span> 30&apos;th January, 2003</p>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Website :</span> <span onClick={openWebsite} style={{cursor: 'pointer'}}>dheerajgogoi.netlify.app</span></p>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Contact :</span> +91 7099485845</p>
                            </div>
                            <div className='col'>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Degree :</span> B.Tech - Computer Science and Engineering (Pursuing)</p>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Email :</span> dheerajgogi2@gmail.com</p>
                                <p style={{fontFamily: 'Source Serif Pro'}}><span className='b'>Linkedin :</span> <span onClick={openLinkedin} style={{cursor: 'pointer'}}>https://bit.ly/3hqvX1V</span></p>
                            </div>
                        </div>
                        <a href="#contactMe" class="active" style={{color: 'orange', textDecoration: 'none'}}>
                            <Button id='button' type='submit' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">Contact Me</Button>
                        </a>

                        <a href='https://drive.google.com/file/d/1zjvRUsWEpjnby7cKDt5k0uUEcPZrsay4/view?usp=sharing' target='_blank' rel='noreferrer' class="mx-2 active" style={{color: 'orange', textDecoration: 'none'}}>
                            <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">My Resume</Button>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutMe;