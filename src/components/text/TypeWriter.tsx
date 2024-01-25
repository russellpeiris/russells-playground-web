import { ReactTyped, ReactTypedProps } from 'react-typed';
import { FC } from 'react';

interface Props extends ReactTypedProps {}

export const TypeWriter: FC<Props> = ({ ...props }) => {
  return <ReactTyped {...props} />;
};
