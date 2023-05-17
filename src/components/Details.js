import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Image,Row } from "react-bootstrap";
function Details() {
  const params = useParams();
  const [prod, setProd] = useState([]);
  const fetchProd = async () => {
    await fetch("/products.json")
      .then((res) => res.json())
      .then((details) => setProd(details));
  };
  useEffect(() => {
    fetchProd();
  }, []);

  const details = prod.find((item) => item.id == params.id);
  console.log(details)
  return (
    <>
     {details?
    <Row>
<Col>
<Image className="img" style={{width:"100%",height:'500px'}} src={details.image}></Image>
</Col>
<Col>
<h1>{details.title}</h1>
<h1>{details.category}</h1>
<h1>{details.description}</h1>
</Col>
<Col>
<h3>{details.price}</h3>
<p>{details.rating.rate}({details.rating.count})</p>
</Col>
    </Row> :
    <h1>Cannot get data</h1>
    }
    </>
  );
}

export default Details;
