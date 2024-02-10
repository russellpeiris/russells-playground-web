import { NavigationBar } from './NavigationBar';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const { Content } = AntLayout;

const StyledContent = styled(Content)`
  margin-top: 64px;
`;

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
