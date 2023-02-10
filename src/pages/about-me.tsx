import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'

const AboutMePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <AboutMe />
    </Layout>
  )
}

export default AboutMePage

export const Head: HeadFC = () => <title>About me</title>
