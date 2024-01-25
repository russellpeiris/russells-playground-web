import styled from '@emotion/styled';
import { Flex, Screen, Text } from '../../components';

const Greeting = styled(Flex)`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.35) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: FigTree;
  text-align: center;
  flex-direction: column;
  height: fit-content;
`;

export const Home = () => {
  return (
    <>
    <Screen alignItems={'center'} pt={'78px'} flexDirection={'column'}>
      <Greeting>
        <Text type="text-xl">This is Russell’s Playground, feel free</Text>
        <Text type="text-xl"> to wander around!</Text>
      </Greeting>
      <Text pt={'16px'} fontFamily="GeistMono" type="text-default">
        Where I explore Full Stack wonders with creativity and curiosity.
      </Text>
    </Screen>
    <Screen>
      r
    </Screen>
    </>
  );
};
