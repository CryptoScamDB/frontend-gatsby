import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import TwitterCsdbImage from '../images/csdb-twitter.png';

interface Props {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title?: string;
}

const SEO: React.StatelessComponent<Props> = ({
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
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
              property: `og:site_name`,
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
              property: `og:image`,
              content: `${data.site.siteMetadata.siteUrl}${TwitterCsdbImage}`
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
              name: `twitter:site`,
              content: data.site.siteMetadata.author
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:image`,
              content: `${data.site.siteMetadata.siteUrl}${TwitterCsdbImage}`
            },
            {
              name: `twitter:description`,
              content: metaDescription
            },
            {
              name: `theme-color`,
              content: data.site.siteMetadata.theme
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
        siteUrl
        description
        author
        theme
      }
    }
  }
`;
