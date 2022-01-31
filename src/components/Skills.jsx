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
    'GraphQL'
]

function Skills() {
    return(
        <section className='skills-section offset' id='skills'>
            <div className='skills-bg'>
                <div className='container' data-aos="fade-up">
                    <p className='my-skills'>My <span style={{color: 'orange'}}>Skills</span></p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                        <p className='my-skills-info' style={{fontFamily: 'Quicksand'}}>I've been into coding and UI desiging since past 1 year and have gained some experience over various tools and technologies. I try to learn new things every day and so thus I make my hands dirty on each and every tech that attracts my attention towards it. My favourite tool for wireframing and UI designing is Adobe XD. Although I sometimes use Canva.com site for UI designing. I mainly use Eclipse, VS Code and Jupyter Notebook for coding work. I have some good work exprerience with Adobe Lightroom, which I use to edit almost all of my pictures making them more attractive.
                        <br />
                        I have listed some of the tech and tools that I have worked with.</p>
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