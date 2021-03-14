const Navbar = props => {
    return (
        <nav className='navbar'>
            <ul className='navbar__nav'>{props.children}</ul>
        </nav>
    );
};

export default Navbar;
