import { Card, Avatar, Divider, Row, Col, Space } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

const { Meta } = Card

const AboutUs = () => {
    return (
        <>
            <div className='AboutUs'>
                <h2>About Us</h2>
                <Divider orientation="right">درباره ما</Divider>
                <Row gutter={24}>
                    <Col span={12}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>






            <style jsx>
                {`
                .AboutUs{
                    display: flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-items: center;
                }
                h2{color:green;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                flex-basis:100%;}     
            `}
            </style>
        </>
    )
}

export default AboutUs
