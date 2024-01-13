
import './Alert.scss';
import { Bell , X } from 'lucide-react';


const Alert = () => {
  return (
    <div className="alert-danger">
      <div className="alert-header">
        <div className="alert-title">
          <Bell />
          <h4>Alert Title</h4>
        </div>
        <X className='close' size={25} />
      </div>
      
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem obcaecati dolorem impedit mollitia cumque aut illo aliquid tempore quaerat.</p>
    </div>
  )
}

export default Alert