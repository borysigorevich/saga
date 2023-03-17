import React from 'react';
import styled from "styled-components";
import {BsFillCartFill} from 'react-icons/bs'

type CardProps = {
    img: string
    title: string
    brand: string
    category: string
    price: string
    discountPercentage: string
}

type WrapperProps = {
    img: string
}

const Wrapper = styled.div<WrapperProps>`
  min-width: 300px;
  height: 400px;
  box-shadow: 0 0 5px #000;
  border-radius: 4px;
  position: relative;

  background-image: url("${props => props.img}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-color .3s;
`


export const Top = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  position: relative;
  opacity: 0;
  transition: opacity .3s, translate .3s;
  translate: 0 40px;

  :before {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 5px;
    height: 2px;
    background-color: #fff;
    transition: width .5s;
    transition-delay: .1s;
  }
`

export const Middle = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  transition: translate .3s;

  p:first-of-type {
    text-decoration: line-through;
    color: rgba(161, 158, 158, 0.9);
  }

  translate: 0 80px;
  //line-height: 10px;
`

export const Bottom = styled.button`

  padding-block: 8px;
  padding-inline: 24px;
  border-radius: 4px;
  border: none;
  position: relative;
  display: flex;
  gap: 10px;

  transition: translate .4s, opacity .4s;
  //transition-delay: .2s;
  translate: 0 90px;
  opacity: 0;
  background-color: rgba(255, 255, 255, .1);
  cursor: pointer;

  .icon {
    position: relative;
  }
`

const BlackLayer = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: background-color .3s, opacity .3s;
  padding-left: 16px;
  padding-top: 80px;

  color: #fef5df;

  :hover {
    background-color: rgba(77, 77, 77, .9);
    opacity: 1;
  }

  :hover ${Top} {
    opacity: 1;
    translate: 0;

    :before {
      width: 70px;
    }
  }

  :hover ${Middle} {
    translate: 0;
  }

  :hover ${Bottom} {
    translate: 0 30px;
    opacity: 1;
    transition-delay: .1s;
  }
`

export const Card = ({img, title, category, brand, price, discountPercentage}: CardProps) => {

    const onwWordLeftBrand = brand.match(/[a-z]*/gi)?.[0]
    const oneWordLeftTitle = title.match(/[a-z]*/gi)?.[0]

    const convertedPrice = Number(price)
    const oldPrice = ((convertedPrice * Number(discountPercentage) / 100) + convertedPrice).toFixed(2)

    return (
        <Wrapper img={img}>
            <BlackLayer>
                <Top>
                    <p>{category}</p>
                    <p>{oneWordLeftTitle}</p>
                </Top>

                <Middle>
                    <p>${oldPrice}</p>
                    <p>${convertedPrice}</p>
                </Middle>

                <Bottom>
                    <div className='icon'>
                        <BsFillCartFill/>
                    </div>
                    Add to cart
                </Bottom>
            </BlackLayer>
        </Wrapper>
    );
};