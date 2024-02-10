import { Flex, Screen, Tag, Text, TypeWriter } from '../../components';
import { TechIcons } from '../../components/tech-icon/TechIcon';
import { isMobile } from '../../utils/screen-size';
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

  /* &.rfm-overlay::before, &.rfm-overlay::after {
    background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  } */
`;

export const Home = () => {
  return (
    <>
      <Screen alignItems={'center'} pt={'64px'} flexDirection={'column'}>
        <Greeting>
          <Text type="text-xl">This is Russell’s Playground, feel free</Text>
          <Text type="text-xl"> to wander around!</Text>
        </Greeting>

        <TypeWriter
          className="type-writer"
          style={{
            marginTop: '16px',
            fontFamily: 'GeistMono',
            fontSize: isMobile() ? '0.775rem' : '0.875rem',
            textAlign: 'center',
          }}
          backSpeed={50}
          strings={[
            'Where I explore Full Stack wonders with creativity and curiosity.',
          ]}
          typeSpeed={50}
        />

        <StyledMarquee
          className="icons-marquee marquee-1"
          speed={30}
          gradient
          gradientColor="black"
        >
          <TechIcons />
        </StyledMarquee>

        <Flex>
          <Tag title="SLIIT" />
          <Tag title="BetaLaunch" />
          <Tag title="MetJip" />
        </Flex>
        {/* 
        <Grid  style={{gap: '16px'}}>
          <Card desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          <Card desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          <Card desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />

          
        </Grid> */}
      </Screen>
    </>
  );
};
