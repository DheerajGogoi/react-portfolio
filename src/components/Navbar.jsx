import React from 'react';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-color nav-padding">
            <a className="navbar-brand" href="https://bit.ly/3hqvX1V" target='_/blank' style={{fontFamily: 'Quicksand', fontSize: '2rem', color: 'orange'}}>Dheeraj Gogoi</a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto nav-hover" style={{fontFamily: 'Quicksand', fontSize: '1.1rem'}}>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" style={{marginLeft: '10px'}}><i class="fas fa-house-user"></i> HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutMe" style={{marginLeft: '10px'}}><i class="fas fa-info-circle"></i> ABOUT ME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills" style={{marginLeft: '10px'}}><i class="fab fa-uncharted"></i> SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects" style={{marginLeft: '10px'}}><i class="fas fa-project-diagram"></i> PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience" style={{marginLeft: '10px'}}><i class="fas fa-certificate"></i> EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactMe" style={{marginLeft: '10px'}}><i class="fas fa-id-badge"></i> Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a href='https://drive.google.com/file/d/1Xb-n4EJPvwT6x0JIlh7VTzb55ZSo5m-x/view?usp=sharing' target='_blank' rel='noreferrer' className="mx-2 active" style={{color: 'orange', textDecoration: 'none'}} >
                            <button type="button" className="btn btn-dark btn-md" style={{color: 'black', fontWeight: 'bolder', backgroundColor: '#1b1b1b', borderColor: 'transparent', background: 'orange'}}>My Resume</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;