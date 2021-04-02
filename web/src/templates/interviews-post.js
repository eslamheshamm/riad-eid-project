import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import InterviewssPost from "../components/interviews/interviews-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query InterviewsPostTemplateQuery($id: String!) {
    press: sanityInterviews(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      video
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const InterviewsPostTemplate = props => {
  const { data, errors } = props;
  const press = data && data.press;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {press && (
        <SEO
          title={press.title || "Untitled"}
          description={toPlainText(press._rawExcerpt)}
          image={press.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {press && <InterviewssPost {...press} />}
    </Layout>
  );
};

export default InterviewsPostTemplate;
