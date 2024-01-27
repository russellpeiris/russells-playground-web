import { iconArray } from '../../assets';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex } from '..';

type Props = {
  icons?: ReactNode[];
};

const Icon = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: transform 1s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.2) translateY(-2px);
  }
`;

export const TechIcons: FC<Props> = ({ ...props }) => {
  props.icons = props.icons || iconArray;

  return (
    <Flex borderRadius={'10px'} zIndex={1}>
      {props.icons &&
        props.icons.map((icon, index) => <Icon key={index}>{icon}</Icon>)}
    </Flex>
  );
};
