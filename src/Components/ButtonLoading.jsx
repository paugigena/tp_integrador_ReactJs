import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';




function ButtonLoading({loading, children,type = "submit" }) {
  
    return  (<Button type="submit" variant = "success" disabled = {loading}>
      {loading && <Spinner animation = "border" size = "sm"/>}
      {children}
      
      </Button>)
  
}

export default ButtonLoading;
