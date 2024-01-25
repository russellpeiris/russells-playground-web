import {
  BackgroundColorProps,
  BackgroundProps,
  BorderProps,
  DisplayProps,
  FlexProps,
  FlexboxProps,
  LayoutProps,
  MaxWidthProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  WidthProps,
  background,
  border,
  display,
  flexbox,
  layout,
  maxWidth,
  position,
  space,
  typography,
  width,
} from 'styled-system';
import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface FlexBoxProps
  extends FlexProps,
    SpaceProps,
    DisplayProps,
    BackgroundColorProps,
    BackgroundProps,
    MaxWidthProps,
    WidthProps,
    PositionProps,
    HTMLAttributes<HTMLDivElement>,
    FlexboxProps,
    LayoutProps,
    TypographyProps,
    BorderProps {}

export const Flex = styled.div<FlexBoxProps>`
  ${display}
  ${width}
  ${maxWidth}
  ${space}
  ${background}
  ${border}
  ${position}
  ${flexbox}
  ${layout}
  ${typography}
`;
Flex.defaultProps = {
  display: 'flex',
};
