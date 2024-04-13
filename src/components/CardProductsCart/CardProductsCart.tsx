import styled from "styled-components";
import { useState } from "react";
import {
  CloseButton,
  Price,
  ProductImage,
  QuantityButton,
  QuantityControl,
  QuantityControlMain,
  QuantityDivider,
  QuantityText,
  QuantityTitle,
  Title,
  Wrapper,
} from "./CardProductsCartStyles";

interface ICardProductsCartProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  price?: any;
  onClick: () => void;
  count?: number;
  incrementQuantity?: () => void;
  decrementQuantity?: () => void;
  quantity: any;
}
export default function CardProductsCart({
  imageAlt,
  imageSrc,
  title,
  price,
  onClick,
  incrementQuantity,
  decrementQuantity,
  quantity,
}: ICardProductsCartProps) {
  return (
    <>
      <Wrapper>
        <ProductImage src={imageSrc} alt={imageAlt} />
        <Title>{title}</Title>
        <QuantityControlMain>
          <QuantityTitle>Qtd:</QuantityTitle>
          <QuantityControl>
            <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
            <QuantityDivider>|</QuantityDivider>
            <QuantityText>{quantity}</QuantityText>
            <QuantityDivider>|</QuantityDivider>
            <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
          </QuantityControl>
        </QuantityControlMain>
        <Price>R$ {price}</Price>
        <CloseButton onClick={onClick}>X</CloseButton>
      </Wrapper>
    </>
  );
}
