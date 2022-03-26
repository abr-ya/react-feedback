import { useState } from 'react';
import { StyledItem, BlockNum, BlockText } from './styled/Item.styled';
import { Container } from './styled/Model.styled';

function Item() {
  const [rating] = useState(7);
  const [text] = useState('Я - текст отзыва!!!))');

  return (
    <Container>
      <StyledItem>
        <BlockNum>{rating}</BlockNum>
        <BlockText>{text}</BlockText>
      </StyledItem>
    </Container>
  );
}

export default Item;
