import { Fragment } from 'react'

import './Header.css'
import logo from '../../assets/yarn-ball.jpg'

function Header({ title }) {
    const menu = [
        {
            id: 0,
            label: 'produtos',
            path: '#',
        },
        {
            id: 1,
            label: 'contato',
            path: '#',
        },
    ]
    
    const renderMenuItem = (menuItem) => {
        return (
            <Fragment key={ menuItem.id }>
                <li className="nav-item">
                    <a className="nav-link" href={ menuItem.path }>{ menuItem.label }</a>
                </li>
            </Fragment>
        )
    }

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={ logo } alt="PetCraft Logo" id="navbar-logo" />
                <a href="#" id="navbar-title">{ title }</a>
            </div>
            <div className="navbar-nav">
                <ul className="nav-list">
                    { menu.map(renderMenuItem) }
                </ul>
            </div>
        </nav>
    )
}

export default Header