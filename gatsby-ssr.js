import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <style
            key={'custom-fonts'}
            dangerouslySetInnerHTML={{
                __html: `@font-face {
                   font-family: "Plus Jakarta Sans", serif;
                   font-weight: normal;
                    font-style: normal;
                    src: url('src/fonts/PlusJakartaSans-VariableFont_wght.ttf') format('truetype');
                       }
                    body{
                    font-family: "Plus Jakarta Sans", serif;
                    }`
            }}
        />
        
    ]);
};