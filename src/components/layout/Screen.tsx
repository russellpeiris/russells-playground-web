import { Flex, FlexBoxProps } from '..';
import { FC } from 'react';

interface Props extends FlexBoxProps {}

export const Screen: FC<Props> = ({ ...props }) => {
  return (
    <Flex {...props} height={'calc(100vh - 64px)'} py={'64px'} px={'16px'}>
      {props.children}
    </Flex>
  );
};
