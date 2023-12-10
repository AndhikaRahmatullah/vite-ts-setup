import { cva } from 'class-variance-authority';

// ----------------------------------------------------------------------

export const buttonStyles = cva('button', {
  variants: {
    variant: {
      filled: ['text-light', 'dark:bg-light', 'rounded-lg', 'bg-blue-600', 'font-medium', 'transition-all', 'duration-300', 'hover:bg-blue-700', 'active:scale-95', 'dark:text-blue-600'],
      outlined: [
        'dark:text-light',
        'dark:border-light',
        'rounded-lg',
        'border-2',
        'border-blue-600',
        'bg-transparent',
        'font-medium',
        'text-blue-600',
        'transition-all',
        'duration-300',
        'active:scale-95',
        'dark:bg-transparent',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-xl', 'py-3', 'px-6'],
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'medium',
  },
});
