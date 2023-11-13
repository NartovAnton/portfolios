import React from "react";
import headers from './Header.module.css';

const Header = () => {
    return (

        <header className={headers.header}>
            <div>
                <img src="https://conversations.marketing-partners.com/wp-content/uploads/2012/09/Melbourne_logo_590.jpg" />
            </div>
        </header>
    )
}

export default Header;