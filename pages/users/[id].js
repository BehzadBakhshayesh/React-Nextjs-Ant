import { Row, Col, Button, Divider, Typography, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Error from 'next/error'
import axios from 'axios'

const { Title } = Typography

const User = ({ user, statusCode}) => {

    if(statusCode){
        return(
           <Error statusCode={statusCode}/>
        )
    }
    return (
        <div>
            <Title level={2} type="success">کاربر شماره {user.id}</Title>
            <Row>
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    نام :
                </Col>
                <Col span={20}>
                    {user.name}
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    ایمیل :
                </Col>
                <Col span={20}>
                    {user.email}
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    نام کاربری :
                </Col>
                <Col span={20}>
                    {user.username}
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    آدرس :
                </Col>
                <Col span={20}>
                    {`${user.address.suite} ${user.address.street} ${user.address.city}  - ${user.address.zipcode} `}
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={4}>
                    موقعییت جغرافیایی :
                </Col>
                <Col span={20}>
                    <div>lat : {user.address.geo.lat}</div>
                    <div>lng : {user.address.geo.lng}</div>
                </Col>
            </Row>
            <Divider dashed />
            <Row>
                <Col span={8}>
                    <Button type="primary"><Link href='/users'><a>بازگشت به لیست کاربران</a></Link></Button>
                </Col>
            </Row>

        </div>
    )
}

export const getStaticPaths  = async ({ params }) =>{
    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')
    return{
      paths: users.map(user =>({params:{id: `${user.id}`}})),
      fallback: true
    }
  } 

export const getStaticProps = async ({ params }) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .catch(err => alert(err))
    const user = response?.data
    return {
        props: { user,
                statusCode: user? false : '404' 
                },
        revalidate: 60
    }
}
export default User
