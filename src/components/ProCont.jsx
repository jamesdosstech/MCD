import {Container} from 'react-bootstrap';
// left container
import LeftProj from './LeftProj';
// right container
import RightProj from './RightProj';

const ProCont = ({ containers }) => {
  return (
    <div>
      <Container>
          {
            containers.map((container) => (
              container.isLeft ? (
                <LeftProj 
                  key={container.id}
                  container={container}  
                />
              ) : (
                <RightProj 
                  key={container.id}
                  container={container}
                />
              )
            ))
          }
      </Container>
    </div>
  )
}

export default ProCont
