import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import './ArticleHow.scss';

const ArticleHow = ({ title, description, price, popular, points }) => {
  return (
    <article className={`${popular ? 'how__article popular' : 'how__article'}`}>
      <div className='how__boxTop'>
        {popular && <h4 className='how__popular'>Most Popular</h4>}
      </div>
      <div className='how__top'>
        <h3 className='how__articleTitle'>{title}</h3>
        <p className='how__articleDescription'>{description}</p>
      </div>

      <div className='how__articlePriceInfo'>
        <p className='how__articlePrice'>
          <span className='how__articlePriceSymbol'>£</span>
          {price}
        </p>
        <span className='how__articleWeek'>WEEK</span>
      </div>

      <div className='how__articlePoints'>
        <ul className='how__pointsUl'>
          {points.map((p) => {
            const { id, point } = p;

            return (
              <li className='how__pointLi' key={id}>
                <CheckIcon /> {point}
              </li>
            );
          })}
        </ul>
      </div>

      <button className='how__button'>Subscribe</button>
    </article>
  );
};

export default ArticleHow;
