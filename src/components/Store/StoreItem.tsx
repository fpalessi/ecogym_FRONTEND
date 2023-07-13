import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/currency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover", maxHeight: "250px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              variant="dark"
              className="w-100 bg-yellow-20 font-bold text-gray-900"
              onClick={() => increaseCartQuantity(id)}
            >
              Añadir al carrito
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  variant="secondary"
                  className="bg-yellow-50"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}kg</span> en el carrito
                </div>
                <Button
                  variant="secondary"
                  className="bg-yellow-50"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                className="bg-primary-100"
                size="sm"
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
