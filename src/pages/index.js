import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Flask Deployment Giga-Tutorial";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Home' keywords={[`blog`, `flask`, `javascript`, `react`]} />
        <img style={{ margin: 0 }} src='./GatsbyScene.svg' alt='Gatsby Scene' />
        <h1>
          Hey people{" "}
          <span role='img' aria-label='wave emoji'>
            👋
          </span>
        </h1>
        <Link to='/blog/'>
          <Button marginTop='35px'>Go to Blog</Button>
        </Link>
      </Layout>
    );
  }
}

export default IndexPage;
