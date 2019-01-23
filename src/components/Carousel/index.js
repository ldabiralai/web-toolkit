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
  margin-right: ${props => props.margin}px;px;
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
      slideMargin: 15,
    };
    this.wrapperRef = React.createRef();
    this.slidesTrackRef = React.createRef();
  }

  componentDidMount() {
    const { slideMargin } = this.state;
    // Initialize the elements size
    this.setState({
      slideWidth: this.slidesTrackRef.current.children[0].offsetWidth + slideMargin,
      length: this.slidesTrackRef.current.children.length,
      wrapperWidth: this.wrapperRef.current.offsetWidth,
    });
  }

  /**
   * Calculate the new left position according to the swipe force and avoid it to go behind the limits
   * @param deltaX
   * @param velocity
   */
  handleSwipe(deltaX, velocity) {
    const { left, slideWidth, length, wrapperWidth } = this.state;
    const newLeft = left + ((deltaX * -1) / 5) * velocity;
    if (newLeft <= 0 && newLeft > slideWidth * length * -1 - wrapperWidth) {
      this.setState({ left: newLeft });
    }
  }

  /**
   * Calculate a new left position to have a "magnetic" effect on the slides
   * @param deltaX
   */
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

  /**
   * Go to the next slide or previous slide and avoid to go behind the carousel limits
   * @param inverted
   */
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
    const { left, slideWidth, length, slideMargin } = this.state;
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
                <StyledSlide key={index} margin={slideMargin}>
                  {child}
                </StyledSlide>
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
