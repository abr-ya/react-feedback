import { useState } from 'react';
import GlobalStyle, { Container } from './components/styled/Common.styled';
import {
  Header, List, Rating, Form,
} from './components';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteHandler = (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const addHandler = (item) => {
    setFeedback((prev) => [item, ...prev]);
    // eslint-disable-next-line no-alert
    alert('Спасибо за ваш отзыв!');
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Form addHandler={addHandler} />
        <Rating feedback={feedback} />
        <List feedback={feedback} deleteHandler={deleteHandler} />
      </Container>
    </>
  );
}

export default App;
