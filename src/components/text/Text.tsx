import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  space,
  typography,
} from 'styled-system';

export type FontTypes =
  | 'text-xl'
  | 'text-large'
  | 'text-default'
  | 'text-small';

type Props = React.HTMLAttributes<HTMLDivElement> &
  SpaceProps &
  ColorProps &
  TypographyProps & {
    type: FontTypes;
    children?: string | React.ReactNode;
    id?: string;
    color?: CSSProperties['color'];
    background?: CSSProperties['background'];
    fontFamily?: CSSProperties['fontFamily'];
    display?: CSSProperties['display'];
    onClick?: () => void;
    cursor?: CSSProperties['cursor'];
  };

const getStyleFontType = (type: FontTypes) => {
  switch (type) {
    case 'text-xl':
      return `
        font-size: 40px;
        font-weight: 600;
        line-height: normal;
        `;
    case 'text-large':
      return `
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      `;
    case 'text-default':
      return `
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        `;
    case 'text-small':
      return `
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      `;
  }
};
export const Text = styled.p<Props>`
  margin-bottom: 0px;
  font-family: ${(props) => props?.fontFamily};
  color: ${(props) => props?.color};
  cursor: ${(props) => props?.cursor};
  ${(props) => getStyleFontType(props.type)}
  ${typography}
  ${space}
  ${color}
`;
