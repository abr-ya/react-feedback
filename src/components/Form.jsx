import { useState, useEffect } from 'react';
import {
  StyledForm, Group, Input, ValidationMessage,
} from './styled/Form.styled';
import { Card } from './styled/Common.styled';
import Button from './Button';
import RatingSet from './RatingSet';

function Form({ addHandler }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const inputChangeHandler = ({ target: { value } }) => {
    // validation
    if (value === '') {
      setIsBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setIsBtnDisabled(true);
    } else {
      setMessage(null);
      setIsBtnDisabled(!rating);
    }

    setText(value);
  };

  useEffect(() => {
    setIsBtnDisabled(!rating || text.trim().length < 10);
  }, [rating]);

  const resetForm = () => {
    setText('');
    setRating(0);
    setIsBtnDisabled(true);
    setMessage('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (rating === 0) {
      // eslint-disable-next-line no-alert
      alert('Необходимо поставить оценку!');
      return;
    }
    if (text.trim().length > 10) {
      const newFeedback = {
        id: +new Date(), text, rating,
      };
      addHandler(newFeedback);
      resetForm();
    }
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <h4>How would you rate us?!</h4>
        <RatingSet select={setRating} selected={rating} />
        <Group>
          <Input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={inputChangeHandler}
          />
          <Button type="submit" isDisabled={isBtnDisabled} style={{ margin: '-8px -10px' }}>
            Send
          </Button>
        </Group>
        <ValidationMessage>
          {message}
        </ValidationMessage>
      </StyledForm>
    </Card>
  );
}

export default Form;
