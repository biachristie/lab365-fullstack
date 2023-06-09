import './Header.css'
import avatar from '../../assets/avatar.jpg'
import menu from '../../assets/menu.png'

function Header() {
    return(
        <div className='navbar'>
            <div className='navbar-links'>
                <ul>
                    <li>
                        <a href='https://mail.google.com/mail/&ogbl' aria-label='Gmail (abre uma nova guia)'>Gmail</a>
                    </li>
                    <li>
                        <a href='https://www.google.com.br/imghp?hl=pt-BR&ogbl' aria-label='Pesquisar imagens (abre uma nova guia)'>Imagens</a>
                    </li>
                </ul>
            </div>
            <div className='navbar-images'>
                <a href="#">
                    <img src={menu} alt='Imagem de menu' id='navbar-menu' />
                </a>
                <a href="#">
                    <img src={avatar} alt='Imagem de avatar' id='navbar-avatar' />
                </a>
            </div>
        </div>
    )
}

export default Header