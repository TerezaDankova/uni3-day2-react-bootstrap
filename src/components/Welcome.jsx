
import { Jumbotron, Container} from "react-bootstrap";



const Welcome =({title, text})=> {
      return(
    
            <Jumbotron style={{backgroundColor: "#B55B7F"}}>
                  <Container>
                        <h1 className='text-light' style={{fontSize: 90}} >{title}</h1>
                        <p className='text-light'>{text}</p>
                  </Container>
            </Jumbotron>
     
)}

export default Welcome