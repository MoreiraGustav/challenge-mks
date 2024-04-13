import { motion } from "framer-motion";
import styled from "styled-components";

export const SidebarNav = styled(motion.nav)<{ isOpen: boolean }>`
  background: #0f52ba;
  width: 90%; /* Cobrir 80% da tela em telas pequenas */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 101;
  padding-top: 20px;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0px 0px 20px rgba(0, 0, 0, 0.2)" : "none"};

  @media (min-width: 768px) {
    width: 60%; /* Reduzir para 60% da tela em tablets */
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 0;
  padding-left: 20px;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* Posiciona a div Total na parte inferior */
  padding-top: 20px;
`;

export const TotalTitle = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
  padding-left: 20px;
`;

export const TotalValue = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
  padding-right: 20px;
`;

export const MessageAdd = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 200px;
`;
