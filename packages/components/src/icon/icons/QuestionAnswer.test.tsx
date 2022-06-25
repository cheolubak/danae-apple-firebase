import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import QuestionAnswer from './QuestionAnswer';

describe('QuestionAnswer Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="question-answer" />);

    expect(container.firstChild).toMatchSnapshot();

    const { container: temp } = render(<QuestionAnswer />);
    expect(container.firstElementChild?.innerHTML).toBe(temp.innerHTML);
  });
});
