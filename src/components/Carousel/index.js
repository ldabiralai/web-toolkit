import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled.div`
  overflow: hidden;
  margin: 0 0 0 8px;
`;

const StyledSlidesTrack = styled.div`
  position: relative;
  top: 0;
  left: ${props => props.left}px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.trackWidth}px;
  transition: left 200ms ease-out;
`;

const StyledSlide = styled.div`
  display: block;
  float: left;
  width: auto;
  margin-right: ${props => props.margin}px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledChevron = styled(Chevron)`
  height: 16px;
  width: 11px;
  path {
    fill: rgba(255, 255, 255, 0.7);
  }
`;

const StyledArrow = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  width: 36px;
  margin: 0 1px;
  flex: 0 0 36px;
  border-radius: 0px 2px 2px 0px;
  height: 76px;

  @media (min-width: 900px) {
    display: flex;
    height: 88px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledArrowLeft = styled(StyledArrow)`
  transform: scaleX(-1);
`;

export default class Carousel extends React.Component {
  state = {
    left: 0,
    currentSlide: 0,
    trackWidth: 0,
    disable: false,
  };

  wrapperRef = React.createRef();

  slidesTrackRef = React.createRef();

  componentDidMount() {
    setTimeout(() => this.calculateElementsSizes(), 200);
    window.addEventListener('resize', this.calculateElementsSizes);
    this.previousTouch = 0;
    this.wrapperRef.current.addEventListener(
      'touchstart',
      e => {
        this.previousTouch = e.touches[0].clientX;
      },
      false
    );
    this.wrapperRef.current.addEventListener(
      'touchend',
      () => {
        this.lockSlides(this.deltaTouch);
      },
      false
    );
    this.wrapperRef.current.addEventListener(
      'touchmove',
      e => {
        const { disable, left } = this.state;
        let newLeft = left;
        this.deltaTouch = this.previousTouch - e.touches[0].clientX;
        newLeft += this.deltaTouch * -1;
        if (!disable && this.getLeftInRange(newLeft) !== left) {
          this.setState({
            left: this.getLeftInRange(newLeft),
          });
        }
        this.previousTouch = e.touches[0].clientX;
      },
      false
    );
  }

  getSlidesInformation(children) {
    const { slideMargin } = this.props;
    let position = 0;
    return Array.from(children).reduce((slides, slide) => {
      if (slide.offsetWidth === 0) {
        return slides;
      }
      const slideInfo = {
        width: slide.offsetWidth + slideMargin,
        position,
      };
      position += slideInfo.width;
      return [...slides, slideInfo];
    }, []);
  }

  static getTrackWidth(slides) {
    return slides.reduce((sum, slide) => sum + slide.width, 0);
  }

  getLeftInRange(x) {
    const { trackWidth, wrapperWidth } = this.state;
    if (x > 0) {
      return 0;
    }
    if (trackWidth - wrapperWidth - Math.abs(x) <= 0) {
      return trackWidth * -1 + wrapperWidth;
    }
    return x;
  }

  calculateElementsSizes = () => {
    const slides = this.getSlidesInformation(this.slidesTrackRef.current.children);
    this.setState({
      trackWidth: Carousel.getTrackWidth(slides),
    });
    this.setState({
      slides,
      wrapperWidth: this.wrapperRef.current.offsetWidth,
      disable: this.slidesTrackRef.current.offsetWidth <= this.wrapperRef.current.offsetWidth,
    });
    const { disable } = this.state;
    if (disable) {
      this.setState({
        left: 0,
      });
    }
  };

  /**
   * Calculate a new left position to have a "magnetic" effect on the slides
   * @param deltaX
   */
  lockSlides(deltaX) {
    const { slides } = this.state;
    let { left, currentSlide } = this.state;
    slides.forEach((slide, index) => {
      if (Math.abs(left) >= slide.position && Math.abs(left) <= slide.position + slide.width) {
        const ratio = (left * -1 - slide.position) / slide.width;
        const limit = deltaX > 0 ? 0.2 : 0.8;
        if (ratio > limit) {
          left = slides[index + 1].position * -1;
          currentSlide += 1;
        } else {
          left = slide.position * -1;
          currentSlide = index;
        }
        this.setState({ left: this.getLeftInRange(left), currentSlide });
      }
    });
  }

  /**
   * Go to the next slide or previous slide and avoid to go behind the carousel limits
   * @param inverted
   */
  slide(inverted = false) {
    const { slides, left } = this.state;
    let { currentSlide } = this.state;
    let newLeft = left;
    if (inverted && slides[currentSlide - 1]) {
      newLeft += slides[currentSlide - 1].width;
      currentSlide -= 1;
    } else if (!inverted) {
      newLeft += slides[currentSlide].width * -1;
      currentSlide += 1;
    }
    if (this.getLeftInRange(newLeft) !== left) {
      this.setState({
        left: this.getLeftInRange(newLeft),
        currentSlide,
      });
    }
  }

  render() {
    const { children, slideMargin, className } = this.props;
    const { left, trackWidth, disable } = this.state;
    return (
      <StyledWrapper className={className}>
        {!disable && (
          <StyledArrowLeft onClick={() => this.slide(true)}>
            <StyledChevron />
          </StyledArrowLeft>
        )}
        <StyledContainer innerRef={this.wrapperRef}>
          <StyledSlidesTrack innerRef={this.slidesTrackRef} left={left} trackWidth={trackWidth}>
            {children.map((child, index) => (
              /* eslint-disable-next-line react/no-array-index-key */
              <StyledSlide key={index} margin={slideMargin}>
                {child}
              </StyledSlide>
            ))}
          </StyledSlidesTrack>
        </StyledContainer>
        {!disable && (
          <StyledArrow onClick={() => this.slide()}>
            <StyledChevron />
          </StyledArrow>
        )}
      </StyledWrapper>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  slideMargin: PropTypes.number,
  className: PropTypes.string,
};

Carousel.defaultProps = {
  children: null,
  slideMargin: 8,
  className: '',
};