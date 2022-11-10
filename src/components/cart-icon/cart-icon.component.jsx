import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


const CartIcon =() => { 
    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return( 
        <CartIconContainer onClick={toggleIsCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon