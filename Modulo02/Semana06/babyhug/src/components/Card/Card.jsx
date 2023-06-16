import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Card.css'
import photo from '../../assets/photo.jpg'

function Card() {
    const cards = [
        {
            id: 0,
            photo: '../../assets/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']
        },
        {
            id: 1,
            photo: '../../assets/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']
        },
        {
            id: 2,
            photo: '../../assets/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']
        },
    ]

    const listItems = (listItem, id) => {
        return <li key={ id }>{ listItem }</li>
    }
    
    const renderCardItem = (cardItem) => {
        return (
            <Fragment key={ cardItem.id }>
                <div className="card">
                    <div className="card-img">
                        <img src={ photo } alt={ cardItem.photoDescription } />
                        <span>R$ { cardItem.price }</span>
                    </div>
                    <div className="card-product">
                        <div className='card-product-description'>
                            <h3>{ cardItem.productName }</h3>
                            <p>{ cardItem.productDescription }</p>
                        </div>
                        <div className='card-product-list'>
                            <ul>
                                { cardItem.productList.map(listItems) }
                            </ul>
                            <button>Adicione ao carrinho</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return(
            <React.Fragment>
                { cards.map(renderCardItem) }
            </React.Fragment>
    )
}

Card.propTypes = {
    cards: PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        productDescription: PropTypes.string.isRequired,
        productList: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Card