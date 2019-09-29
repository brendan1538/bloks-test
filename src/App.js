import React from 'react';
import { connect } from 'react-redux';

import "./bootstrap/css/bootstrap.css";
import "./bootstrap/css/bootstrap-theme.css";

// Component imports
import TopNav from './components/TopNav/TopNav';
import About from './components/About/About';
import ProjectCollection from './components/Projects/ProjectCollection';
import ContactForm from './components/ContactForm/ContactForm';

// Images
import logo from './resources/logo.png';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageId: this.props.pageId
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        window.addEventListener("scroll", () => {
            let offset = window.pageYOffset;
            const projectsContainer = document.getElementById("project-collection");
            const textContainer = document.getElementById("text-container");

            const aboutBg = document.getElementById("about");
            aboutBg.style.backgroundPositionY = offset * 0.2 + "px";

            textContainer.style.top = 15 - (offset*0.07) + "%";
            textContainer.style.opacity = 1 - (offset*0.01);

            
            projectsContainer.style.top = offset * -0.3 + "px";
        })
    }

    render() {
        return (
            <section id="main-content">
                <img src={logo} alt="Brendan Laughlin development logo" id="logo" />
                <TopNav />

                <About />
                <ProjectCollection />

                <ContactForm />
            </section>
        )
    }
}

const mapState = state => {
    return {
        pageId: state.pageId
    }
}

export default connect(mapState)(App);