import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import TransitionButton from '../components/elements/TransitionButton'
import Layout from '../components/Layout'

const PageTwo: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TransitionButton label='Back home' to='/' color='red' direction='down' />
    </Layout>
  )
}

export default PageTwo

export const Head: HeadFC = () => <title>page 2</title>
