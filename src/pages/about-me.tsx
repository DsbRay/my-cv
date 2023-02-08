import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'

const AboutMePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>AboutMePage</h1>
    </Layout>
  )
}

export default AboutMePage

export const Head: HeadFC = () => <title>About me</title>
