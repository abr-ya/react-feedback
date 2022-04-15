import { Container } from '../components/styled/Common.styled';

function About() {
  return (
    <Container>
      <h1>About page</h1>

      <ul>
        Стэк (основное):
        <li>+ React</li>
        <li>- TypeScript</li>
        <li>+- Webpack (CRA)</li>
        <li>- Redux</li>
        <li>- Redux-Saga</li>
        <li>+ React Router</li>
        <li>- Axios</li>
      </ul>
    </Container>
  );
}

export default About;
