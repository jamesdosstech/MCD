import { Card, Row, Col } from 'react-bootstrap';

const RightProj = ({container}) => {
  return (
    <div>
      <Card style={{backgroundColor: `${container.bg}`,}}>
        <Row>
          <Col sm={6}>
            <h3>
              {container.title}
            </h3>
            <p>{container.type}</p>
            <p>{container.summary}</p>
            <button>View Case Study</button>
          </Col>
          <Col sm={6}>
            <img src={container.image} />
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default RightProj
