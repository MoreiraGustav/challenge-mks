"use client";
import styled from "styled-components";
import Header from "@/components/Header/header";
import CardProducts from "@/components/CardProducts/CardProducts";
import { SidebarProvider } from "@/contexts/SideBarContext";
import SideBarShoppingCart from "@/components/SideBarShoppingCart/SideBarShoppingCart";
import useProducts from "@/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCart } from "@/contexts/CartContext";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Adicione essa linha para permitir o empilhamento dos elementos filhos */
`;

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; /* Ajuste o z-index para garantir que o Header esteja sempre na frente */
`;

const ProductGrid = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px; /* Adicionando preenchimento em todos os lados */
  margin-top: 100px; /* Adiciona espaço entre o cabeçalho e os cards de produtos */
  max-width: 1200px; /* Definindo uma largura máxima para o grid */
  margin: 0 auto; /* Centralizando o grid na tela */
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* 1 card por linha em dispositivos móveis */
    padding: 10px; /* Reduzindo o preenchimento para telas menores */
    margin-top: 100px; /* Reduzindo a margem superior para telas menores */
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr); 
    margin-top: 100px;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); 
    margin-top: 100px;
  }
`;


export default function Home() {
  const { isLoading, data } = useProducts();
  console.log(data?.products);
  return (
    <SidebarProvider>
      <Wrapper>
        <FixedHeader>
          <Header />
        </FixedHeader>
        <SideBarShoppingCart />
        <ProductGrid>
          {isLoading ? (
            <p>Carregando...</p>
          ) : data && data.products ? (
            data.products.map((product: any) => (
              <CardProducts
                count={product.count}
                key={product.id}
                id={product.id}
                title={product.name}
                brand={product.brand}
                description={product.description}
                price={product.price}
                imageSrc={product.photo}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </ProductGrid>
      </Wrapper>
    </SidebarProvider>
  );
}

