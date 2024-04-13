import {
  Icon,
  NumberOfItems,
  ShoppingCartButton,
  ShoppingCartDiv,
  SubTitle,
  Title,
  TitleAndSubTitle,
  Wrapper,
} from "./HeaderStyles";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "@/contexts/CartContext";
import useSidebar from "@/contexts/SideBarContext"; // Importe useSidebar aqui

interface IShoppingCartProps {
  quantity?: number;
}

export default function Header({ quantity }: IShoppingCartProps) {
  const { toggleSidebar } = useSidebar();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, currentItem) => {
    if (currentItem.quantity !== undefined) { 
      return total + currentItem.quantity;
    }
    return total;
  }, 0);
  

  return (
    <Wrapper>
      <TitleAndSubTitle>
        <Title>MKS</Title>
        <SubTitle>sistemas</SubTitle>
      </TitleAndSubTitle>
      <ShoppingCartDiv>
        <ShoppingCartButton onClick={toggleSidebar}>
          <Icon>
            <MdOutlineShoppingCart />
            <NumberOfItems>{cartItems.length}</NumberOfItems>
          </Icon>
        </ShoppingCartButton>
      </ShoppingCartDiv>
    </Wrapper>
  );
}
