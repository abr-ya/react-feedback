import { useState } from 'react';
import {
  StyledForm, Group, Input, ValidationMessage,
} from './styled/Form.styled';
import { Card } from './styled/Common.styled';
import Button from './Button';
import RatingSet from './RatingSet';

function Form() {
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
      setIsBtnDisabled(false);
    }

    setText(value);
  };

  return (
    <Card>
      <StyledForm>
        <h4>How would you rate us?!</h4>
        <RatingSet select={setRating} selected={rating} />
        <Group>
          <Input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={inputChangeHandler}
          />
          <Button type="submit" isDisabled={isBtnDisabled}>
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
