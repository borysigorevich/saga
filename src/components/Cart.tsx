import React from 'react';
import styled from "styled-components";
import {useDrop} from 'react-dnd'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {addItem} from "../store/productsSlice";


type WrapperProps = {
    isOpen: boolean
}

type DrawerProps = {
    isOpen: boolean
}

const Wrapper = styled.div<WrapperProps>`
  backdrop-filter: ${props => props.isOpen ? 'blur(5px)' : 'blur(0)'};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  transition: backdrop-filter .3s;
  position: fixed;
  z-index: 100;
  inset: 0;
`

const CartIcon = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  color: #000;
  border-radius: 50%;
  border: 1px solid #000;
  display: grid;
  place-content: center;
  padding: 8px;
  cursor: pointer;
  pointer-events: auto;
`

const Drawer = styled.div<DrawerProps>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: #fff;
  border-left: 1px solid #000;
  transition: translate .3s;
  translate: ${props => props.isOpen ? '0' : '100%'};
`


export const Cart = () => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.products.cartItems)
    const [collectedProps, drop] = useDrop(() => ({
        accept: 'test',
        hover: () => {
            console.log('hover')
        },
        drop: (item, monitor) => {
            // @ts-ignore
            dispatch(addItem(item?.id))
        }
    }))
    const [open, setOpen] = React.useState(false)

    const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setOpen(true)
    }

    console.log(cartItems, 'cart items')

    return (
        <>
            {/*<CartIcon>*/}
            {/*    <AiOutlineShoppingCart/>*/}
            {/*</CartIcon>*/}
            <Wrapper isOpen={open} onClick={() => setOpen(false)}>
                <CartIcon onClick={handleOpen} ref={drop}>
                    <AiOutlineShoppingCart/>
                </CartIcon>
                <Drawer isOpen={open} onClick={(event) => {
                    event.stopPropagation()
                }}/>
            </Wrapper>
        </>
    );
};