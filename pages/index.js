import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import PopularNavbar from '../components/PopularNavbar/PopularNavbar'
import Posts from '../components/Posts/Posts'
import Trending from '../components/Trending/Trending'
import TrendingCard from '../components/TrendingCard/TrendingCard'



export default function Home() {
  return (
   <Layout>
    <Head>
      <title>
        CReddit
      </title>
    </Head>
    <Trending/>
    <PopularNavbar/>
    <Posts/>
   </Layout>
  )
}
