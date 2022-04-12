import PropTypes from 'prop-types';
import { Container } from './styled/Common.styled';
import { StyledRating } from './styled/Rating.styled';

function Rating({ feedback }) {
  const count = feedback.length;
  const averageRating = count
    ? (feedback.reduce((acc, it) => acc + it.rating, 0) / count).toFixed(1)
    : 0;

  return (
    <Container>
      <StyledRating>
        <h4>{`${count} rewies`}</h4>
        <h4>{`Average Rating: ${averageRating}`}</h4>
      </StyledRating>
    </Container>
  );
}

Rating.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Rating;
