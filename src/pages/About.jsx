import { Container, Card } from '../components/styled/Common.styled';

function About() {
  return (
    <Container>
      <Card>
        <h1>About page</h1>

        <ul>
          Стэк (основное):
          <li>+ React</li>
          <li>- TypeScript</li>
          <li>+- Webpack (CRA)</li>
          <li>+ Styled Components</li>
          <li>- Redux</li>
          <li>- Redux-Saga</li>
          <li>+ React Router</li>
          <li>- Axios</li>
        </ul>
      </Card>
    </Container>
  );
}

export default About;
