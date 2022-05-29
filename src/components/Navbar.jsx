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
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <div className='navbar-item'>
                    	(logo here?)
                    </div>

                    <a role="button" onClick={toggleBurgerMenu} className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`} ariaLabel="menu" ariaExpanded="false" dataTarget="socialsIcons">
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isMenuActive ? "is-active" : ""}`} id='socialsIcons'>
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
