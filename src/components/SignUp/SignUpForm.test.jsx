import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('Sign Up Form', () => {
  test('SignUp renders without crashing', () => {
    render(<SignUpForm />);
    expect(screen.getByText('Create Account')).toBeTruthy();
    // expect().toBe()
  });

  describe('Username Field', () => {
    test('should not display error if username is ok', () => {
      //Arrange
      render(<SignUpForm />);
      // Act
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: 'ValidUsername20' },
      });

      const elem = screen.queryByTestId(/username-helper/i);
      // Assert
      expect(elem).toBeNull();
    });
    test('should be a required field', () => {
      //Arrange
      render(<SignUpForm />);

      // Act
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: 'some_text' },
      });
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: '' },
      });
      const elem = screen.queryByTestId(/username-helper/i);

      // Assert
      expect(elem).toHaveTextContent('"value" is not allowed to be empty');
    });

    test('should avoid blank spaces and special characters', () => {
      //Arrange
      render(<SignUpForm />);
      // Act
      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: 'string with spaces' },
      });
      let elem = screen.queryByTestId(/username-helper/i);
      // Assert
      expect(elem).toHaveTextContent(
        '"value" must only contain alpha-numeric characters'
      );

      fireEvent.change(screen.getByLabelText(/username/i), {
        target: { value: 'string_with_#$%@&' },
      });
      elem = screen.queryByTestId(/username-helper/i);
      // Assert
      expect(elem).toHaveTextContent(
        '"value" must only contain alpha-numeric characters'
      );
    });
  });
  describe('Email Field', () => {
    test('should not display error if email is ok', () => {
      //Arrange
      render(<SignUpForm />);
      // Act
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'valid@email.com' },
      });

      const elem = screen.queryByTestId(/email-helper/i);
      // Assert
      expect(elem).toBeNull();
    });
    test('should be a required field', () => {
      //Arrange
      render(<SignUpForm />);

      // Act
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'some@text.com' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: '' },
      });
      const elem = screen.queryByTestId(/email-helper/i);

      // Assert
      expect(elem).toHaveTextContent('"value" is not allowed to be empty');
    });

    test('should have an @ character and no blank spaces', () => {
      //Arrange
      render(<SignUpForm />);
      // Act
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'test_email.com' },
      });
      let elem = screen.queryByTestId(/email-helper/i);
      // Assert
      expect(elem).toHaveTextContent('"value" must be a valid email');

      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'test @email.com' },
      });
      elem = screen.queryByTestId(/email-helper/i);
      // Assert
      expect(elem).toHaveTextContent('"value" must be a valid email');
    });
  });
});
