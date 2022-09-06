import Card from 'react-bootstrap/Card';

const MyFooter= ({adress, button, storeName, }) => {
  return (
    <Card style={{backgroundColor: "#7F3953"}}>
      <Card.Header className='text-light'>{storeName}</Card.Header>
      <Card.Body>
        <Card.Text className='text-light'>
          {adress}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;