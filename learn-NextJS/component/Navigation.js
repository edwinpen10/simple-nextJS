import Link from 'next/link'

const Navogation = ()=>(
    <div>
        <Link href="/blog">
            <a>Blog</a>
        </Link>

        <Link href="/index">
            <a>Back to home</a>
        </Link>
    </div>
)



export default Navogation