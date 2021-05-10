import React from "react";
import Layout from "../containers/layout";

import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import PressPostPreviewList from "../components/press/press-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

export const query = graphql`
  query AllPressPosts {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityPress(
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
const Press = ({ data, errors }) => {
  // return (
  //   <Layout>
  //     <h1>Pres Page</h1>
  //   </Layout>
  // );
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
          <h1 className="mb-4 text-4xl font-yasser">الصحافة</h1>
          <p>
            أقرأ ماذا كتبت الصحافة عن الخبير رياض عيد الخبير الأول في تحديد جنس المولود قبل الحمل
            وعن برنامجه الأنجح في الشرق الأوسط والعالم البرنامج.
          </p>
        </div>
        <div className="my-6 mb-56">{postNodes && <PressPostPreviewList nodes={postNodes} />}</div>
      </Container>
    </Layout>
  );
};
export default Press;
