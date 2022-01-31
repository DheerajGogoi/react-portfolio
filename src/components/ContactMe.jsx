import React, { useState } from 'react';
import * as emailjs from "emailjs-com";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Faq from './Faq'

require('dotenv').config();

function click() {

    // setMsg('SENDING...');

    emailjs.init(process.env.REACT_APP_USER_ID);

    const bttn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        bttn.value = 'Sending...';
        alert('Sending, Please Wait');

        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;

        emailjs.sendForm(serviceID, templateID, this).then(() => {
            bttn.value = 'Send Email';
            alert('Sent!');
            document.getElementById("form").reset();
            // window.location.reload();
            // setMsg('SEND');
        }, (err) => {
            bttn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    });
}

// export className ContactMe extends Component{
function ContactMe(){

    const [msg, setMsg] = useState('SEND');

    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
    };

        return(
            <section className='contact-me-section offset' id='contactMe' style={{borderTop: '2px solid black'}}>

                <div className='container contact-me-container' data-aos="fade-up" >
                        <p style={{fontSize: '3rem', fontFamily: 'Quicksand', fontWeight: 'bolder'}}>Contact <span style={{color: 'red'}}>Me</span></p>
                            
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12' style={{marginBottom: '7%'}}>
                                <p style={{fontSize: '1.2rem', fontFamily: 'QuickSand', fontWeight: 'bolder'}}>Feel free to contact me at any time. I will get back to you as soon as I can.</p>
                                    
                                
                                <form  id='form' autoComplete="off">
                                    <div><TextField id="userName" name='from_name' id='from_name' label="Name" type='text' variant="outlined" style={{width: '100%'}} required /></div>
                                    <br />
                                    <div><TextField  style={{width: '100%'}} id="userEmail" name='from_email' id='from_email' label="Email" type='email' variant="outlined" required /></div>
                                    <br />
                                    <div><TextField  style={{width: '100%'}} id="userMsg" rows="3" name='from_message' id='from_message' label="Message" type='text' variant="outlined" required /></div>
                                    <br />
                                    <div><Button id='button' type='submit' onClick={click} style={{width: '100%', background: 'black', color: 'orange', paddingTop: '2%', paddingBottom: '2%', fontFamily: 'Quicksand', fontWeight: 'bolder'}} variant="contained" color="secondary">SEND</Button></div>
                                </form>
                                    
                            </div>
                                
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className="card text-white mb-3 rounded-0" style={{maxWidth: '22rem', margin: 'auto', padding: '1%', background: '#1b1b1b', height: '24.9rem'}}>
                                    <div className='card-header border-0' style={{background: 'transparent', fontFamily: '', fontWeight: 'bolder', fontSize: '2.3rem', fontFamily: 'Quicksand'}}>Info</div>
                                    <div className="card-body" style={{padding: '12%'}}>
    
                                        <div className='row'>
                                            <div className='col' style={{maxWidth: '20%', padding: '0'}}><span><i className="far fa-envelope info-icons"></i></span></div>
                                            <div className='col' style={{fontFamily: 'Quicksand', textAlign: 'right'}}>dheerajgogi2@gmail.com</div>
                                        </div>
    
                                        <br />
    
                                        <div className='row'>
                                            <div className='col' style={{maxWidth: '20%', padding: '0'}}><span><i className="fas fa-phone-alt info-icons"></i></span></div>
                                            <div className='col' style={{fontFamily: 'Quicksand', textAlign: 'right'}}>+91 7099485845</div>
                                        </div>
    
                                        <br />
    
                                        <div className='row'>
                                            <div className='col' style={{maxWidth: '20%', padding: '0'}}><span><i className="far fa-address-card info-icons"></i></span></div>
                                            <div className='col' style={{fontFamily: 'Quicksand', textAlign: 'right'}}>dheerajgogoi.netlify.app</div>
                                        </div>
    
                                        <br />
    
                                        <div className='row'>
                                            <div className='col' style={{maxWidth: '20%', padding: '0'}}><span><i className="fas fa-building info-icons"></i></span></div>
                                            <div className='col' style={{fontFamily: 'Quicksand', textAlign: 'right'}}>Jorhat, Assam, India, Pin-785004</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                <div style={{paddingLeft: '20%', paddingRight: '20%', paddingBottom: '7%'}}>
                    <Faq />
                </div>

            </section>
        );

    // }

}


export default ContactMe;