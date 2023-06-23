
import { Carousel, Collapse, Row, Col } from 'antd'
import styles from '../styles/Home.module.css'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const contentStyle = {
  height: '300px',
  color: '#fff',
  fontSize: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#1890ff',
}


const Home = () => {


  const onChange = (a, b, c) => {
    // console.log(a, b, c)
    return ''
  }
  const callback = (key) => {
    // console.log(key)
    return ''
  }

  return (
    <div className={styles.Home}>
      <h2 className={styles.homeH2}>داشبورد</h2>
      <div style={{ position: 'relative', width: '100%' }}>
        <Carousel autoplay afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div  style={{ position: 'relative', width: '100%' }}>
        <Collapse defaultActiveKey={['1']} onChange={callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Home
