import Link from 'next/link'
import { Table, Typography, Divider   } from 'antd'
import {EyeOutlined} from '@ant-design/icons'
import axios from 'axios'
import styles from '../../styles/Posts.module.css'

const { Title } = Typography

const columns = [
    {
      title: 'عنوان',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (field, record) =><Link href={`/posts/${record.id}`}><a><EyeOutlined /></a></Link>  
    },
  ]

const Posts = ({ posts }) => {
    return (
        <>
            <div className={styles.posts}>
                <Title level={2} type="success">لیست پست ها</Title>
                <Divider dashed />
                <Table dataSource={posts} columns={columns} />
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts')
    return {
        props: { posts }
    }
}
export default Posts
