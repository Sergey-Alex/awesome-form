import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';

const Step1 =() => <>Step1</>
const Step2 =() => <>Step2</>
const Step3 =() => <>Step3</>
const Result =() => <>Result</>
const Header = () => <h1>Ultimate React Form</h1>
function App() {
  return (
    <>
        <Header/>
      <Router>
          <Routes>
              <Route exact path= '/' element={<Step1/>}/>
              <Route  path='/step2' element={<Step2/>}/>
              <Route  path='/step3' element={<Step3/>}/>
              <Route  path='/result' element={<Result/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
