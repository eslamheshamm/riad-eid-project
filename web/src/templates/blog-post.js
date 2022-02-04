import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog/blog-post";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      title
      seo {
        seo_title
        meta_description
        focus_keyword
        focus_synonyms
      }
      slug {
        current
      }

      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout textWhite={true}>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={post.seo && post.seo.meta_description || ""}
          image={post.mainImage || ""}
          keywords={post.seo.focus_synonyms || []}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
