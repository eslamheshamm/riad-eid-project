import React from "react";
import { graphql } from "gatsby";

import AboutProgramSteps from "../components/about-program-steps";
import Hero from "../components/hero";
import InfoRows from "../components/InfoRows";
import CTAColumns from "../components/cta-columns";
import CTA from "../components/cta";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

import Layout from "../containers/layout";
import ReviewsPostPreviewList from "../components/home/reviews/reviews-post-preview-list";
import QoustionsPostPreviewGrid from "../components/home/qoustions/qoustions-post-preview-list";
import Form from "../components/form";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
        description
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "infoRows":
          el = <InfoRows key={c._key} {...c} />;
          break;
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "reviewsHome":
          el = <ReviewsPostPreviewList key={c._key} {...c} />;
          break;
        case "questionsHome":
          el = <QoustionsPostPreviewGrid key={c._key} {...c} />;
          break;
        case "ctaColumns":
          el = <CTAColumns key={c._key} {...c} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key} {...c} />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "programSteps":
              el = <AboutProgramSteps />;
              break;
            case "form":
              el = <Form />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el;
    });
  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.description}
        keywords={site.openGraph.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal"
        }}
      />
      <div className="my-12">{content}</div>
    </Layout>
  );
};

export default Page;
