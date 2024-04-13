import styled from "styled-components";

export const Wrapper = styled.section`
  width: 300px;
  height: 350px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

export const ProductImage = styled.img`
  width: 45%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 20px;
`;

export const TitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;

export const Price = styled.div`
  width: auto;
  font-weight: 700;
  background: #373737;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
`;
export const Description = styled.div`
  padding: 0 10px;
  margin-top: 20px;
`;
export const Button = styled.button`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 15px;
  background-color: #365aff;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  border: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

export const Icon = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
