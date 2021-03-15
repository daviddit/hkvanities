import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import { StyledPagination } from './styles'
import { perPage } from '../../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    platesConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const count = data.platesConnection.aggregate.count
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <StyledPagination data-test="pagination">
          <Head>
            <title>
              HKVanities — Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'plates',
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {props.page} of
            <span className="totalPages">{pages}</span>!
          </p>
          <p>{count} Plates Total</p>
          <Link
            prefetch
            href={{
              pathname: 'plates',
              query: { page: page + 1 },
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </StyledPagination>
      );
    }}
  </Query>
)

export default Pagination
export { PAGINATION_QUERY }
