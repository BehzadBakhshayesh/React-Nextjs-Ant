import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ConfigProvider, Layout } from 'antd'
import NextNprogress from 'nextjs-progressbar'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import '../styles/globals.css'





const { Header: AntHeader, Footer, Sider, Content } = Layout

const App = ({ Component, pageProps }) => {

  // const router = useRouter()
  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   router.events.on('routeChangeStart', ()=>{setLoading(true)})
  //   router.events.on('routeChangeComplete', ()=>{setLoading(false)})
  //   return ()=> {
  //     router.events.off('routeChangeStart', ()=>{setLoading(true)})
  //     router.events.off('routeChangeComplete', ()=>{setLoading(false)})
  //   }
  // }, [])


  return (
    <>
      {/* {loading && 'Loading............'} */}
      <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={true}
            options={{ easing: 'ease', speed: 500 }}
          />





      <Head>
        <title>
          Ant Design - Next js
        </title>
      </Head>


      <ConfigProvider direction="rtl">
        <Layout>
          <AntHeader className='Header'>
            <Header />
          </AntHeader>
          <Layout>
            <Sider className='Sider'>
              <SideBar />
            </Sider>
            <Content className='Content'>
              <article className='innerContent'>
                <Component {...pageProps} />
              </article>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
