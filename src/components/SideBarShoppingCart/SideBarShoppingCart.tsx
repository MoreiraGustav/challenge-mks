import useSidebar from "@/contexts/SideBarContext";
import {
  CloseButton,
  FinishOrderButton,
  MessageAdd,
  SidebarHeader,
  SidebarNav,
  SidebarWrap,
  Title,
  Total,
  TotalTitle,
  TotalValue,
} from "./SideBarShoppingCartStyles";
import CardProductsCart from "../CardProductsCart/CardProductsCart";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

export default function SideBarShoppingCart() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalValue = cartItems.reduce((accumulator, currentItem: any) => {
      const price = parseFloat(currentItem.price) * currentItem.quantity;
      if (!isNaN(price)) {
        return accumulator + price;
      } else {
        return accumulator;
      }
    }, 0);
    setTotalPrice(totalValue);
  }, [cartItems]);

  return (
    <SidebarNav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 100 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      isOpen={isOpen}
    >
      <SidebarHeader>
        <Title>Carrinho de Compras</Title>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
      </SidebarHeader>
      <SidebarWrap>
        {cartItems.length > 0 ? (
          cartItems.map((product: any, index) => (
            <CardProductsCart
              key={index}
              onClick={() => removeFromCart(product.id)}
              imageSrc={product.imageSrc}
              price={product.price}
              title={product.title}
              incrementQuantity={() => increaseQuantity(index)}
              decrementQuantity={() => decreaseQuantity(index)}
              quantity={product.quantity}
            />
          ))
        ) : (
          <MessageAdd>Seu Carrinho está vazio!</MessageAdd>
        )}

        {cartItems.length > 0 && (
          <>
            <Total>
              <TotalTitle>Total:</TotalTitle>
              <TotalValue>R$ {totalPrice.toFixed(2)}</TotalValue>
            </Total>
            <FinishOrderButton>FINALIZAR PEDIDO</FinishOrderButton>
          </>
        )}
      </SidebarWrap>
    </SidebarNav>
  );
}
