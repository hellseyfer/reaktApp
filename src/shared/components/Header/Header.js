import './Header.css';
import style from './Header.module.css';
import logo from '../../../assets/logo192.png';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header >
            <nav className={style.navbar}>
                <Link style={{ fontSize: '2em'}} to="/">My App</Link>
                <div className={style.center}/>
                {/* <ul>
                    <li style={{ backgroundColor: 'blue' }}>About</li>
                </ul> */}
                 <img style={{ maxWidth: '3.3rem'}} src={logo} alt='logo'/>
            </nav>
        </header>
    )
}

export default Header;