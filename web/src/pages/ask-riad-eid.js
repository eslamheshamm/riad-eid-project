import React from "react";
import Layout from "../containers/layout";

import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsPublishedInTheFuture } from "../lib/helpers";
import AskPostPreviewGrid from "../components/ask-riad-eid/ask-post-preview-list";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Child from "../components/images/child.png";
import FormInputs from "../components/form/form";

export const query = graphql`
  query AllAskPosts {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    posts: allSanityAsk(
      sort: { fields: [publishedAt], order: DESC }
      filter: { publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          title
          qoustion
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
const AskRiadEid = ({ data, errors }) => {
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
  if (!site) {
    console.warn(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={"اسأل رياض عيد"} description={"اسأل رياض عيد"} keywords={site.keywords || []} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16 text-white  w-full">
        <FormInputs
          title={"اسأل رياض عيد"}
          placeHolder1={"السؤال"}
          placeHolder2={`رقم الهاتف`}
          placeHolder3={"توضيح للسؤال(اختياري)"}
          formId="jd7JpvlI"
        />
        <img src={Child} alt="Child" className="row-start-1 lg:row-auto" />
      </section>
      <section className="my-6 mb-56">
        {postNodes && <AskPostPreviewGrid nodes={postNodes} />}
      </section>
    </Layout>
  );
};
export default AskRiadEid;
