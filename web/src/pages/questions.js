import React from "react";
// import { graphql } from "gatsby";
// import {
//   mapEdgesToNodes,
//   filterOutDocsWithoutSlugs,
//   filterOutDocsPublishedInTheFuture
// } from "../lib/helpers";
// import BlogPostPreviewList from "../components/blog-post-preview-list";
// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import SEO from "../components/seo";
import Layout from "../containers/layout";

// export const query = graphql`
//   query IndexPageQuery {
//     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
//       title
//     }
//     posts: allSanityPost(
//       limit: 6
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `;

const Questions = props => {
  //   const { data, errors } = props;

  //   if (errors) {
  //     return (
  //       <Layout>
  //         <GraphQLErrorList errors={errors} />
  //       </Layout>
  //     );
  //   }

  //   const site = (data || {}).site;
  //   const postNodes = (data || {}).posts
  //     ? mapEdgesToNodes(data.posts)
  //         .filter(filterOutDocsWithoutSlugs)
  //         .filter(filterOutDocsPublishedInTheFuture)
  //     : [];

  //   if (!site) {
  //     console.warn(
  //       'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //     );
  //   }

  return (
    <Layout>
      {/* <SEO
        title={site.title || "Missing title"}
        description={site.description || "Missing description"}
        keywords={site.keywords || []}
      />
      <Container>
        <div className="flex flex-col mb-12 ">
          <h1 className="mb-4 text-4xl font-yasser">مقالات عن صحة الأطفال</h1>
          <p>
            نسبة النجاح في هذا الامر تصل إلي 95% في حال التزام الزوجين بجميع التوصيات المذكورة في
            البرنامج.
          </p>
        </div>
        <div className="py-6 mb-56">{postNodes && <BlogPostPreviewList nodes={postNodes} />}</div>
      </Container> */}
      <h1>This is Q&A page</h1>
    </Layout>
  );
};

export default Questions;
