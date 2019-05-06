import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import { coreLightMinus1, coreDarkPlus1 } from '../../colors';
import { fontFamilies } from '../../typography';

const StyledButton = styled.span`
  color: ${coreLightMinus1};
  font-family: ${fontFamilies.alphaHeadline};
  border: 1px solid ${rgba(coreLightMinus1, 0.35)};
  background: ${rgba(coreDarkPlus1, 0.2)};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 11px;
  padding: 6px 14px;
  line-height: 11px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  ${props =>
    props.blockHeight !== 0 &&
    css`
      max-height: ${props.blockHeight}px;
    `}
  overflow: hidden;
  transition: max-height 400ms ease;
`;

const StyledItem = styled.li`
  margin: 0;
  overflow: hidden; /* prevent collapsing margins */
`;

export default class ViewMore extends React.Component {
  listRef = React.createRef();

  transitionEndCallback = this.transitionEndCallback.bind(this);

  state = {
    itemsToShow: 1,
    expanded: false,
    height: 0,
  };

  componentDidMount() {
    const { children } = this.props;
    if (!children || !children.length) return;
    this.setState({ height: this.getItemHeight() });
    this.listRef.current.removeEventListener('transitionend', this.transitionEndCallback);
    this.listRef.current.addEventListener('transitionend', this.transitionEndCallback);
  }

  getItemHeight() {
    return this.listRef.current.children[0].clientHeight;
  }

  transitionEndCallback() {
    const { expanded } = this.state;
    if (!expanded) {
      this.setState({ expanded: true });
    } else {
      this.setState({ itemsToShow: 1, expanded: false });
    }
  }

  showMore() {
    const { children } = this.props;
    this.setState({ height: this.getItemHeight() * children.length, itemsToShow: children.length });
  }

  showLess() {
    this.setState({ height: this.getItemHeight() });
  }

  handleClick() {
    const { expanded } = this.state;
    if (!expanded) {
      this.showMore();
    } else {
      this.showLess();
    }
  }

  render() {
    const { children } = this.props;
    const { expanded, itemsToShow, height } = this.state;
    if (!children || !children.length) return null;
    return (
      <>
        <StyledList isExpanded={expanded} innerRef={this.listRef} blockHeight={height}>
          {children.slice(0, itemsToShow).map(child => (
            <StyledItem key={child.key}>{child}</StyledItem>
          ))}
        </StyledList>
        {children.length > 1 && (
          <StyledButton onClick={() => this.handleClick()}>{expanded ? 'Show less' : 'Show more'}</StyledButton>
        )}
      </>
    );
  }
}

ViewMore.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
