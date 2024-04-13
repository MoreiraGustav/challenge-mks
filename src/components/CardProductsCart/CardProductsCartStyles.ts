import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 16px;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    margin: 0 20px 0 15px;
    width: 100px;
    font-size: 18px;
  }
`;

export const QuantityControlMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const QuantityTitle = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
align-self: start;
  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  padding: 5px 0;
  border: solid 1px gray;
  border-radius: 5px;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const QuantityButton = styled.button`
  border: none;
  width: 25px;
  height: 25px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const QuantityText = styled.span`
  display: flex;
  justify-content: center;
  width: 30px;
`;

export const QuantityDivider = styled.span`
  align-items: center;
  margin: 0;
`;

export const Price = styled.h1`
  margin: 0 0 0 10px;
`;

export const CloseButton = styled.button`
  background: #000; 
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;
