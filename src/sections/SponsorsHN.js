import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormattedHTMLMessage } from 'react-intl';
import ape from '../assets/sponsorsHN/ape.png';
import chain from '../assets/sponsorsHN/chain.svg';
import eth from '../assets/sponsorsHN/eth.png';
import etherscan from '../assets/sponsorsHN/etherscan.png';
import icp from '../assets/sponsorsHN/icp.png';
import metalogo from '../assets/sponsorsHN/metalogo.svg';
import scroll from '../assets/sponsorsHN/scroll.png';

import { useLanguage } from '../context/LanguageContext';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const SponsorBox = ({ image, size }) => (
  <BoxItem className={size}>
    <BoxInfo>
      <img src={image} alt="Sponsor Logo" />
    </BoxInfo>
  </BoxItem>
);

const SponsorsHN = () => {
  const { locale } = useLanguage();
  const width = useWindowWidth();

  return (
    <SponsorsHNSection id="media" locale={locale}>
      <Container>
        <h1>
          <FormattedHTMLMessage id="sponsors.title" />
        </h1>
        <Row>
          {[
            { image: ape, size: 'tierOne' },
            { image: chain, size: 'tierOne' },
            { image: eth, size: 'tierOne' },
            { image: icp, size: 'tierTwo' },
            { image: etherscan, size: 'tierTwo' },
            { image: scroll, size: 'tierTwo' },
            { image: metalogo, size: 'tierThree' },
          ].map(({ image, size }, index) => (
            <SponsorBox key={index} image={image} size={size} />
          ))}
        </Row>
      </Container>
    </SponsorsHNSection>
  );
};

const SponsorsHNSection = styled.section`
  background: #0b0c0d;
  color: #4D4D4D;
  text-align: center;
  height: auto;

  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;

    @media only screen and (max-width: 700px) {
      font-size: ${props => (props.locale === 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1134px;
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const BoxInfo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin: 0;
  text-align: center;
  outline: 1px solid #4D4D4D;

  img {
    max-width: 100%;
  }

  &.tierOne,
  &.tierTwo,
  &.tierThree {
    height: 250px;
    width: calc(33.33% - 20px);
    margin-bottom: 20px;

    @media only screen and (max-width: 700px) {
      width: calc(100% - 20px);
    }
  }

  &.tierTwo {
    height: 180px;
  }

  &.tierThree {
    height: 120px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;

  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }

  text-align: left;
  padding-bottom: 160px;
`;

export default SponsorsHN;
