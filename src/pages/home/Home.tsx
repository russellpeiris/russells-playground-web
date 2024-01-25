import { Flex, Screen, Text } from '../../components';
import { ReactTyped } from 'react-typed';
import styled from '@emotion/styled';

const Greeting = styled(Flex)`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.35) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: FigTree;
  text-align: center;
  flex-direction: column;
  height: fit-content;

  /* .landing-text {
  

@keyframes fade-in-bottom-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
animation: fade-in-bottom-up 1s ease-in-out both;
} */
`;

export const Home = () => {
  return (
    <>
      <Screen alignItems={'center'} pt={'78px'} flexDirection={'column'}>
        <Greeting>
          <Text type="text-xl">This is Russell’s Playground, feel free</Text>
          <Text type="text-xl"> to wander around!</Text>
        </Greeting>
        <ReactTyped
          style={{
            marginTop: '16px',
            fontFamily: 'GeistMono',
            fontSize: '14px',
          }}
          backSpeed={50}
          strings={[
            'Where I explore Full Stack wonders with creativity and curiosity.',
          ]}
          typeSpeed={40}
        />
      </Screen>
      <Screen>r</Screen>
    </>
  );
};
