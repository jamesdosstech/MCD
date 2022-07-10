import React from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap';

const LeftProj = ({container}) => {
  return (
    <div>
      <Card style={{backgroundColor: `${container.bg}`,}}>
        <Row>
          <Col>
            <img src={container.image} />
          </Col>
          <Col>
            <h3>
              {container.title}
            </h3>
            <p>{container.type}</p>
            <p>{container.summary}</p>
            <button>View Case Study</button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default LeftProj
