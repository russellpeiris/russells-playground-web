import { Card as AntCard, CardProps, Space } from 'antd';
import { colors } from '../../../theme';
import styled from '@emotion/styled';
import { FC } from 'react';

interface Props extends CardProps {
  desc?: string;
}

const StyledCard = styled(AntCard)`
  background-color: transparent;
  border-color: ${colors.primaryBorder};
  backdrop-filter: blur(0.8px);
  color: white;
  flex: 1;
  &.ant-card .ant-card-head {
    border-bottom: none;
  }
`;

export const Card: FC<Props> = ({ ...props }) => {
  return (
    <Space direction="vertical" size={16}>
      <StyledCard {...props} style={{ height: 300, borderRadius: 15 }}>
        {props.desc}
      </StyledCard>
    </Space>
  );
};
