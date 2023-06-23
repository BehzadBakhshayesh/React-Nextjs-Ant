import Link from 'next/link'
import { Menu } from 'antd'
import {
    UserOutlined,
    MailOutlined,
    SettingOutlined,
    HomeOutlined,
    InfoOutlined,
    UnorderedListOutlined,
    ContactsOutlined,
    CheckOutlined
} from '@ant-design/icons'
import styles from '../../styles/SideBar.module.css'

const { SubMenu } = Menu

const SideBar = () => {
    const handleClick = e => {
        console.log('click ', e)
    }

    return (
        <>
            <div className={styles.SideBar}>
                <Menu
                    onClick={handleClick}
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href='/'>
                            <a>داشبورد</a>
                        </Link>
                    </Menu.Item>

                    <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="لیست ها ">

                        <Menu.Item key="4" icon={<UserOutlined />}>
                            <Link href='/users'>
                                <a>لیست کاربران</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MailOutlined />}>
                            <Link href='/posts'>
                                <a>لیست پست ها </a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<CheckOutlined />} title="سایر">

                        <Menu.Item key="2" icon={<InfoOutlined />}>
                            <Link href='/about'>
                                <a>درباره ما</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContactsOutlined />}>
                            <Link href='/contact'>
                                <a>ارتباط با ما</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<ContactsOutlined />}>
                            <Link href='/article/1/aaaa/bbbb/cccc'>
                                <a>article</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<ContactsOutlined />}>
                            <Link href='/gallery'>
                                <a>gallery</a>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">   
                        <SubMenu key="sub3" title="Submenu">   
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>

        </>
    )
}

export default SideBar
