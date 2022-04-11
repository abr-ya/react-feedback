import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div className="App">
      <Header />
      <List feedback={feedback} />
    </div>
  );
}

export default App;
