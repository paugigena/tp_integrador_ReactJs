import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const styles = {
  card:{
  width: '18rem',
  marginBottom: "20px"
  }
}

function Producto({ title, price, id, thumbnail,condition, resumen }) {
  useEffect(() => {
    // console.log("componentDidMount");
  }, []);

  useEffect(() => {
    // console.log("componentDidUpdate");
  }, [title, price]);
  return (
    <Col>
    <Card style={styles.card}>
    <Card.Img variant="top" src={thumbnail} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
     $ {price}
      </Card.Text>
      <Card.Text>
     {condition}
      </Card.Text>
      <Button variant="secondary" as={Link} to={`/productos/${id}`}>Mas detalles</Button>
    </Card.Body>
  </Card>
  </Col>
  );
}

export default Producto;
