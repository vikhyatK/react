import logo from '../images/logo.svg';

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src={logo} className='App-logo' alt='React Logo'></img>
                    <span>ReactFact</span>
                </nav>
            </header>
        </>
    );
}