import { Flex, Screen, Text, TypeWriter } from '../../components';
import { TechIcons } from '../../components/tech-icon/TechIcon';
import Marquee from 'react-fast-marquee';
import { colors } from '../../../theme';
import styled from '@emotion/styled';

const Greeting = styled(Flex)`
  /* background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.35) 100%); */
  background: linear-gradient(to right, #f0f, #0ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: FigTree;
  text-align: center;
  flex-direction: column;
  height: fit-content;
  animation: fadeUp 2s ease-in-out forwards;

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(16px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledMarquee = styled(Marquee)`
  width: 50%;
  margin-top: 16px;
  overflow: hidden;
  /* border: ${colors.primaryBorder} 1px solid;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1); */
`;

export const Home = () => {
  return (
    <>
      <Screen alignItems={'center'} pt={'78px'} flexDirection={'column'}>
        <Greeting>
          <Text type="text-xl">This is Russell’s Playground, feel free</Text>
          <Text type="text-xl"> to wander around!</Text>
        </Greeting>
        <TypeWriter
          className="type-writer"
          style={{
            marginTop: '16px',
            fontFamily: 'GeistMono',
            fontSize: '14px',
            textAlign: 'center',
          }}
          backSpeed={50}
          strings={[
            'Where I explore Full Stack wonders with creativity and curiosity.',
          ]}
          typeSpeed={50}
        />

        <StyledMarquee className="icons-marquee" speed={40}>
          <TechIcons />
        </StyledMarquee>
      </Screen>
      <Screen>r</Screen>
    </>
  );
};
