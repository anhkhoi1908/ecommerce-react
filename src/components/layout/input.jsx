import React from 'react';
import {Input} from 'antd';

const InputComponent = ({size, placeholder, bgInput, styleInput, ...rests}) => {
    return (
        <div className='col-10'>
            <Input 
                size={size} 
                placeholder={placeholder} 
                style={styleInput}
                {...rests}/>
        </div>
    );
};

export default InputComponent;