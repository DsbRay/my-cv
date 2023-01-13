import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import HomePage from '../components/Home'
import Layout from '../components/Layout'
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
