import { Tag as AntdTag, TagProps } from 'antd';
import { FC } from 'react';
import { Text } from '..';

interface Props extends TagProps {}

export const Tag: FC<Props> = ({ ...props }) => {
  return (
    <AntdTag
      {...props}
      style={{
        background: 'transparent',
        margin: '16px 8px',
      }}
    >
      <Text fontFamily={'GeistMono'} color={'white'} type="text-small">
        {props.title}
      </Text>
    </AntdTag>
  );
};
