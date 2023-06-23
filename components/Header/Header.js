import Image from 'next/image'
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <h2 className={styles.headerH2}>
                پنل ادمین
            </h2>
            <div className={styles.logoContainer}>
                <span style={{ color: '#fff' }}>Admin Panel</span>
                <Image src='/images/logo.png' alt='' width='50px' height='50px'  />
            </div>
        </div>
    )
}

export default Header
