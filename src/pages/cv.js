import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

export default class Cv extends React.Component {
  componentDidMount() {
    window.location.replace(
      "https://docs.google.com/document/d/1Jv3TNMzbCfGk9XD9g-OHpISsOpeQWieSGG_No4bCT-g/edit"
    )
  }

  render() {
    return null
  }
}
