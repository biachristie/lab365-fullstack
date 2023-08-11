const Get = () => {
    const fecthProduct = async() => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        return data
    }

    return fecthProduct()
}

const Show = (id) => {
    const fecthProduct = async() => {
        const response = await fetch(`https://dummyjson.com/products/${ id }`)
        const data = await response.json()
        return data
    }

    return fecthProduct()
}

const Create = (data) => {
    const fecthProduct = async() => {
        const response = await fetch('https://dummyjson.com/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data )
        })
        
        return response
    }

    return fecthProduct()
}

const Update = (id, data) => {
    const fecthProduct = async() => {
        const response = await fetch(`https://dummyjson.com/products/${ id }`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data )
        })

        return response
    }

    return fecthProduct()
}

const Delete = (id) => {
    const fecthProduct = async() => {
        const response = await fetch(`https://dummyjson.com/products/${ id }`, {
            method: 'DELETE',
        })

        return response
    }

    return fecthProduct()
}

export const ProductService = {
    Get,
    Show,
    Create,
    Update,
    Delete
}