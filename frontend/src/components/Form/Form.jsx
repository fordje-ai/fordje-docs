import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import * as React from 'react';
import { useForm } from 'react-hook-form';

export const Form = ({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}) => {
  const methods = useForm({ ...options, resolver: schema && zodResolver(schema) });
  return (
    <form
      className={clsx('space-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
