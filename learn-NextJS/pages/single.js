import {withRouter} from 'next/router'
import Layout from '../component/Layout'
import fetch from 'isomorphic-unfetch'
import Header from 'next/head'


const Post = withRouter((props) => (
    <Layout>
        <Header>
            <head>
                <title>Profile of {props.data.name}</title>
            </head>
        </Header>
        <h2> {props.data.username} </h2>
        <p>Name : {props.data.name}</p>
        <p>email : {props.data.email}</p>
    </Layout>
))

Post.getInitialProps = async function(context) {
    const {id} = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {data}
}

export default Post