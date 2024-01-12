import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import { routes } from './routes';
import { Suspense } from 'react';



export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}> {/* me ayuda a poner un componenete de carga antes de renderizar los componenete de mi aplicacion */}
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={reactLogo} alt='logo' />
                        <ul>
                            {routes.map(({ to, name }) => (<li key={to}>{/* no uso return ya que hago el return implicito () => () y desestructuro las props de ruta*/}
                                <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                            </li>))

                            }
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(({ Component, path, to }) => {
                            return (
                                <Route path={path} key={to} element={<Component />} />
                            )
                        })}
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>


                </div>
            </BrowserRouter>
        </Suspense>
    )
}
