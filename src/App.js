import React, { useState, useEffect, useRef } from 'react';

// Component imports
import TopNav from './components/TopNav';
import About from './components/About';
import ProjectCollection from './components/Projects';
import Contact from './components/Contact';

// Images
import logo from './resources/logo.png';

import './App.scss';

const App = (props) => {
	const [state, setState] = useState({ pageId: props.pageId });

	const handleScroll = () => {
		window.addEventListener("scroll", () => {
			let offset = window.pageYOffset;
			const textContainer = document.getElementById("text-container");
	
			const aboutBg = document.getElementById("about");
			aboutBg.style.backgroundPositionY = offset * 0.2 + "px";
	
			textContainer.style.top = 15 - (offset*0.07) + "%";
			textContainer.style.opacity = 1 - (offset*0.01);
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<section id="main-content">
			<img src={logo} alt="Brendan Laughlin development logo" id="logo" />
			<TopNav />

			<About />
			<ProjectCollection />

			<Contact />
		</section>
	)
}

export default App;