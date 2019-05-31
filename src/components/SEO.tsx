import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title?: string;
}

const SEO: FunctionComponent<Props> = ({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title
}: Props) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang
          }}
          title={title}
          titleTemplate={`${data.site.siteMetadata.title} | %s`}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: metaDescription
            }
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `)
                  }
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
