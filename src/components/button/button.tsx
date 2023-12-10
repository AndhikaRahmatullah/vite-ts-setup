import React from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps } from 'class-variance-authority';
//
import { buttonStyles } from './styles';

// ----------------------------------------------------------------------

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {}

// ----------------------------------------------------------------------

const Button: React.FC<ButtonProps> = ({ className, variant, size, ...props }) => <button className={twMerge(buttonStyles({ variant, size }), className)} {...props} />;

export default Button;
