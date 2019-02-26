import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function ReportPage({data}) {
    return (
    <Layout id="report-view">
        <SEO title="Report a scam" keywords={[`ethereum`,`report`,`mycrypto`]} />

        <h2 id="heading">Report</h2>

        <br />
        
      </Layout> 
    )
}