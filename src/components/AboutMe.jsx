import React from 'react';
import Typical from 'react-typical';
import dheeraj2 from './img-comp/new-about.jpg'
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
                            <img className='img-fluid my-photo-2' src={dheeraj2} alt='' />
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
                                'I love Web Development.',
                                1000,
                                'I love App Development.',
                                1000,
                                'I love Photo Editing.',
                                1000,
                                "Let's Collaborate !!!",
                                1000,
                            ]}
                        /></p>
                        <p className='my-info'>I am currently in my 3rd year as a Computer Science and Engineering (B.Tech) undergraduate at Tezpur University. I'm a full stack MERN developer, and the website you're looking at right now was built with the following technology. Full Stack Development, App Development, Photo Editing, and Graphic Design are some of my areas of interest. In the Projects area, I have a number of other projects that were created with a variety of different technologies.
                        <br /><br />
                        My contact information is included below; you can contact me via email, phone, SMS, or WhatsApp if necessary. Those who are interested can view my résumé by clicking the 'My Resume' button.</p>
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

                        <a href='https://drive.google.com/file/d/1cj37-g2-edHTo4QWjcavF92kbdySh0GS/view?usp=drive_link' target='_blank' rel='noreferrer' class="mx-2 active" style={{color: 'orange', textDecoration: 'none'}}>
                            <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">My Resume</Button>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutMe;