import React from 'react';
import Button from '@material-ui/core/Button';
import { proj_list } from './proj_list';

function Projects() {
    return(
        <section className='projects-section offset' id='projects'>
            <div className='container projects-container' data-aos="fade-up">
                <p className='my-work'>
                    <span style={{color: 'black'}}>My</span> <span style={{color: 'red'}}>Work</span>
                </p>

                <div className="row">

                    {
                        proj_list.map(item => {
                            return(
                                <ProjCard values={item} />
                            )
                        })
                    }

                </div>

            </div>
        </section>
    );
}

export default Projects;

const ProjCard = ({ values }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <div className='img-wrapper overflow-hidden'>

                <img className='img-fluid work-img image' src={values.image} alt=''/>
                <div className="img-middle">
                    <div className="img-text" style={{padding: '0'}}>
                        <p className='proj-title'>{values.name}</p>
                        <p className='proj-body'>{values.desc}</p>
                        <div style={{
                            marginTop: '-10px',
                            marginBottom: '20px'
                        }}>
                            <h3>
                                {values.tools.map(tool => <span className="badge tool-badge badge-warning">{tool}</span>)}
                            </h3>
                        </div>

                        <a href={values.github} target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none', marginRight: '10px'}}>
                            <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                <i class="fab fa-git-alt" style={{fontSize: '20px'}}></i>
                            </Button>
                        </a>

                        {values.link && <a href={values.link} target='_blank' rel='noreferrer' class="active" style={{color: 'orange', textDecoration: 'none'}}>
                            <Button id='button' style={{background: 'black', color: 'orange', fontFamily: 'Quicksand', paddingTop: '1.4%', paddingBottom: '1.4%', textTransform: 'none', backgroundColor: '#1b1b1b'}} variant="contained" color="secondary">
                                <i class="fas fa-globe" style={{fontSize: '20px'}}></i>
                            </Button>
                        </a>}
                    </div>
                </div>

            </div>
        </div>
    )
}