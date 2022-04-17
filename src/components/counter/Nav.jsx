import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="Navbar">
            <h3 className="navLogo">Logo</h3>
            <ul className="navlist m-3">
                
                <li> 
                <Link to="/" className='linkstyle' > Home</Link>                
                </li>
                <li>
                    <Link to="/about" className='linkstyle'> About </Link>
                      </li>
                <li>
                    <Link to="/shop" className='linkstyle'>shop </Link>
                </li>
                <li>
                    <Link to="/counter" className='linkstyle '>counter </Link>
                </li>
                <li>
                <Link to="/todolist" className='linkstyle '>To DO list </Link>
                </li>
            </ul>

        </div>

    );

}
export default Nav;