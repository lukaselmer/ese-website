import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Elmer Software Engineering GmbH" />
    <p>
      Elmer Software Engineering GmbH
      <br />
      Kreuzwiesen 19
      <br />
      8051 Zürich
      <br />
      Switzerland
    </p>
    <p>CHE-138.020.307 MWST</p>
    <p>
      <a href="mailto:lukas@elmer.app">lukas@elmer.app</a>
    </p>
  </Layout>
)

export default IndexPage
