import Layout from '@/components/Layout/Layout'
import Migration from '@/components/migration/Migration'
import Head from 'next/head'
import React from 'react'


const MigrationPage = () => {
  return (
    <>
    <Head>
      <title>Data Migration Service</title>
    </Head>
    <Layout>
      <Migration />
    </Layout>
    </>
  )
}

export default MigrationPage