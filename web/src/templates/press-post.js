import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import PressPost from "../components/press/press-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query PressPostTemplateQuery($id: String!) {
    press: sanityPress(id: { eq: $id }) {
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
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const PressPostTemplate = props => {
  const { data, errors } = props;
  const press = data && data.press;
  return (
    <Layout textWhite={true}>
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

      {press && <PressPost {...press} />}
    </Layout>
  );
};

export default PressPostTemplate;
