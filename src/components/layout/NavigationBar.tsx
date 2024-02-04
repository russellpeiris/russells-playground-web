import { PrimaryButton, SecondaryButton } from '..';
import { Layout as AntLayout, Flex } from 'antd';
import { colors } from '../../../theme';
import styled from '@emotion/styled';

const { Header } = AntLayout;

const FixedHeader = styled(Header)`
  height: 78px;
  position: fixed;
  width: 100%;
  background: transparent;
  backdrop-filter: blur(0.8px);
  z-index: 2;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 0.5px solid ${colors.primaryBorder};
  overflow: hidden;
`;

export const NavigationBar = () => {
  return (
    <FixedHeader>
      <Flex style={{ gap: '16px' }}>
        <PrimaryButton buttontext="Log In" />
        <SecondaryButton buttontext="Sign Up" />
      </Flex>
    </FixedHeader>
  );
};
