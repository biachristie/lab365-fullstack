import { Fragment } from 'react'

import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'
import youtubeIcon from '../../assets/youtube-icon.png'

import './Footer.css'

function Footer() {
    const menu = [
        {
            id: 0,
            label: 'Produtos',
            path: '#',
        },
        {
            id: 1,
            label: 'Contato',
            path: '#',
        },
        {
            id: 2,
            label: 'Termos e Condições',
            path: '#',
        },
    ]
    
    const renderMenuItem = (menuItem) => {
        return (
            <Fragment key={ menuItem.id }>
                <a href={ menuItem.path }>{ menuItem.label }</a>
            </Fragment>
        )
    }

    return(
        <div className="footer">
            <div className='footer-info'>
                <div className='footer-info-logo'>
                    <h1>BabyHug</h1>
                </div>
                <div className='footer-info-contact'>
                    <div className='contact-title'>
                        <h2>contato</h2>
                    </div>
                    <div className='contact-contact'>
                        <span>+55 21 9999-9999</span>
                        <span>contato@suaempresa.com</span>
                    </div>
                    <div className='contact-address'>
                        <span>Rua Galáxia, 00 - Via Láctea</span>
                        <span>Universo - UN</span>
                    </div>
                    <div className='contact-social'>
                        <a href="#">
                            <img src={ instagramIcon } alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={ facebookIcon } alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={ youtubeIcon } alt="YouTube" />
                        </a>
                    </div>
                </div>
                <div className='footer-info-info'>
                    <div className="info-title">
                        <h2>informação</h2>
                    </div>
                    <div className="info-menu">
                        { menu.map(renderMenuItem) }
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>BabyHug© Alguns direitos reservados.</span>
                <a href="https://br.freepik.com/fotos-gratis/conjunto-infantil-elegante-de-malha-artesanal-com-diversos-acessorios-no-estilo-boho-vista-superior_9507803.htm?query=foto roupa infantil malha">Imagem de pvproductions no Freepik.</a>
            </div>
        </div>
    )
}

export default Footer