import React from 'react';

const Blog = () => {
    return (
        <div>
            <h5>What is CORS ?</h5>
            <p>Ans : CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>

            <h5>Why are you using firebase ? What other options do you have to implement authentication</h5>
            <p>Ans:The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. </p>
            <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            <h3>How does the private route work</h3>
            <p>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

            <h5>What is node ? How does node work</h5>
            <p>Ans: Node.js is an open source server environment.Node.js is free.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc).Node.js uses JavaScript on the server</p>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
        </div>
    );
};

export default Blog;