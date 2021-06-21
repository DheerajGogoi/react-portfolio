import React, { useState } from 'react';

const SubmitForm = (props) => {
    const initialFieldValues = {
        imageUrl: '',
        title: '',
        body: '',
        btn1: '',
        btn2: '',
        site: '',
        clink: '',
    }

    var [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
        alert('Submitting Please Wait !!');
    }

    return(

        <form onSubmit={handleFormSubmit}>   

            <div className="form-group">
                <input className="form-control" type="text" placeholder="Image URL" name='imageUrl' value={values.imageUrl} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Course Title" name='title' value={values.title} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="About Course" name='body' value={values.body} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Site Name" name='btn1' value={values.btn1} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="See Credentails" name='btn2' value={values.btn2} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Site Link" name='site' value={values.site} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Credentails Link" name='clink' value={values.clink} onChange={handleInputChange} />
            </div>
            

            <button style={{width: '100%'}} className="btn btn-primary" type="submit" >Submit</button>
        </form>
    );
}

export default SubmitForm;