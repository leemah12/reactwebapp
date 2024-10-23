"use client"; // Marking this file as a client component
import React from 'react';

// Ensure your InputProps interface includes necessary props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add more properties if needed, for now, let's keep it simple
  className?: string; // This allows additional class names to be passed
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`border rounded-md p-2 ${className}`}
      {...props}
    />
  )
);

Input.displayName = 'Input';
