import logo from '../../assets/img/logo.svg';
import './style.scss';


function Header() {
    return (
        <header>
            <img src={logo} alt="logo"/>
                <h1>Ds-Meta</h1>
                <p>Desnvolvido por @andreluiscelis na Semana Spring React</p>
        </header>
    )
}
export default Header;