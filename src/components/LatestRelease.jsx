import { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import arrayOfBooks from "../data/books.json";



class LatesRelease extends Component {

state = {selectedBook: null}

   render(){ 
      console.log(this.state.selectedBook)
      return(

      <Container>
            <Row className="justify-content-center; pl-5" >
                
            {arrayOfBooks.map((book, index) => (
             <Col xs={12} md={6} lg={4} xl={4}>

                  <Card key={`books-${index}`} style={{ width: '18rem' }} className="mb-5">
                        <Card.Img variant="top" src={book.img} style={{ width: '286px', height:'400px' }} 
                        onClick={() => {
                           console.log("is clicked");
                           this.setState({selectedBook: book});
                           }}
                        />
                        <Card.Body>
                        <Card.Title className="text-truncate" style={{color: "#7F3953"}}>{book.title}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item className="text-uppercase, text-left"><span className="font-weight-bold">Category:</span> {book.category}</ListGroup.Item>
                        <ListGroup.Item className="font-italic, text-left"><span className="font-weight-bold">Price:</span> ${book.price}</ListGroup.Item>
                        </ListGroup>  
                  </Card>
            </Col>
            ))}

            </Row>
            
    </Container>

)}
}
export default LatesRelease