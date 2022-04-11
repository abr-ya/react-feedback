import { BlockNum, BlockText } from './styled/Item.styled';
import { Container, Card } from './styled/Model.styled';

function Item({ rating, text }) {
  return (
    <Container>
      <Card>
        <BlockNum>{rating}</BlockNum>
        <BlockText>{text}</BlockText>
      </Card>
    </Container>
  );
}

export default Item;
