import { Fragment } from 'react'
import { Link } from "react-router-dom";

import './Header.css'
import logo from '../../assets/yarn-ball.jpg'

function Header({ title }) {
    const menu = [
        {
            id: 0,
            label: 'produtos',
            path: '/product',
        },
        {
            id: 1,
            label: 'contato',
            path: '/contact',
        },
        {
            id: 2,
            label: 'faq',
            path: '/faq',
        },
    ]
    
    const renderMenuItem = (menuItem) => {
        return (
            <Fragment key={ menuItem.id }>
                <li className="nav-item">
                    <Link className="nav-link" to={ menuItem.path }>{ menuItem.label }</Link>
                </li>
            </Fragment>
        )
    }

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={ logo } alt="PetCraft Logo" id="navbar-logo" />
                <Link to="/" id="navbar-title">{ title }</Link>
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