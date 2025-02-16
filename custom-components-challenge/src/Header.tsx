import logo from './logo.svg';
import './App.css';

export default function Header() {
    return (
        <header className='Page-header'>
            <img src={logo} className="Page-logo" alt="logo" />
            <nav>
                <ul className='Page-nav-list'>
                    <li className='Page-nav-list-item'>Pricing</li>
                    <li className='Page-nav-list-item'>About</li>
                    <li className='Page-nav-list-item'>Contact</li>
                </ul>
            </nav>
        </header>
    );
}