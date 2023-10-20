import './App.css';
import GreatOne from './components/GreatOne/GreatOne';
import GreatAll from './components/GreatOne/GreatAll';
import FunctionalProps from './components/FunctionalProps/FunctionalProps';
import ClassProps from './components/ClassProps/ClassProps';
import LoginState from './components/LoginState/LoginState';
import CountNum from './components/CountNum/CountNum';
import Products from './components/Products/Products';
import { products } from './components/Products/ProductData';
import { UserProvider } from './components/ContextData';
import { Component } from 'react';
import ComponentOne from './components/ComponentOne/ComponentOne';
import GetPosts from './components/GetPosts/GetPosts';
import PostPosts from './components/PostPosts/PostPosts';
function App() {
  return (
    <div className='App'>
      {/* <GreatOne />
    <GreatAll /> */}

      {/* Task1 */}
      {/* 
    <FunctionalProps fname="Ahmed" lname="Shaaban" age="24" address="Tanta">
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

      {/* <CountNum></CountNum> */}


      {/* Lab3 Task 1 */}
      {/* {products.map((product) => (
          <Products key={product.id} product={product}></Products>          
     
      ))} */}

      {/* Lab3 Task 3 */}


      {/* <UserProvider value="Hello everone from " >
        <ComponentOne></ComponentOne>
      </UserProvider> */}

      {/* <GetPosts/> */}
      <PostPosts/>
      
    </div>


  );
}

export default App;
