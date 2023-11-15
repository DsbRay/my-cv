import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import ContactPage from '../components/Contact'

const Contact = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  )
}

export default Contact

export const Head: HeadFC = () => <title>Contact</title>
