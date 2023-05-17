import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
import { Row, Col,Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
function Home() {
  const [prod, setProd] = useState([]);
  const fetchProd = async () => {
    await fetch("/products.json")
      .then((res) => res.json())
      .then((res) => {
        setProd(res);
        console.log(res);
      });
  };

  useEffect(() => {
    fetchProd();
  }, []);
  return (
    <>
    
      <Row sm={3} md={4} lg={6} xl={8}>
        {prod.map((item) => {
          return <ProductCard item={item} />;
        })}
      </Row>
      
    </>
  );
}

export default Home;
