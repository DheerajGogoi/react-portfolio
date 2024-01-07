import React from 'react';
import { exp_list } from './exp_list';

function Experience() {
    return(
        <section className='experience-section offset' id='experience'>
            <div className='experience-bg'>
                <div className='container' data-aos="fade-up">
                    <p className='my-experience'>My <span style={{color: 'orange'}}>Experience</span></p>

                    <div className='exp-card-container'>
                        {
                            exp_list.map(item => <Exp_Card values={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

const Exp_Card = ({ values }) => {
    return (
        <div className='exp-card'>
            <div className='exp-row'>
                <div className='exp-logo-container'>
                    <img src={values.logo} className='img-fluid exp-logo' />
                </div>
                <div className='exp-about'>
                    <div className='exp-pos'>{values.position} <a href={values.link} target='_blank' className='exp-link'>@{values.company}</a></div>

                    <div className='exp-desc'>{values.desc}</div>

                    <div className='exp-pos-about'>{values.about}</div>

                    <div className='exp-duration'>{values.start} - {values.end}</div>
                </div>
            </div>
        </div>
    )
}