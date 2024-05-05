import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";
import { Duplex } from "stream";
import { ReactNode } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ProductDetailsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const ProductDetails = ({
  id,
  name,
  price,
  imgUrl,
}: ProductDetailsProps) => {
  const {getQuantity,increaseQuantity,decreaseQuantity,removeFormCart} = useShoppingCart()
  const quantity = getQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="260px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="mr-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>{increaseQuantity(id)}}>+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "10px" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "10px" }}
              >
                <Button onClick={()=>{decreaseQuantity(id)}}>-</Button>
                <div className="fs-3">
                  <span>{quantity}</span>
                </div>
                <Button onClick={()=>{increaseQuantity(id)}}>+</Button>
              </div>
              <Button variant="danger" size="sm"  onClick={()=>{removeFormCart(id)}}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
