import { Offcanvas, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/currency";
import CartItem from "./CartItem";
import storeItems from "../../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu cesta</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
            , envío gratuito.
          </div>{" "}
          <Link to="/checkout">
            <input
              type="button"
              value="CHECKOUT"
              onClick={closeCart}
              style={{
                backgroundColor: "#212529",
                color: "#fff",
                fontWeight: "600",
                width: "100%",
                height: "50px",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
