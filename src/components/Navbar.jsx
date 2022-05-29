import React from 'react';

const Navbar = () => {
	function toggleBurgerMenu() {
		document.querySelector('.navbar-menu').classList.toggle('is-active');
		document.querySelector('.navbar-burger').classList.toggle('is-active');
	}

    return (
        <section className='section' id='navbarSection'>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <div className='navbar-item'>
                    	(logo here?)
                    </div>

                    <a role="button" onClick={toggleBurgerMenu} className="navbar-burger" ariaLabel="menu" ariaExpanded="false" dataTarget="socialsIcons">
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                        <span ariaHidden="true"></span>
                    </a>
                </div>

                <div className='navbar-menu' id='socialsIcons'>
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
