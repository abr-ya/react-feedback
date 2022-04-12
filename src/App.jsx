import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Rating from './components/Rating';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteHandler = (id) => {
    console.log('delete item', id);
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="App">
      <Header />
      <Rating feedback={feedback} />
      <List feedback={feedback} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
