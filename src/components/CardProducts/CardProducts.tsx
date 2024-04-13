import { FiShoppingBag } from "react-icons/fi";
import {
  Button,
  Description,
  Icon,
  Price,
  ProductImage,
  Title,
  TitleAndPrice,
  Wrapper,
} from "./CardProductsStyles";
import useSidebar from "@/contexts/SideBarContext";
import { CartProvider, useCart } from "@/contexts/CartContext";

interface ICardProductsProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  price?: number;
  description?: string;
  id?: number;
  brand?: string;
  count?: any
}

export default function CardProducts({
  imageSrc,
  imageAlt,
  title,
  price,
  description,
  id,
  count
}: ICardProductsProps) {
  const { isOpen, toggleSidebar } = useSidebar();
  const { cartItems, addToCart } = useCart();

  const handleComprar = () => {
    addToCart({ imageSrc, imageAlt, title, price, description, id });
  };

  return (
    <>
      <Wrapper>
        <ProductImage src={imageSrc} alt={imageAlt} />
        <TitleAndPrice>
          <Title>{title}</Title>
          <Price>R$ {price}</Price>
        </TitleAndPrice>
        <Description>{description}</Description>
        <Button onClick={handleComprar}>
          <Icon>
            <FiShoppingBag />
          </Icon>
          COMPRAR
        </Button>
      </Wrapper>
    </>
  );
}
