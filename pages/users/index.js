import Link from 'next/link'
import { Table, Typography, Divider   } from 'antd'
import {EyeOutlined} from '@ant-design/icons'
import axios from 'axios'

const { Title } = Typography


const Users = ({users}) => {
    const columns = [
        {
          title: 'نام',
          dataIndex: 'name',
          key: 'name',
          render: (field, record) => { 
            return (<>{field}</>)},
        },
        {
          title: 'نام کاربری',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'ایمیل',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '',
          key: 'user',
          dataIndex: 'user',
          render:  (field, record) => <Link href={`/users/${record.id}`}><a><EyeOutlined /></a></Link>
        
        },
      ]

    return (
        <>
            <div className='Users'>
                <Title level={2} type="success">لیست کاربران</Title>
                <Divider dashed />
                <Table columns={columns} dataSource={users} />
            </div>
        </>
    )
}

export const getStaticProps = async () =>{
    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')
    return{
        props:{users},
        revalidate: 60
    }
} 

export default Users
