import { ParamButton } from '../../../types/types';
import './style.css';
const ReloadButton = (arg: ParamButton) => {
  return (
    <button
      className={'reload'}
      onClick={arg.onClick}
    >
      {arg.title}
    </button>
  )
}
export default ReloadButton;