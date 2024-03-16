import './App.css';
import CreateForm from './Components/CreateForm';
import ReadData from './Components/ReadData';
import { Route, Routes } from 'react-router-dom'
import Edit from './Components/Edit';

function App() {
  return (
    <div className="container App">
      <Routes>
    <Route exact path='/' element={<ReadData/>}></Route>
    <Route exact path='/create' element={<CreateForm/>}></Route>
    <Route exact path='/edit' element={<Edit/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
