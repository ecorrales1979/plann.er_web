import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input component test', () => {
  it('should be able to render an input and type into it', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('Should be able to define an input placeholder', () => {
    render(<Input placeholder="test placeholder" />);
    const input = screen.getByPlaceholderText('test placeholder');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange function', () => {
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
