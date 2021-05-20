import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import QuestionPost from "../components/qoustions/qoustions-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query QuestionsPostTemplateQuery($id: String!) {
    question: sanityQuestions(id: { eq: $id }) {
      id
      publishedAt
      title
      qoustion
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const QuestionPostTemplate = props => {
  const { data, errors } = props;
  const question = data && data.question;
  return (
    <Layout textWhite={true}>
      {errors && <SEO title="GraphQL Error" />}
      {question && (
        <SEO title={question.title || "Untitled"} description={toPlainText(question._rawExcerpt)} />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {question && <QuestionPost {...question} />}
    </Layout>
  );
};

export default QuestionPostTemplate;
