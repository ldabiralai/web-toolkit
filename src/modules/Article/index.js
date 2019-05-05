import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';
import Hero from '../Hero';
import ArticleContent from '../../components/ArticleContent';

const StyledArticleContent = styled(ArticleContent)`
  margin-top: 37px;
  margin-bottom: 37px;
  ${breakpoints.medium(css`
    margin-top: 47px;
    margin-bottom: 47px;
  `)};
`;

const Article = ({ data: { title, img, author, time, teaser, html }, ...props }) => (
  <article {...props}>
    <Hero title={title} img={img} author={author} time={time} />
    <StyledArticleContent teaser={teaser} html={html} />
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
    html: PropTypes.string,
  }).isRequired,
};

export default Article;
