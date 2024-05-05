import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import Products from "../data/products.json";


type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
          <div className="mr-auto fw-bold fs-5 d-flex justify-content-end mt-5">
            Total {" "}
            {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                    const item = Products.find(i => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity
                },0)
            )}
          </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};
