import Navbar from './components/Navigation/Navbar';
import NavItem from './components/Navigation/NavItem';
import DropdownMenu from './components/Navigation/DropdownMenu';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

import './index.css';

const App = () => {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />} />
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<MessengerIcon />} />

            <NavItem icon={<CaretIcon />}>
                <DropdownMenu />
            </NavItem>
        </Navbar>
    );
};

export default App;
