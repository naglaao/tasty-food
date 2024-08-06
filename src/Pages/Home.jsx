import React, { useEffect } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { detailProducts } from "../redux/features/dishSlice";
import Footers from "../components/Footers";
import { fetchProducts } from "../redux/features/productSlice";
import { Contact } from "../components/Contact";

const Home = () => {
  const { product } = useSelector((state) => state.allProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  const handleDetailProduct = (element) => {
    console.log(element);
    dispatch(detailProducts(element));
  };

  return (
    <>
      <div className="bgColor">
        <section className="banner position-relative">
            <h2 className="text-center text-black bg-success bg-opacity-50 rounded-5 position-absolute top-50 start-50 translate-middle  w-75 h-25">TASTY FOOD <br/> <span  style={{fontFamily:"cursive", color:"#7e9f60",  textTransform:"lowercase"}}>IS ESSENTIAL FOR</span> <br />GOOD HEALTH </h2>
          <img src="./img/11.jpg" />
        </section>
        <section className="iteam_section mt-4 container">
          <h2 className="px-4  " style={{ fontWeight: 400 }}>
            Prepared with Love! Served Fresh!!
          </h2>
          <div className="row mt-2 d-flex justify-content-around align-items-center">
            {product.length !== 0 ? (
              <>
                {product.map((element, index) => {
                  return (
                    <>
                      {index < 6 && (
                        <>
                          <Card
                            style={{
                              width: "22rem",
                              border: "none",
                              backgroundColor: "#EEEEEE",
                            }}
                            className="hove mb-4"
                          >
                            <Link to="/details">
                              <Card.Img
                                style={{ objectFit: "cover" }}
                                variant="top"
                                className="cd"
                                src={element.imgdata}
                                alt="no img"
                                onClick={() => handleDetailProduct(element)}
                              />
                            </Link>
                            <div className="card_body">
                              <div className="upper_data d-flex justify-content-between align-items-center">
                                <h4 className="mt-2">{element.dish}</h4>
                                <span>{element.rating}&nbsp;★</span>
                              </div>

                              <div className="lower_data d-flex justify-content-between ">
                                <h5>{element.category}</h5>
                                <span>$ {element.price}</span>
                              </div>
                              <div className="extra"></div>

                              <div className="last_data d-flex justify-content-between align-items-center">
                                <img
                                  src={element.arrimg}
                                  className="limg"
                                  alt=""
                                />
                                <Button
                                  style={{
                                    width: "150px",
                                    background: "#E43A19",
                                    border: "none",
                                  }}
                                  variant="outline-light"
                                  className="mt-2 mb-2 btnHover"
                                  onClick={() => send(element)}
                                >
                                  Add To Cart
                                </Button>
                                <img
                                  src={element.delimg}
                                  className="laimg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </Card>
                        </>
                      )}
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <p>No results found</p>
              </>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/foodlist">
              <Button
                style={{ width: "30%", background: "#E43A19", border: "none" }}
                variant="outline-light"
              >
                View all
              </Button>
            </Link>
          </div>
        </section>

        {/* contact */}
        <Contact />
        <Footers />
      </div>
    </>
  );
};

export default Home;
