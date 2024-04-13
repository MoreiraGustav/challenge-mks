import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100px;
  background: #0F52BA;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-size: 40px;
  font-weight: 600;
  display: flex;
  letter-spacing: 2px;
`;

export const SubTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  align-self: end;
  padding-bottom: 28px;
`;

export const TitleAndSubTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const ShoppingCartDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const ShoppingCartButton = styled.button`
  background: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100px; /* Ajuste conforme necessário */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
`;

export const NumberOfItems = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
