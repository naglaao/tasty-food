import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cartSlice";
import { detailProducts } from "../redux/features/dishSlice";

function Details() {
  const detail = useSelector((state) => state.allDish);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!detail.detailProduct.dish) {
      const storedDetailProduct = JSON.parse(
        localStorage.getItem("detailProduct")
      );
      if (storedDetailProduct) {
        dispatch(detailProducts(storedDetailProduct));
      }
    }
  }, [detail.detailProduct.dish, dispatch]);

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  return (
    <div
      className="row justify-content-center bgColor"
      style={{ margin: "auto" }}
    >
      <div
        className="detailsMobile cardsdetails "
        style={{ margin: "5vh auto", width: "80vw" }}
      >
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
              <h2 className="text-white m-0">{detail.detailProduct.dish}</h2>
            </div>
          </div>
          <div
            style={{ height: "max-content", display: "flex", flexWrap: "wrap" }}
          >
            <div
              className="detailsImgMobile"
              style={{ flex: "1", minWidth: "350px", maxHeight: "65vh" }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={detail.detailProduct.imgdata}
              />
            </div>
            <div
              className="bgColor detailsContentMobile"
              style={{ flex: "1", padding: "10px", minWidth: "350px" }}
            >
              <h4>What special:</h4>
              <p>{detail.detailProduct.desc}</p>
              <h4>Includes(per item):</h4>
              <p>{detail.detailProduct.includes}</p>
              <h4>
                Price:
                <span style={{ float: "right" }}>
                  $ {detail.detailProduct.price}
                </span>
              </h4>
              <Button
                style={{ width: "100%", background: "#7e9f60", border: "none" }}
                variant="outline-light"
                className="mt-2 mb-2"
                onClick={() => send(detail.detailProduct)}
              >
                Add To Cart
              </Button>
              <p>Want to try more recipes? </p>
              <Link to="/foodlist">
                {" "}
                <Button
                  style={{
                    width: "100%",
                    background: "#7e9f60",
                    border: "none",
                  }}
                  variant="outline-light"
                >
                  Tap here
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
