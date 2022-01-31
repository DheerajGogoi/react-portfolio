import React from 'react';

function BottomBar() {
    return(
        <section id='bottomBar'>
            <div className='bottom-container container'>
                <center>
                    <div className='row' style={{fontFamily: 'Sans serif Pro'}}>
                        <div className='col-lg-4 col-md-4 col-sm-12 copy-right'>©2022 Dheeraj Gogoi. All rights reserved</div>
                        <div className='col-lg-4 col-md-4 col-sm-12 name-logo'><span className='firstName'>DHEERAJ</span><br/><span className='fullName'>DHEERAJ GOGOI</span></div>
                        <div className='col-lg-4 col-md-4 col-sm-12 link-icons'>
                            {/* <a href='#' target='_/blank' style={{color: 'white'}}><i class="fab fa-facebook icons-logo"></i></a> */}
                            {/* <a href='#' target='_/blank' style={{color: 'white'}}><i class="fab fa-instagram icons-logo"></i></a> */}
                            <a href='https://bit.ly/3hqvX1V' target='_/blank' style={{color: 'white'}}><i class="fab fa-linkedin icons-logo"></i></a>
                            <a href='https://github.com/DheerajGogoi' target='_/blank' style={{color: 'white'}}><i class="fab fa-github icons-logo"></i></a>
                            <a href='https://bit.ly/39ZVvQS' target='_/blank' style={{color: 'white'}}><i class="fab fa-youtube icons-logo"></i></a>
                            <a href='https://www.facebook.com/dheeraj.gogoi.1004' target='_/blank' style={{color: 'white'}}><i class="fab fa-facebook-square icons-logo"></i></a>
                        </div>
                    </div>
                </center>
            </div>
        </section>
    );
}

export default BottomBar;