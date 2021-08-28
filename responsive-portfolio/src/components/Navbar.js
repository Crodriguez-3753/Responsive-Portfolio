import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fa fa-typo3'/>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'das fa-times' : 'fas fa-bars'} />
                </div>

            </nav>
        </>
    )
}

export default Navbar
