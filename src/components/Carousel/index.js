import React from 'react';
import styled from 'react-emotion';
import Swipeable from 'react-swipeable';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  overflow: hidden;
`;

const StyledSlidesTrack = styled.div`
  position: relative;
  top: 0;
  left: ${props => props.left}px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.length * props.slideWidth}px;
  transition: left 200ms ease-out;
`;

const StyledSlide = styled.div`
  display: block;
  float: left;
  width: auto;
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledArrow = styled.div`
  display: inline-block;
  color: #fff;
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      currentSlide: 1,
      slideWidth: 300,
      slideByRow: 4,
      length: 0,
    };
    this.wrapperRef = React.createRef();
    this.slidesTrackRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      slideWidth: this.slidesTrackRef.current.children[0].offsetWidth + 15,
      length: this.slidesTrackRef.current.children.length,
      wrapperWidth: this.wrapperRef.current.offsetWidth,
    });
  }

  handleSwipe(deltaX, velocity) {
    const { left, slideWidth, length, wrapperWidth } = this.state;
    const newLeft = left + ((deltaX * -1) / 5) * velocity;
    if (newLeft <= 0 && newLeft > slideWidth * length * -1 + wrapperWidth) {
      this.setState({ left: newLeft });
    }
  }

  lockSlides(deltaX) {
    const { slideWidth, left } = this.state;
    const magneticAreaRatio = deltaX < 0 ? -0.8 : -0.2;
    setTimeout(() => {
      const ratio = left / slideWidth;
      let newLeftPosition = 0;
      if (left % slideWidth > slideWidth * magneticAreaRatio) {
        newLeftPosition = Math.ceil(ratio) * slideWidth;
      } else {
        newLeftPosition = Math.floor(ratio) * slideWidth;
      }
      this.setState({ left: newLeftPosition });
    }, 25);
  }

  slide(inverted = false) {
    const { length, slideWidth, currentSlide, slideByRow } = this.state;
    const newCursor = currentSlide + (inverted ? -1 : 1);
    if (newCursor > 0 && newCursor <= length - (slideByRow - 1)) {
      this.setState(previousState => ({
        left: previousState.left - slideWidth * (inverted ? -1 : 1),
        currentSlide: newCursor,
      }));
    }
  }

  render() {
    const { children } = this.props;
    const { left, slideWidth, length } = this.state;
    return (
      <div>
        <StyledArrow onClick={() => this.slide(true)}>Left</StyledArrow>
        <StyledContainer innerRef={this.wrapperRef}>
          <Swipeable
            onSwiping={(e, deltaX, deltaY, absX, absY, velocity) => this.handleSwipe(deltaX, velocity)}
            onSwiped={(e, deltaX) => this.lockSlides(deltaX)}
          >
            <StyledSlidesTrack innerRef={this.slidesTrackRef} left={left} slideWidth={slideWidth} length={length}>
              {children.map((child, index) => (
                /* eslint-disable-next-line react/no-array-index-key */
                <StyledSlide key={index}>{child}</StyledSlide>
              ))}
            </StyledSlidesTrack>
          </Swipeable>
        </StyledContainer>
        <StyledArrow onClick={() => this.slide()}>Right</StyledArrow>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
};

Carousel.defaultProps = {
  children: null,
};
