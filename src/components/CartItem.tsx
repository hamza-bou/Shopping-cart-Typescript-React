import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Products from "../data/products.json";
import { spawn } from "child_process";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFormCart } = useShoppingCart();
  const item = Products.find((p) => p.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit:"cover" }}
      />
      <div className="me-auto">
        <div>
            {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize:"14px"}}>x{quantity}</span> }
        </div>
        <div className="text-muted" style={{fontSize:"15px"}}>{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFormCart(item.id)}>x</Button>
    </Stack>
  );
};
