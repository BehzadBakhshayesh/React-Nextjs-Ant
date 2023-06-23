
import { Row, Col, Button, Divider, Typography } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const { Title } = Typography

const Post = ({ post }) => {
    // const {query} =useRouter() client side..

    return (
        <div>
            <Title level={2} type="success">پست شماره {post.id}</Title>
            <Row>
                <Col span={4}>
                    عنوان :
                </Col>
                <Col span={20}>
                    {post.title}
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    متن :
                </Col>
                <Col span={20}>
                    <p>{post.body}</p>
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={8}>
                    <Button type="primary"><Link href='/posts'><a>بازگشت به لیست پست ها</a></Link></Button>
                </Col>
            </Row>

        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return {
        props: { post }
    }
}

export default Post
