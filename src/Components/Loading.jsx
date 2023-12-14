import Spinner from 'react-bootstrap/Spinner';

const styles = {
  spinner:{
    position:'fixed',
    top: '50%',
    left: '50%'
  }
}


function Loading({loading, children}) {
  if (loading) {
    return  <Spinner animation="border" variant="info"  style = {styles.spinner}/>
  } else {
    return children;
  }
}

export default Loading;
