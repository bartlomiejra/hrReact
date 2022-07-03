import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { ViewWrapper } from '../../molecules/ViewWrapper/ViewWrapper';
import { ArticleWrapper, NewsSectionHeader, TittleWrapper, Wrapper } from './NewsSection.styles';

const data = [
  {
    title: 'New Computer at school',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt commodi perferendis, quam architecto distinctio et ipsa ex minima, vero ad est delectus perspiciatis eveniet amet nulla facilis molestias ullam.',
  },
  {
    title: 'New Computer at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt commodi perferendis, quam architecto distinctio et ipsa ex minima, vero ad est delectus perspiciatis eveniet amet nulla facilis molestias ullam.',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },

  {
    title: 'New Computer at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt commodi perferendis, quam architecto distinctio et ipsa ex minima, vero ad est delectus perspiciatis eveniet amet nulla facilis molestias ullam.',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];
const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TittleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TittleWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="news" /> : null}
          <Button isBig>click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
