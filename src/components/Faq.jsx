import React from 'react';
import Accordin from './comp/Accordin';

function Faq() {
    return(
        <div className='services'>
            <p className='faq-heading'>Ser<span style={{color: 'red'}}>vic</span>es</p>
            <Accordin />
        </div>
    );
}

export default Faq;