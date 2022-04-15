import { StyledHeader, Container } from './styled/Common.styled';
import NavIconLink from './NavIconLink';

function Header() {
  return (
    <>
      <NavIconLink />
      <Container>
        <StyledHeader>
          <h2>Feedback App</h2>
        </StyledHeader>
      </Container>
    </>
  );
}

export default Header;
