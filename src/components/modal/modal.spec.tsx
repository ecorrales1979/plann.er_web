import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '.';
import { modalVariants } from './modal-definitions';

const onCloseMock = jest.fn();

describe('Modal tests', () => {
  it('Should render a modal with default size variant', () => {
    render(<Modal onClose={onCloseMock} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass(
      modalVariants.variants.size[modalVariants.defaultVariants.size!]
    );
  });

  it('Should render a modal with a title', () => {
    render(<Modal onClose={onCloseMock} title="Test title" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveTextContent('Test title');
  });

  it('Should render a modal with a subtitle', () => {
    render(<Modal onClose={onCloseMock} subtitle="Test subtitle" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveTextContent('Test subtitle');
  });

  it('Should render a modal with given content', () => {
    render(<Modal onClose={onCloseMock}>Test content</Modal>);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveTextContent('Test content');
  });

  it('Should call onClose function when close button is clicked', () => {
    render(<Modal onClose={onCloseMock} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('Should render a modal with small size variant classes', () => {
    render(<Modal onClose={onCloseMock} size="small" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass(modalVariants.variants.size.small);
  });

  it('Should render a modal with medium size variant classes', () => {
    render(<Modal onClose={onCloseMock} size="medium" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass(modalVariants.variants.size.medium);
  });
});
