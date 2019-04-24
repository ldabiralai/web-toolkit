import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import LinesEllipsisResponsive from 'react-lines-ellipsis/lib/responsiveHOC';
import LinesEllipsis from 'react-lines-ellipsis';
import { H6, fontFamilies } from '../../typography';
import { coreLightBase, coreNeutral4, coreNeutral9 } from '../../colors';

const ResponsiveEllipsis = LinesEllipsisResponsive()(LinesEllipsis);

const StyledCard = styled.a(`
  box-sizing: border-box;
  font-family: ${fontFamilies.interUi};
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  display: block;
  background-color: ${coreNeutral9};
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.6);
  overflow: hidden;
`);

const StyledImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${(188 / 343) * 100}%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }
`;

const StyledContent = styled.div`
  position: relative;
  padding: 39px 30px 0 27px;
  min-height: 170px;
  &::before {
    position: absolute;
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    background-color: ${coreNeutral9};
    height: 100%;
    transform-origin: top left;
    transform: scale(1.1) rotate(-${((77 / 749) * 180) / Math.PI}deg);
  }
`;

const StyledTopic = styled.div`
  position: relative;
  color: ${coreNeutral4};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
`;
const StyledTitle = styled.div`
  position: relative;
  color: ${coreLightBase};
  font-size: 18px;
  line-height: 28px;
`;

const StyledPublished = styled(H6)`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  color: ${coreNeutral4};
  text-transform: none;
  font-weight: 600;
`;

const StoryCard = ({ href, target, image, topic, title, published }) => (
  <StyledCard href={href} target={target}>
    <StyledImageContainer>
      <img src={image} alt={title} />
    </StyledImageContainer>
    <StyledContent>
      <StyledTopic>{topic}</StyledTopic>
      <StyledTitle>
        <ResponsiveEllipsis text={title} maxLine={3} ellipsis="..." trimRight basedOn="letters" />
      </StyledTitle>
      <StyledPublished>{published}</StyledPublished>
    </StyledContent>
  </StyledCard>
);

StoryCard.defaultProps = {
  target: null,
};

StoryCard.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StoryCard;
