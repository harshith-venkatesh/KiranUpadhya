import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import  { HTMLContent } from "../components/Content";
import ImageAbout from "../components/ImageAbout";
// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  // const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h3 className="title is-size-5 has-text-weight-bold is-bold-light">Thinking of buying a used car? This is what is probably going through your mind right now:
</h3>
             <ImageAbout />
              
                <br />
                <h3 className="title is-size-5 has-text-weight-bold is-bold-light">Maybe you're considering selling your used car and have these concerns:</h3>
                <ul>
                <li>
                ✅  “How do I get a genuine buyer for my car?”
                </li>
                <li>
                ✅ “How do I know that the car I buy will be well-maintained?”
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
