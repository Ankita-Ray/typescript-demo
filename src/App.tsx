import './App.css';
import { apiCall } from './services';
import { useEffect, useState } from 'react';
import { FormValues, loading } from './types/types';
import ReloadButton from './components/Buttons/Reload/ReloadButton';
import ReadonlyField from './components/Fields/ReadonlyField.tsx/ReadonlyField';
function App() {
  const [loading, setLoading] = useState<loading>(false);
  const [formValues, setFormValues] = useState<FormValues>({ name: '', email: '' });
  const api = async (load: boolean) => {
    load && setLoading(true);
    const res = await apiCall();
    localStorage.setItem('userDetails', JSON.stringify({ name: res?.name, email: res?.email, error: res?.error }))
    setFormValues({ name: res?.name, email: res?.email, error: res?.error });
    setLoading(false);
  }
  useEffect(() => {
    api(false);
  }, [])
  return (
    <div className="App">
      <div className="form-wrapper">
        <div className='form'>
          <ReadonlyField value={formValues?.name} placeholder='Full Name' />
          <ReadonlyField value={formValues?.email} placeholder='Email Address' />
          <ReloadButton title={loading ? 'Loading...' : 'Reload'} onClick={() => api(true)} />
          <p className='error-text'>{formValues?.error}</p>
        </div>
      </div>
    </div>
  );
}
export default App;