import React, { useState } from 'react';
import '../styles/Child.css';
const Selection = (props) => {
    const [bg,setBg]=useState({background:''});
    const hanldeClick=()=>{
        props.applyColor(setBg);
    };
    return (
        <div className='fix-box' style={bg} onClick={hanldeClick}>
            <h2 className='subheading'>Selection</h2>
        </div>
    );
};

export default Selection;