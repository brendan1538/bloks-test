import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './topnav.scss';

const TopNav = (props) => {
	const [state, setState] = useState({
		isDesktop: window.innerWidth > 768,
		active: 1,
	});

	useEffect(() => {
		window.addEventListener('resize', setState({isDesktop: window.innerWidth > 768}));
	}, []);

	return(
		<section className="top-nav">
			<ul>
				<li>
					<h2
					onClick={() => {
						scroll.scrollTo(window.innerHeight * 0);
					}}
					className={`nav-link ${state.active === 1 && 'active'}`}
					>
						About
					</h2>
				</li>
				<li>
					<h2
					onClick={() => {
						scroll.scrollTo(window.innerHeight * (state.isDesktop ? 1.0 : 0.7));
					}}
					className={`nav-link ${state.active === 2 && 'active'}`}
					>
						Projects
					</h2>
				</li>
				<li>
					<h2
						onClick={() => {
							scroll.scrollTo(window.innerHeight * (state.isDesktop ? 3.0 : 1.6));
						}}
						className={`nav-link ${state.active === 3 && 'active'}`}
					>
						Contact
					</h2>
				</li>
			</ul>
		</section>
	)
}

export default TopNav;