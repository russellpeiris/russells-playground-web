import { UseScrambleProps, useScramble } from 'use-scramble';
import { Flex, Text } from '..';
import { FC } from 'react';

interface SpinnerProps extends UseScrambleProps {}

export const Spinner: FC<SpinnerProps> = ({ ...props }) => {
  const { ref } = useScramble({ ...props });

  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Text
        ref={ref}
        fontFamily={'GeistMono'}
        type="text-default"
        aria-label="Loading text"
      ></Text>
    </Flex>
  );
};
