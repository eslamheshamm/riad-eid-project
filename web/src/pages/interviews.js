import React from "react";
import Layout from "../containers/layout";

import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import InterviewsPostPreviewList from "../components/interviews/interviews-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

export const query = graphql`
  query AllInterviewsPosts {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityInterviews(
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
const Interviews = ({ data, errors }) => {
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
        title={"مقابلات"}
        description={"مقابلات الخبیر ریاض عید خبیر تحدید جنس المولود قبل الحمل :"}
      />
      <Container>
        <div className="flex flex-col mb-12 ">
          <h1 className="mb-4 text-4xl font-yasser">مقابلات </h1>
          <p>
            شاهد مقابلات الخبير رياض عيد الخبير الأول في تحديد جنس المولود قبل الحمل وتحدثه عن
            البرنامج والكثير من المعلومات الهامة حول تحديد جنس المولود قبل الحمل
          </p>
        </div>
        <div className="my-6 mb-56">
          {postNodes && <InterviewsPostPreviewList nodes={postNodes} />}
        </div>
      </Container>
    </Layout>
  );
};
export default Interviews;
