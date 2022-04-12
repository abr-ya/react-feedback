import { FaTimes } from 'react-icons/fa';
import { BlockNum, BlockText, ButtonClose } from './styled/Item.styled';
import { Container, Card } from './styled/Model.styled';

function Item({
  rating, text, id, deleteHandler,
}) {
  const closeClickHandler = () => {
    deleteHandler(id);
  };

  return (
    <Container>
      <Card>
        <BlockNum>{rating}</BlockNum>
        <ButtonClose onClick={closeClickHandler}>
          <FaTimes color="purple" />
        </ButtonClose>
        <BlockText>{text}</BlockText>
      </Card>
    </Container>
  );
}

export default Item;
