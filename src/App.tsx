import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className='app-container'>
      <Navigator></Navigator>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;