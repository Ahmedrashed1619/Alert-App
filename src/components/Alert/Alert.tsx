
import { IAlertProps } from '../../shared/Interfaces/Interfaces';
import './Alert.scss';
import { X } from 'lucide-react';


const Alert = ({type = "alert-default", icon, title}: IAlertProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className='close' size={20} />
      </div>
      
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem obcaecati dolorem impedit mollitia cumque aut illo aliquid tempore quaerat.</p>
    </div>
  )
}

export default Alert