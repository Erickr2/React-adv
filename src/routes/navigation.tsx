
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={reactLogo} alt='logo' />
                    <ul>
                        <li>
                            <NavLink to='/' className={({isActive}) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={ <h1>About page</h1> } />
                    <Route path='/users' element={ <h1>Users</h1>} />
                    <Route path='/' element={ <h1>Home</h1>} />
                </Routes>


            </div>
        </BrowserRouter>
    )
}