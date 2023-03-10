import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Actions";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([false]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect (() => {
    const getProduct = async () => {
      setLoading(true);
      const response = fetch(`https://api4286.s3.ap-south-1.amazonaws.com/products.json/${id}`);
      
      setProduct(await response.json());
      console.log(product);
      setLoading(false);
    }
    getProduct();
  }, []);

  const Loading = () => {
    return(
      <>
      Loading...
      </>
    )
  }

  const ShowProduct = () => {
    return (
      <>
      console.log('product :', {product});
        <div className="col-md-6">
          <img
            src={product.filename}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {product.type} </h4>
          <h1 className="display-5"> {product.title} </h1>
          <p className="lead fw-bolder">
            Rating {product.rating} <i className="fa fa-star"></i>{" "}
          </p>
          <h3 className="display-6 fw-bold my-4"> $ {product.price} </h3>
          <p className="lead"> {product.description} </p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>

          <NavLink to="/Cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return(
    <>
    <div className="container">
      <div className="row">
        {loading ? <Loading/> : <ShowProduct/>}
      </div>
    </div>
    </>
  );
};

export default Product;