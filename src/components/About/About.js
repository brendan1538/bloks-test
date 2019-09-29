import React from 'react';

export default class About extends React.Component {
    render() {
        return( 
        <section className="about" id="about">
            <div className="text-container" id="text-container">
                <h1 className="heading">Brendan Laughlin</h1>
                <p className="subhead">I'm a Full-Stack Developer focused on building clean, scalable software and web apps.</p>
            </div>
        </section>
        );
    }
}