import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

const DropdownMenu = props => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    const calculateHeight = element => {
        const height = element.offsetHeight;
        setMenuHeight(height);
    };

    return (
        <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
            <MainMenuItems activeMenu={activeMenu} setActiveMenu={setActiveMenu} calculateHeight={calculateHeight} />
            <SettingsSubMenuItems
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calculateHeight={calculateHeight}
            />
            <AnimalsSubMenuItems
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calculateHeight={calculateHeight}
            />
        </div>
    );
};

const MainMenuItems = props => {
    return (
        <CSSTransition
            in={props.activeMenu === 'main'}
            unmountOnExit
            timeout={500}
            classNames='dropdown__menu--primary'
            onEnter={props.calculateHeight}>
            <div className='dropdown__menu'>
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    setActiveMenu={props.setActiveMenu}
                    goToMenu='settings'>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem leftIcon='🦧' setActiveMenu={props.setActiveMenu} goToMenu='animals'>
                    Animals
                </DropdownMenuItem>
            </div>
        </CSSTransition>
    );
};

const SettingsSubMenuItems = props => {
    return (
        <CSSTransition
            in={props.activeMenu === 'settings'}
            unmountOnExit
            timeout={500}
            classNames='dropdown__menu--secondary'
            onEnter={props.calculateHeight}>
            <div className='dropdown__menu'>
                <DropdownMenuItem leftIcon={<ArrowIcon />} setActiveMenu={props.setActiveMenu} goToMenu='main' />
                <DropdownMenuItem>Settings</DropdownMenuItem>
            </div>
        </CSSTransition>
    );
};

const AnimalsSubMenuItems = props => {
    return (
        <CSSTransition
            in={props.activeMenu === 'animals'}
            unmountOnExit
            timeout={500}
            classNames='dropdown__menu--secondary'
            onEnter={props.calculateHeight}>
            <div className='dropdown__menu'>
                <DropdownMenuItem leftIcon={<ArrowIcon />} setActiveMenu={props.setActiveMenu} goToMenu='main'>
                    <h2>Animals</h2>
                </DropdownMenuItem>
                <DropdownMenuItem leftIcon='🦘'>Kangaroo</DropdownMenuItem>
                <DropdownMenuItem leftIcon='🐸'>Frog</DropdownMenuItem>
                <DropdownMenuItem leftIcon='🦋'>Horse?</DropdownMenuItem>
                <DropdownMenuItem leftIcon='🦔'>Hedgehog</DropdownMenuItem>
            </div>
        </CSSTransition>
    );
};

const DropdownMenuItem = props => {
    return (
        <a
            href='#'
            className='dropdown__menu__item'
            onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className='icon-button'>{props.leftIcon}</span>
            {props.children}
            <span className='icon-right'>{props.rightIcon}</span>
        </a>
    );
};

export default DropdownMenu;
