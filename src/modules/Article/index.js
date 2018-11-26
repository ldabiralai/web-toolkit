import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';
import Hero from '../Hero';
import ArticleContent from '../../components/ArticleContent';

const StyledArticleContent = styled(ArticleContent)`
  margin: 37px 0;
  ${breakpoints.medium(css`
    margin: 47px 0;
  `)};
`;

const Article = ({ data: { title, img, author, time, teaser, paragraphs }, ...props }) => (
  <article {...props}>
    <Hero title={title} img={img} author={author} time={time} />
    <StyledArticleContent teaser={teaser} paragraphs={paragraphs} />
  </article>
);

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
    }),
    time: PropTypes.string,
    teaser: PropTypes.string,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Article;
