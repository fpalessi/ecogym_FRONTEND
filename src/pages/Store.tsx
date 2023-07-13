import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/Store/StoreItem";
import storeItems from "../data/items.json";
import StoreNavbar from "../components/Store/StoreNavbar";

const Store = () => {
  return (
    <>
      <StoreNavbar />
      <div className="mx-10 mb-2">
        <h2 className="my-8 text-2xl font-bold">
          Nuestra tienda de productos ecológicos
        </h2>
        <div className="mx-20">
          <Row lg={3} md={2} xs={1} className="g-3">
            {storeItems.map((item) => (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="grid bg-gray-400">
        <p className="mx-auto py-2 font-bold">ECOGYM STORE © </p>
      </div>
    </>
  );
};

export default Store;
