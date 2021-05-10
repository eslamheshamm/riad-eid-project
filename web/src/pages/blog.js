import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog/blog-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    console.warn(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title || "Missing title"}
        description={site.description || "Missing description"}
        keywords={site.keywords || []}
      />
      <Container>
        <div className="flex flex-col mb-12 ">
          <h1 className="mb-4 text-4xl font-yasser">المدونة</h1>
          <p>
            في هذه المدونة ستجد مقالات مفيدة عن صحة الأطفال وبرنامج تحديد جنس المولود قبل الحمل
            يكتبها الخبير رياض عيد الخبير الأول في الوطن العربي في تحديد جنس المولود قبل الحمل
            واستشارات الحمل
          </p>
        </div>
        <div className="my-6 mb-56">{postNodes && <BlogPostPreviewList nodes={postNodes} />}</div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
