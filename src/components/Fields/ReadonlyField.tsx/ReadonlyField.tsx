import  './style.css';
import { ParamField } from '../../../types/types';
const ReadonlyField = (arg:ParamField) => {
  return (
    <input 
        disabled
        value={arg.value}
        className='disabled'
        placeholder={arg.placeholder}
    />
  )
}
export default ReadonlyField