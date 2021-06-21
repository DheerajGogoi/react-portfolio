import React from 'react';
import { createMuiTheme, createStyles, withStyles, makeStyles, Theme, ThemeProvider, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
});

function learnMore(event) {
    console.log(event);
    const projectName = event.target.id;
    console.log(projectName);
    if (projectName === 'portfolio-web') {
        window.open('https://github.com/DheerajGogoi/portfolio');
    } else if (projectName === 'todo'){
        window.open('https://github.com/DheerajGogoi/todolist-app-java-netbeans.git');
    } else if (projectName === 'weather'){
        window.open('https://github.com/DheerajGogoi/my-getweather.git');
    } else {

    }
}

function Projects() {
    return(
        <section className='projects-section offset' id='projects'>
            <div className='container projects-container' data-aos="fade-up">
                <p className='my-work'>
                    <span style={{color: 'black'}}>My</span> <span style={{color: 'red'}}>Work</span>
                </p>

                <div className="row">
                
                {/* COMPONENT TO BE RENDERED START */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                            
                            <img className='img-fluid work-img image' src='./img/portfolio.jpg' alt=''/>
                            <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>Portfolio Website</h5>
                                            <p className="card-text" style={{color: 'white'}}>A portfolio website made using MERN Stack. Visitors can send their responses in the 'Contact Me' section.</p>
                                            <p id='portfolio-web' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* COMPONENT TO BE RENDERED END */}

                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>

                        <img className='img-fluid work-img image' src='./img/weatherapp.jpg' alt=''/>
                        <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>Get Weather</h5>
                                            <p className="card-text" style={{color: 'white'}}>A weather app which fetches weather related data of a city using OpenWeatherMap API</p>
                                            <p id='weather' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                        
                        <img className='img-fluid work-img image' src='./img/blog.jpg' alt=''/>
                        <div className="img-middle">
                            <div className="img-text" style={{padding: '0'}}>
                                <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                <div className='card-title working-title'>Blog Website</div>
                                    <div className="card-body working" style={{color: 'orange'}}>Working 🔧</div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                        
                        <img className='img-fluid work-img image' src='./img/todolist.jpg' alt=''/>
                        <div className="img-middle">
                            <div className="img-text" style={{padding: '0'}}>
                                <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: 'orange'}}>Java Todo-List</h5>
                                        <p className="card-text" style={{color: 'white'}}>Features like due time alarm clock and change theme is available, MySQL database is used as a storage of records.</p>
                                        <p id='todo' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                        
                        <img className='img-fluid work-img image' src='./img/school.jpg' alt=''/>
                        <div className="img-middle">
                            <div className="img-text" style={{padding: '0'}}>
                                <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                <div className='card-title working-title'>School Management System</div>
                                    <div className="card-body working" style={{color: 'orange'}}>Working 🔧</div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;