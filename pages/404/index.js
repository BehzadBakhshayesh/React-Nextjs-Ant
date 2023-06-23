import Link from 'next/link'
import { Result, Button } from 'antd'

const NotFound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="متاسفانه این صفحه یافت نشد!"
                extra={<Button type="primary">
                        <Link href='/'><a>بازگشت به صفحه اصلی</a></Link>
                </Button>}
            />
        </div>
    )
}

export default NotFound
