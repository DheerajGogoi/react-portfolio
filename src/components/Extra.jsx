import React, { useEffect, useState} from 'react';
import Card from './comp/Card';
import imageLink from '../imageLink';
import courseDetails from "../courseDetails";
import SubmitForm from './SubmitForm';
import firebaseDb from "../firebase";
import Typical from 'react-typical';
// import {puppeteer} from 'puppeteer';

var courseObjects = [];


function readMore() {
    window.open('https://www.google.com');
}

// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
  
//     const [el] = await page.$x('/html/body/div/div[2]/div[1]/h2');
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();
  
//     console.log({srcTxt});
//   }
  
// scrapeProduct('http://localhost:4000/');

function createCourse(details) {
    return(
        <div className='col-lg-4 col-md-6 col-sm-12 course-card'>
            <Card 
                image={details.imageUrl}
                cardTitle={details.title}
                cardContent={details.body}
                btn1={details.btn1}
                btn2={details.btn2}
                siteLink={details.site}
                clink={details.clink}
            />
        </div>
    );
}

function Extra() {

    var [courseObjects, setCourseObjects] = useState();

    useEffect(() => {
        firebaseDb.child('courses').on('value', snapshot => {
            if (snapshot.val() != null)
            setCourseObjects({
                    ...snapshot.val()
                })
        })
    }, [])

    const addOrEdit = obj => {
        firebaseDb.child('courses').push(
            obj,
            err => {
                if (err){
                    console.log(err)
                } else{
                    alert('Submitted !!');
                }
            }
        )
    }

    function showData(params) {
        
        if (params === undefined || params === null) {
            return null
        }

        return(
            Object.keys(params).map(id => {
                return(
                    <div className='col-lg-4 col-md-6 col-sm-12 course-card' style={{paddingBottom: '4%'}}>
                        <Card 
                            image={params[id].imageUrl}
                            cardTitle={params[id].title}
                            cardContent={params[id].body}
                            btn1={params[id].btn1}
                            btn2={params[id].btn2}
                            siteLink={params[id].site}
                            clink={params[id].clink}
                        />
                    </div>
                );
            })
        )
    }

    return(
        <section className='extra-section offset' id='extra'>
            <div className='extra-bg'>
                <div className='container' data-aos="fade-up">
                    <p className='extra-header'>Extra</p>
                    <p className='certificates'>Courses I've taken</p>
                    <div className='row' style={{paddingBottom: '4%'}}>

                        {console.log(courseObjects)}

                        {showData(courseObjects)}
                    

                    </div>

                    <hr color='orange' />

                    <p className='blog-header' data-aos="fade-up">Also check out my Blog Posts !</p>
                    <div className='blog-container' data-aos='fade-up'>
                        <div className='work-in-progress'>
                            Work in progress 🔧🔧🔧
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Extra;

{/* <p className='blog-by' data-aos="fade-up">Check out my most recent blog 📜</p>
                    <div className='blog-body' data-aos="fade-up">
                        <h1 className='blog-title'><i class="fas fa-quote-left quote"></i> What is Lorem Ipsum?</h1>
                        <h1 className='blog-content'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            <hr color='orange' />

                            <p className='blog-read' onClick={readMore}>Read More <span>&#8594;</span></p>
                        </h1>
                    </div> */}