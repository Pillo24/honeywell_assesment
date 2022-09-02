import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    FC,
    HTMLProps,
    MouseEvent,
    MouseEventHandler,
    forwardRef,
    useCallback,
    useMemo,
  } from 'react';
  import classNames from 'classnames';
  
  
  // Styles
  import './button.scss';
  
  
  export interface ButtonProps
    extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
    styleType?: 'promoted' | 'standard' | 'link';
    colorType?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
    sizeType?: 'smaller' | 'small' | 'large' | 'auto';
    labelText?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }
  
  const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        colorType = 'primary',
        styleType = 'promoted',
        labelText,
        sizeType,
        children,
        disabled,
        onClick,
        ...otherProps
      },
      ref,
    ) => {
  
      const handleClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
        },
        [onClick],
      );
  
      const buttonClassNames = useMemo(
        () =>
          classNames(
            'button',
            {
              ['button__' + colorType]: colorType,
              ['button__' + styleType]: styleType,
              ['button__' + sizeType]: sizeType,
              'button__disabled': disabled,
            },
            className,
          ),
        [
          colorType,
          styleType,
          className,
          disabled,
          sizeType,
        ],
      );
  
      return (
            <button
              {...otherProps}
              disabled={disabled}
              aria-label={labelText}
              ref={ref}
              title={labelText}
              className={buttonClassNames}
              onClick={handleClick}
            >
              <div className="button__text">{children}</div>
            </button>
      );
    },
  );
  
  export default Button as FC<HTMLProps<HTMLButtonElement> & ButtonProps>;