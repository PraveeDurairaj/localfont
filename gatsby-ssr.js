// import React from 'react';
// import './src/styles/home.css';
// export const onRenderBody = ({ setHeadComponents }) => {
//     setHeadComponents([
//         <style
//             key={'custom-fonts'}
//             dangerouslySetInnerHTML={{
//                 __html: `@font-face {
//                    font-family: "Plus Jakarta Sans", serif;
//                    font-weight: normal;
//                     font-style: normal;
//                     src: url('src/fonts/PlusJakartaSans-VariableFont_wght.ttf');
//                     font-display: swap;
//                        }
//                     body{
//                     font-family: "Plus Jakarta Sans", serif;
//                     }`
//             }}
//         />
        
//     ]);
// };

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