import { Col, Row } from "react-bootstrap";
import products from "../data/products.json";
import { ProductDetails } from "../components/ProductDetails";

export const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {products.map((product) => (
        <Col key={product.id}><ProductDetails {...product} /></Col>
      ))}
    </Row>
    </>
  );
};
