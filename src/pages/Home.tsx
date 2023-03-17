import React from 'react';
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {sagaActions} from "../saga/sagaActions";
import {Card} from "../components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-block: 24px;
  background-color: #FEF5DF;

  font-family: "Nunito", sans-serif;
`

export const Container = styled.div`
  max-width: 1320px;
  margin-inline: auto;
  display: grid;
  padding-inline: 16px;
  justify-content: space-between;
  
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`

export const Home = () => {
    const products = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch({type: sagaActions.FETCH_PRODUCTS_SAGA})
    }, [])

    return (
        <Wrapper>
            <Container>
                {products.products.map(product => (
                <Card
                    key={product.id}
                    img={product.thumbnail}
                    title={product.title}
                    brand={product.brand}
                    category={product.category}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                />
            ))}
            </Container>
        </Wrapper>
    );
};