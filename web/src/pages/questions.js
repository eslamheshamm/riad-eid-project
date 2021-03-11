import React from "react";
import Layout from "../containers/layout";

import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsPublishedInTheFuture } from "../lib/helpers";
import QoustionsPostPreviewList from "../components/qoustions/qoustions-post-preview-list";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

export const query = graphql`
  query AllQuestionsPosts {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityQuestions(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          title
          _rawExcerpt
        }
      }
    }
  }
`;
const Qoustions = ({ data, errors }) => {
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
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsPublishedInTheFuture)
    : [];
  console.log(postNodes);
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
        <div className="flex flex-col items-center mb-12 ">
          <h1 className="mb-4 text-4xl font-yasser">توصيات</h1>
          <p>
            نسبة النجاح في هذا الامر تصل إلي 95% في حال التزام الزوجين بجميع التوصيات المذكورة في
            البرنامج.
          </p>
        </div>
        <div className="py-6 mb-56">
          {postNodes && <QoustionsPostPreviewList nodes={postNodes} />}
        </div>
      </Container>
    </Layout>
  );
};
export default Qoustions;
