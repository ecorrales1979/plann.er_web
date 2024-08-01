import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import { Button } from './';
import { buttonVariants } from './button-definitions';

describe('Test Button component', () => {
  it('Should render a button', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Should have primary color variant classes when color prop is set to primary', () => {
    render(<Button color="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariants.variants.color.primary);
  });

  it('Should have secondary color variant classes when color prop is set to secondary', () => {
    render(<Button color="secondary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariants.variants.color.secondary);
  });

  it('Should have default size variant classes when size prop is set to default', () => {
    render(<Button size="default" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariants.variants.size.default);
  });

  it('Should have full size variant classes when size prop is set to full', () => {
    render(<Button size="full" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(buttonVariants.variants.size.full);
  });

  it('Should have default color and size variant classes when no props are passed', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      buttonVariants.variants.color[buttonVariants.defaultVariants.color!]
    );
    expect(button).toHaveClass(
      buttonVariants.variants.size[buttonVariants.defaultVariants.size!]
    );
  });
});
