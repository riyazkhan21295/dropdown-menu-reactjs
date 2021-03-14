import React, { useState } from 'react';

const NavItem = props => {
    const [open, setOpen] = useState(false);

    return (
        <li className='navbar__nav__item'>
            <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
};

export default NavItem;
