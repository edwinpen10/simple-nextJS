import Navigation from '../component/Navigation'
import Head from 'next/head'
const Layout = (props)=>(
    <div>

        <Head>
            <head>
                <title>Home</title>
            </head>
        </Head>

      <Navigation />  
      {props.children}
    </div>
)



export default Layout