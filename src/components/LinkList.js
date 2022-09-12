import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
