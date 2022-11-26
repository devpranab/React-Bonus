import React from 'react';

const Storage = () => {
    return (
        <div>
            <h1>How localStorage and sessionStorage works</h1>
            <p>Inspect element + Application tab + Storage</p>
            <p>https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage</p>
            <h3>how localStorage - for long time</h3>
            <h3>sessionStorage works - for limited time</h3>
            <h1>Different between localStorage and sessionStorage:</h1>
            <h2>Try out:</h2>
            <p>sessionStorage.setItem("myCat", "Tom")</p>
            <p>sessionStorage.getItem("myCat")</p>
        </div>
    );
};

export default Storage;

// git add .
// git commit -m "how localStorage and sessionStorage works"
// git push -u origin main