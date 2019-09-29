import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import { activePage } from '../../redux/actions/actions';

import './TopNav.css';

const TopNav = (props) => {


    const { pageId } = props;
    const [state, setState] = useState({
        isDesktop: false,
        active: pageId,
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
                        activePage(1);
                    }}
                    className={`nav-link ${activePage === 1 && 'active'}`}
                    >
                        About
                    </h2>
                </li>
                <li>
                    <h2
                    onClick={() => {
                        scroll.scrollTo(window.innerHeight * (state.isDesktop ? 0.7 : 0.48));
                        activePage(2);
                    }}
                    className={`nav-link ${activePage === 2 && 'active'}`}
                    >
                        Projects
                    </h2>
                </li>
                <li>
                    <h2
                        onClick={() => {
                            scroll.scrollTo(window.innerHeight * (state.isDesktop ? 1.7 : 1.6));
                            activePage(3);
                        }}
                        className={`nav-link ${activePage === 3 && 'active'}`}
                    >
                        Contact
                    </h2>
                </li>
            </ul>
        </section>
    )
}
const mapDispatchToProps = dispatch => {
	return {
		activePage: (id) => dispatch(activePage(id))
	};
};

export default connect(mapDispatchToProps)(TopNav);