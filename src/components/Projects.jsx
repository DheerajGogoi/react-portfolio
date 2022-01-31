import React from 'react';
import { createMuiTheme, createStyles, withStyles, makeStyles, Theme, ThemeProvider, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

function learnMore(event) {
    console.log(event);
    const projectName = event.target.id;
    console.log(projectName);
    if (projectName === 'portfolio-web') {
        window.open('https://github.com/DheerajGogoi/react-portfolio');
    } else if (projectName === 'todo'){
        window.open('https://github.com/DheerajGogoi/todolist-app-java-netbeans.git');
    } else if (projectName === 'weather'){
        window.open('https://github.com/DheerajGogoi/my-getweather.git');
    } else if (projectName === 'covid-tracker'){
        window.open('https://github.com/DheerajGogoi/covid-tracker-app.git');
    } else if (projectName === 'school'){
        window.open('https://github.com/DheerajGogoi/school-management-system.git');
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
                        
                        <img className='img-fluid work-img image' src='./img/covidtracker.jpg' alt=''/>
                        <div className="img-middle">
                            <div className="img-text" style={{padding: '0'}}>
                                <p className='proj-title'>COVID Tracker App</p>
                                <p className='proj-body'>React Native app - displays world wide and India's covid cases. Find donors and requests for plasma</p>
                                <div style={{
                                    marginTop: '-10px',
                                    marginBottom: '20px'
                                }}>
                                    <h3>
                                        <span className="badge tool-badge badge-warning">React Native</span>
                                        <span className="badge tool-badge badge-warning">MongoDB</span>
                                        <span className="badge tool-badge badge-warning">ExpressJs</span>
                                        <span className="badge tool-badge badge-warning">NodeJs</span>
                                    </h3>
                                </div>

                                <a href='https://github.com/DheerajGogoi/covid-tracker-app.git' target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                                    <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                        <i class="fab fa-git-alt" style={{fontSize: '20px', marginRight: '10px'}}></i> Open Project
                                    </Button>
                                </a>

                            </div>
                        </div>
                        
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                            
                            <img className='img-fluid work-img image' src='./img/portfolio.jpg' alt=''/>
                            {/* <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>Portfolio Website</h5>
                                            <p className="card-text" style={{color: 'white'}}>A portfolio website made using MERN Stack. Visitors can send their responses in the 'Contact Me' section.</p>
                                            <p id='portfolio-web' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <p className='proj-title'>Portfolio Website</p>
                                    <p className='proj-body'>A portfolio website made using MERN Stack. Visitors can send their responses in the 'Contact Me' section.</p>
                                    <div style={{
                                        marginTop: '-10px',
                                        marginBottom: '20px'
                                    }}>
                                        <h3>
                                            <span className="badge tool-badge badge-warning">ReactJs</span>
                                            <span className="badge tool-badge badge-warning">Firebase</span>
                                        </h3>
                                    </div>

                                    <a href='https://github.com/DheerajGogoi/react-portfolio' target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                                        <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                            <i class="fab fa-git-alt" style={{fontSize: '20px', marginRight: '10px'}}></i> Open Project
                                        </Button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* COMPONENT TO BE RENDERED END */}

                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>

                        <img className='img-fluid work-img image' src='./img/weatherapp.jpg' alt=''/>
                        {/* <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>Get Weather</h5>
                                            <p className="card-text" style={{color: 'white'}}>A weather app which fetches weather related data of a city using OpenWeatherMap API</p>
                                            <p id='weather' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <p className='proj-title'>Get Weather</p>
                                    <p className='proj-body'>A weather app which fetches weather related data of a city using OpenWeatherMap API</p>
                                    <div style={{
                                        marginTop: '-10px',
                                        marginBottom: '20px'
                                    }}>
                                        <h3>
                                            <span className="badge tool-badge badge-warning">NodeJs</span>
                                            <span className="badge tool-badge badge-warning">ExpressJs</span>
                                            <span className="badge tool-badge badge-warning">EJS</span>
                                        </h3>
                                    </div>

                                    <a href='https://github.com/DheerajGogoi/my-getweather.git' target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                                        <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                            <i class="fab fa-git-alt" style={{fontSize: '20px', marginRight: '10px'}}></i> Open Project
                                        </Button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                        
                            <img className='img-fluid work-img image' src='./img/todolist.jpg' alt=''/>
                            {/* <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>Java Todo-List</h5>
                                            <p className="card-text" style={{color: 'white'}}>Features like due time alarm clock and change theme is available, MySQL database is used as a storage of records.</p>
                                            <p id='todo' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <p className='proj-title'>Java Todo-List</p>
                                    <p className='proj-body'>Features like due time alarm clock and change theme is available, MySQL database is used as a storage of records.</p>
                                    <div style={{
                                        marginTop: '-10px',
                                        marginBottom: '20px'
                                    }}>
                                        <h3>
                                            <span className="badge tool-badge badge-warning">Java</span>
                                            <span className="badge tool-badge badge-warning">MySQL</span>
                                            <span className="badge tool-badge badge-warning">Netbeans IDE</span>
                                        </h3>
                                    </div>

                                    <a href='https://github.com/DheerajGogoi/todolist-app-java-netbeans.git' target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                                        <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                            <i class="fab fa-git-alt" style={{fontSize: '20px', marginRight: '10px'}}></i> Open Project
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                        <div className='img-wrapper overflow-hidden'>
                            
                            <img className='img-fluid work-img image' src='./img/school.jpg' alt=''/>
                            {/* <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: 'orange'}}>School Management System</h5>
                                            <p className="card-text" style={{color: 'white'}}>Java computer appliacation for managing school records.</p>
                                            <p id='school' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="img-middle">
                                <div className="img-text" style={{padding: '0'}}>
                                    <p className='proj-title'>School Management System</p>
                                    <p className='proj-body'>A Java computer appliacation for managing school records of students and teachers.</p>
                                    <div style={{
                                        marginTop: '-10px',
                                        marginBottom: '20px'
                                    }}>
                                        <h3>
                                            <span className="badge tool-badge badge-warning">Java</span>
                                            <span className="badge tool-badge badge-warning">MySQL</span>
                                            <span className="badge tool-badge badge-warning">Netbeans IDE</span>
                                        </h3>
                                    </div>

                                    <a href='https://github.com/DheerajGogoi/school-management-system.git' target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                                        <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                            <i class="fab fa-git-alt" style={{fontSize: '20px', marginRight: '10px'}}></i> Open Project
                                        </Button>
                                    </a>
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

{/* <div className="card rounded-lg" style={{width: '14rem', background: 'black'}}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: 'orange'}}>COVID Tracker App</h5>
                                        <p className="card-text" style={{color: 'white'}}>React Native app - displays world wide and India's covid cases. Find donors and requests for plasma</p>
                                        <p id='covid-tracker' className='open-project' onClick={learnMore}>Open Project &#8594;</p>
                                    </div>
                                </div> */}