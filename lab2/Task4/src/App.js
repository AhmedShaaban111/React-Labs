import './App.css';
import GreatOne from './components/GreatOne/GreatOne';
import GreatAll from './components/GreatOne/GreatAll';
import FunctionalProps from './components/FunctionalProps/FunctionalProps';
import ClassProps from './components/ClassProps/ClassProps';
import LoginState from './components/LoginState/LoginState';
import CountNum from './components/CountNum/CountNum';
function App() {
  return (
    <div className='App'>
    {/* <GreatOne />
    <GreatAll /> */}

    {/* Task1 */}

    {/* <FunctionalProps fname="Ahmed" lname="Shaaban" age="24" address="Tanta">
      <p>
        hello from App 
      </p>
    </FunctionalProps> */}

  {/*===============================================================
     Task2 */}
  {/* <ClassProps course1="Java" course2="Python">
    <p> hello from APP</p>

  </ClassProps> */}

  {/* ==============================================
  Task3 */}

  {/* <LoginState>

  </LoginState> */}

  {/* ==============================================================
  Task4 */}

  <CountNum></CountNum>
    </div>


  );
}

export default App;
