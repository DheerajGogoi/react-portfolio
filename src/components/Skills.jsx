import React from 'react';

const skillList = [
    'Java',
    'C',
    'C++',
    'Python',
    'HTML',
    'CSS',
    'Bootstrap',
    'Javascript',
    'MongoDB',
    'Mongoose',
    'Firebase',
    'MySQL',
    'ExpressJs',
    'ReactJs',
    'NodeJs',
    'React Native',
    'Redux',
    'Hasura',
    'GraphQL',
    'Google Cloud Platform',
    'GoHighLevel'
]

function Skills() {
    return(
        <section className='skills-section offset' id='skills'>
            <div className='skills-bg'>
                <div className='container' data-aos="fade-up">
                    <p className='my-skills'>My <span style={{color: 'orange'}}>Skills</span></p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                        <p className='my-skills-info' style={{fontFamily: 'Quicksand'}}>Since I started coding and UI design, I've gotten some experience with a variety of tools and technologies. Every day, I try to learn something new, and as a result, I get my hands filthy with any technology that catches my eye. Adobe XD is my go-to tool for wireframing and UI design. Although I do occasionally use Canva for UI design. For coding, I mostly use VS Code. I have a lot of skilled experience with Adobe Lightroom, which I use to improve the look of practically all of my photos.
                        <br />
                        <br />
                        I've mentioned some of the technology and tools that I've used.</p>
                        </div>

                        <div className='col-lg-6 col-sm-12' data-aos="fade-up">
                            <div className='skills-wrapper'>
                                <h2>
                                    {
                                        skillList.map((value, index) => {
                                            return (
                                                <span key={index} className="badge badge-warning">{value}</span>
                                            )
                                        })
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;