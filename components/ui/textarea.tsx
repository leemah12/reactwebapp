"use client"; // Marking this file as a client component
import React from 'react';

// Ensure your TextareaProps interface includes necessary props
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // You can add more properties if needed, for now, let's keep it simple
  className?: string; // This allows additional class names to be passed
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`border rounded-md p-2 ${className}`}
      {...props}
    />
  )
);

Textarea.displayName = 'Textarea';
