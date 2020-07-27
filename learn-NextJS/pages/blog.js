import Layout from '../component/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Header from 'next/head'

const Index = (props) => (
    <Layout>
        <Header>
            <head>
                <title>List users</title>
            </head>
        </Header>
        <h1>Data users</h1>
        <ul>
            {props.users.map((user)=>(
                    <li key={user.id}>
                        <Link href={`/single?id=${user.id}`}>
                            <a>{user.username}</a>
                        </Link>
                    </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {users: data}
}


export default Index