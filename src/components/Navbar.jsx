import React, { useState } from 'react';

const Navbar = () => {
	const [isMenuActive, setMenuState] = useState(false);
	const [isBurgerActive, setBurgerState] = useState(false);

	function toggleBurgerMenu() {
		setMenuState(!isMenuActive);
		setBurgerState(!isBurgerActive);
	}

    return (
        <section className='section' id='navbarSection'>
            <nav className='navbar is-transparent' role='navigation'>
                <div className='navbar-brand'>
                    <div className='navbar-item'>
                    	(Logo Here)
                    </div>

                    <a role="button" onClick={toggleBurgerMenu} className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="socialsIcons">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isMenuActive ? "is-active" : ""}`} id='socialsIcons'>
                    <div className='navbar-start'>
                        <a className='navbar-item'>
                            Home
                        </a>
                        <a className='navbar-item'>
                            About Me
                        </a>
                        <a className='navbar-item'>
                            Work Experience
                        </a>
                        <a className='navbar-item'>
                            Projects
                        </a>
                    </div>

                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <a className= 'button' href='/'>
                                    GitHub
                                </a>
                                <a className= 'button' href='/'>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
      </section>
    )
}

export default Navbar;
