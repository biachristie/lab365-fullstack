import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'

import './Card.css'

import { ProductModalContext } from '../../contexts/ProductModalContext'

function Card() {
    const cards = [
        {
            id: 0,
            photo: '../../../public/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO1',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productInfoList: ['LISTA', 'LISTA', 'LISTA', 'LISTA'],
            productSpecList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']
        },
        {
            id: 1,
            photo: '../../../public/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO2',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productInfoList: ['LISTA', 'LISTA', 'LISTA', 'LISTA'],
            productSpecList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']        },
        {
            id: 2,
            photo: '../../../public/photo.jpg',
            photoDescription: 'DESCRIÇÃO DA FOTO',
            price: 'PREÇO',
            productName: 'PRODUTO3',
            productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi facilis nemo aperiam nobis porro asperiores fuga obcaecati atque sed id ratione perspiciatis quidem exercitationem, aspernatur odio sapiente illum corporis.',
            productInfoList: ['LISTA', 'LISTA', 'LISTA', 'LISTA'],
            productSpecList: ['LISTA', 'LISTA', 'LISTA', 'LISTA']
        },
    ]

    const { setShow, setData } = useContext(ProductModalContext)

    const handleShowModal = (cardItem) => {
        setShow(true)
        setData({
            photo: cardItem.photo,
            photoDescription: cardItem.photoDescription,
            price: cardItem.price,
            productName: cardItem.productName,
            productDescription: cardItem.productDescription,
            productInfoList: cardItem.productInfoList,
            productSpecList: cardItem.productSpecList,
        })
    }
    
    const listItems = (listItem, id) => {
        return <li key={ id }>{ listItem }</li>
    }
    
    const renderCardItem = (cardItem) => {
        return (
            <Fragment key={ cardItem.id }>
                <div className="card">
                    <div className="card-img">
                        <img src={ cardItem.photo } alt={ cardItem.photoDescription } />
                        <span>R$ { cardItem.price }</span>
                    </div>
                    <div className="card-product">
                        <div className='card-product-description'>
                            <h3>{ cardItem.productName }</h3>
                            <p>{ cardItem.productDescription }</p>
                        </div>
                        <div className='card-product-list'>
                            <ul>
                                { cardItem.productInfoList.map(listItems) }
                            </ul>
                            <button onClick={ () => handleShowModal(cardItem) }>Mais</button>
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