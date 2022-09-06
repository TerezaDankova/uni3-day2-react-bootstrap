
import { Container, Jumbotron} from "react-bootstrap";



const Welcome =({title, text, image})=> {
      return(
    
            <Jumbotron style={{backgroundColor: "#B55B7F"}}>
                  <Container>
                        
                        <h1 className='text-light'>{title}</h1>
                        <p className='text-light'>{text}</p>
                  </Container>
            </Jumbotron>
     
)}
export default Welcome