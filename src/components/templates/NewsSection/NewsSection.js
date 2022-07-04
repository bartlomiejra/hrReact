import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button/Button';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TittleWrapper, Wrapper } from './NewsSection.styles';
import axios from 'axios';

export const query = `
{
	allArticles {
    id
    title
    category
    content
    image{
      url
    }
  }
}

`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(process.env.REACT_APP_DATOCOM_TOKEN);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCOM_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for youSomething went wrong`);
      });
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TittleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TittleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="news" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
