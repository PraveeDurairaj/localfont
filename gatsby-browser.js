import React from 'react';
import './src/styles/home.css';

const wrapPageElement = ({element}) => {
  return (
    <div className='test' style={{ 'fontFamily': "Plus Jakarta Sans, sans-serif" }}>
      {element}
    </div>
  )
}

export default wrapPageElement
