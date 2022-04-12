import { useState } from 'react';
import { StyledForm, Group, Input } from './styled/Form.styled';
import { Card } from './styled/Common.styled';
import Button from './Button';

function Form() {
  const [text, setText] = useState('');

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <StyledForm>
        <h4>How would you rate it?!</h4>
        <Group>
          <Input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={inputChangeHandler}
          />
          <Button type="submit">
            Send
          </Button>
        </Group>
      </StyledForm>
    </Card>
  );
}

export default Form;
