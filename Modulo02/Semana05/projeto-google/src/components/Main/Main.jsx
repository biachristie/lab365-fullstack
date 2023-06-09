import Button from '../Button/Button'

import './Main.css'
import logo from '../../assets/google-logo.png'
import mglass from '../../assets/mglass.png'
import keyboard from '../../assets/keyboard.png'
import lens from '../../assets/lens.png'


function Main() {
    return(
        <div className='main'>
            <img src={logo} alt='Google logo' id='main-logo' />
            <div className='main-search'>
                <div className='main-input'>
                    <img src={mglass} alt='Imagem de lupa' id='main-mglass' />
                    <input type='text' id='main-input' />
                </div>
                <div className='main-img'>
                    <img src={keyboard} alt='Imagem de teclado' id='main-keyboard' />
                    <img src={lens} alt='Imagem de câmera' id='main-camera' />
                </div>
            </div>
            <div className='main-buttons'>
                <Button text='Pesquisa Google' />
                <Button text='Estou com sorte' />
            </div>
        </div>
    )
}

export default Main