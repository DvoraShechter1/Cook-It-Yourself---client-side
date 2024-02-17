export const setCurrentProduct = (product) => {
    return { type: 'SET_CURRENT_PRODUCT', payload: product }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const deleteProduct = (id) => {
    return { type: 'DELETE_PRODUCT', payload: id }
}