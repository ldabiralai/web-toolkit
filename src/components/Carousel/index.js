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
  width: ${props => props.nbSlides * props.slideWidth}px;
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
      nbSlides: 0,
      wrapperWitdh: 0,
    };

    this.trackRef = React.createRef();
    this.wrapperRef = React.createRef();
  }

  handleSwipe(deltaX, velocity) {
    const newLeft = this.state.left + ((deltaX * -1) / 5) * velocity;
    if (newLeft <= 0 && newLeft > this.state.slideWidth * this.state.nbSlides * -1 + this.state.wrapperWidth) {
      this.setState({ left: newLeft });
    }
  }

  componentDidMount() {
    this.setState({
      slideWidth: this.trackRef.current.children[0].offsetWidth + 15,
      nbSlides: this.trackRef.current.children.length,
      wrapperWidth: this.wrapperRef.current.offsetWidth,
    });
  }

  lockSlides(deltaX) {
    const magneticAreaRatio = deltaX < 0 ? -0.8 : -0.2;
    const cardWidth = this.state.slideWidth;
    setTimeout(() => {
      const ratio = this.state.left / cardWidth;
      let newPos = 0;
      if (this.state.left % cardWidth > cardWidth * magneticAreaRatio) {
        newPos = Math.ceil(ratio) * cardWidth;
      } else {
        newPos = Math.floor(ratio) * cardWidth;
      }
      this.setState({ left: newPos });
    }, 25);
  }

  slide(inverted = false) {
    this.setState(previousState => {
      const children = this.state.nbSlides;
      const slides = Math.ceil(children);
      const newCursor = this.state.currentSlide + (inverted ? -1 : 1);
      const slideWidth = this.state.slideWidth;
      if (newCursor <= 0 || newCursor > slides - 3) return;
      return {
        left: previousState.left - slideWidth * (inverted ? -1 : 1),
        currentSlide: newCursor,
      };
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <StyledArrow onClick={() => this.slide(true)}>Left</StyledArrow>
        <StyledContainer innerRef={this.wrapperRef}>
          <Swipeable
            onSwiping={(e, deltaX, velocity) => this.handleSwipe(deltaX, velocity)}
            onSwiped={(e, deltaX) => this.lockSlides(deltaX)}
          >
            <StyledSlidesTrack
              innerRef={this.trackRef}
              left={this.state.left}
              slideWidth={this.state.slideWidth}
              nbSlides={this.state.nbSlides}
            >
              {children.map(child => (
                <StyledSlide>{child}</StyledSlide>
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
