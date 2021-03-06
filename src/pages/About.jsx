import { Container, Card } from '../components/styled/Common.styled';

function About() {
  return (
    <Container>
      <Card>
        <h1>About page</h1>
        <p>Простое приложение, где можно оставить отзыв!)</p>
        <p>Отзывы пока не сохраняются.</p>

        <ul>
          Стэк (основное):
          <li>+ React</li>
          <li>- TypeScript</li>
          <li>+- Webpack (CRA)</li>
          <li>+ Styled Components</li>
          <li>- Redux</li>
          <li>- Redux-Saga</li>
          <li>+ React Router 6</li>
          <li>+ React Icons</li>
          <li>+ Framer Motion (анимация)</li>
          <li>- Axios</li>
        </ul>
      </Card>
    </Container>
  );
}

export default About;
