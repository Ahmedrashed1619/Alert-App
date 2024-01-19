
import { IAlertInterface } from '../../shared/Interfaces/Interfaces';
import './Alert.scss';
import { X } from 'lucide-react';


const Alert = ({type = "alert-default", icon, title, description, children}: IAlertInterface) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className='close' size={20} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  )
}

export default Alert