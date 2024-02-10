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

export interface GridProps
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

export const Grid = styled.div<GridProps>`
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

      /* Responsive grid */
  grid-template-columns: auto auto auto;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
Grid.defaultProps = {
  display: 'grid',
};
