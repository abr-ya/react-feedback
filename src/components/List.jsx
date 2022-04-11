import PropTypes from 'prop-types';
import { StyledList } from './styled/List.styled';
import Item from './Item';

function List({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <span>нет отзывов</span>;
  }

  return (
    <StyledList>
      {feedback.map((item) => <Item rating={item.rating} text={item.text} key={item.id} />)}
    </StyledList>
  );
}

// eslint-disable-next-line react/no-typos
List.PropTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
};

export default List;
