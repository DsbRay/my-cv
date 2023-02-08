import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'

const Projects: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Projects</h1>
    </Layout>
  )
}

export default Projects

export const Head: HeadFC = () => <title>Projects</title>
