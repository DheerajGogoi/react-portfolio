import React from "react";
import MySpeedDial from "./comp/MySpeedDial";
import dheeraj21 from './img-comp/Dheeraj21.png';

require('dotenv').config();

function Home() {
    
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // {
    //     position: 'absolute',
    //     bottom: theme.spacing(2),
    //     right: theme.spacing(2),
    //   }

    return(
        <section className='home-section offset' id='home'>
            <div className='home-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-up">
                            <p className='home-content' style={{color: 'white', fontFamily: 'Quicksand'}}>
                                <p className='my-name'>Hi, I'm Dheeraj,</p>
                                <p className='my-quote'>I Build value through tech.</p>
                                <p className='my-about'>I am an aspiring Software Engineer who loves building real world projects.</p>
                                <a href="#contactMe" style={{textDecoration: 'none'}}>
                                    <p className='my-contact'>Contact Me <span>&#8594;</span></p>
                                </a>
                                
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 myphoto' data-aos="fade-up" >
                            <center>
                                <img className='img-fluid my-image' src={dheeraj21} alt='' />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <MySpeedDial />
        </section>
        
    );
}

export default Home;