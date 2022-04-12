import PropTypes from 'prop-types';
import { StyledList } from './styled/List.styled';
import { Container } from './styled/Model.styled';
import Item from './Item';

function List({ feedback, deleteHandler }) {
  if (!feedback || feedback.length === 0) {
    return <Container><span>No feedback yet</span></Container>;
  }

  return (
    <StyledList>
      {feedback.map((item) => (
        <Item
          id={item.id}
          rating={item.rating}
          text={item.text}
          key={item.id}
          deleteHandler={deleteHandler}
        />
      ))}
    </StyledList>
  );
}

List.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default List;
