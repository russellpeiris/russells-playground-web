import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  color,
  space,
  typography,
} from 'styled-system';
import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

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
    font-size: 2.5rem;
    font-weight: 600;
    line-height: normal;
    `;
    case 'text-large':
      return `
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    `;
    case 'text-default':
      return `
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
    `;
    case 'text-small':
      return `
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    `;
  }
};

const getStyleFontTypeMobile = (type: FontTypes) => {
  switch (type) {
    case 'text-xl':
      return `
        font-size: 1.8rem;
        font-weight: 600;
        line-height: normal;
      `;
    case 'text-large':
      return `
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    case 'text-default':
      return `
        font-size: 0.75rem;
        font-weight: 400;
        line-height: normal;
      `;
    case 'text-small':
      return `
        font-size: 0.625rem;
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
  @media (max-width: 768px) {
    ${(props) => getStyleFontTypeMobile(props.type)}
  }
`;
