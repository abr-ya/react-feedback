import { useState } from 'react';
import { Container } from './components/styled/Common.styled';
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

  return (
    <div className="App">
      <Header />
      <Container>
        <Form />
        <Rating feedback={feedback} />
        <List feedback={feedback} deleteHandler={deleteHandler} />
      </Container>
    </div>
  );
}

export default App;
