import styled from '@emotion/styled';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import { colors } from '../../../theme';
import { Flex, PrimaryButton, SecondaryButton } from '..';

const { Header, Content } = AntLayout;

const FixedHeader = styled(Header)`
  height: 78px;
  position: fixed;
  width: 100%;
  background: transparent;
  backdrop-filter: blur(0.8px);
  z-index: 1000;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 0.5px solid ${colors.primaryBorder};
  overflow: hidden;
`;
const StyledContent = styled(Content)`
  margin-top: 78px;
`;

const NavigationBar = () => {
  return (
    <FixedHeader>
      <Flex style={{ gap: '16px' }}>
        <PrimaryButton buttontext="Log In" />
        <SecondaryButton buttontext="Sign Up" />
      </Flex>
    </FixedHeader>
  );
};

export const Layout = () => {
  return (
    <AntLayout style={{ background: 'transparent' }}>
      <NavigationBar />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </AntLayout>
  );
};
