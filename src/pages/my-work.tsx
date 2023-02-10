import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import MyWork from '../components/MyWork'

const MyWorkPage = () => {
  return (
    <Layout>
      <MyWork />
    </Layout>
  )
}

export default MyWorkPage

export const Head: HeadFC = () => <title>MyWorkPage</title>
