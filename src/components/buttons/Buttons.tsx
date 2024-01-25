import styled from '@emotion/styled';
import { Button, ButtonProps } from 'antd';
import { FC } from 'react';
import { colors } from '../../../theme';

type Props = ButtonProps & {
  buttontext: string;
  icon?: React.ReactNode;
};

const StyledButton = styled(Button)`
  border-radius: 8px;
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0 ease-in-out;

  &.ant-btn-primary {
    color: white;
    border: 1px solid ${colors.primaryBorder};
    background: ${colors.primary};
    &.ant-btn-primary:hover {
      background: ${colors.primaryHover};
    }
  }

  &.ant-btn-default {
    background: ${colors.secondary};
    color: ${colors.primary};
    border: none;
    &.ant-btn-default:hover {
      background: ${colors.secondaryHover};
      color: ${colors.primary};
      border: none;
    }
  }
`;

export const PrimaryButton: FC<Props> = ({ ...props }) => {
  return (
    <StyledButton type="primary" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};

export const SecondaryButton: FC<Props> = ({ ...props }) => {
  return (
    <StyledButton type="default" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};
