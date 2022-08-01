import './Header.css';
import style from './Header.module.css';
import logo from '../../../assets/logo192.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
const Header = () => {
    const { tItems } = useContext(CartContext);

    return (
        <header >
            <nav className={style.navbar}>
                <Link style={{ fontSize: '2em'}} to="/">My App</Link>
                <div className={style.center}/>
                {/* <ul>
                    <li style={{ backgroundColor: 'blue' }}>About</li>
                </ul> */}
                <Link style={{ fontSize: '1.2em', margin: '0 0.5rem'}} to="/form">Form</Link>
                <Link style={{ fontSize: '1.2em', margin: '0 0.5rem'}} to="/cart">Cart ({tItems})</Link>

                 <img style={{ maxWidth: '3.3rem'}} src={logo} alt='logo'/>
            </nav>
        </header>
    )
}

export default Header;