import React,{createContext,lazy, Suspense} from 'react'
import Timer from './Component/Timer.js';
import Compo1 from './Component/contextapi/Compo1.js';
 import Uncontrolled from './Component/Forms/Uncontrolled.js';
// // import Todo from './Component/customHooks/Todo.js';
// var fname=createContext()
// import Todo from './Component/Efficiency/Todo.js';
// import ErrorBoundery from './Component/ErrorBounderies/ErrorBoundery.js';
// const Callback=lazy(()=> import("./Component/customHooks/callback/Callback.js"))

import {Provider} from 'react-redux';
import store from './Component/reduxstore/store.js'
// const

function App() {
  
  return (
    <div>
      {/* <Uncontrolled/>
      {/* <Todo/> */}
      {/* <Suspense fallback={<h1>Please Wait..</h1>}>
          <Callback/>
      </Suspense>
      <h1>Hellow World</h1>
      <ErrorBoundery>
        <Callback/>
      </ErrorBoundery> */} */

      
    </div>
  )
}

export default App


/*



<BrowserRouter>
      <Nevbar/>
        <Routes>
          <Route path="/" elements={<Home/>}/>
          <Route path="/about" elements={<About/>}/>
          <Route path="/Contact" elements={<Contact/>}/>
          <Route path="/user" elements={<User/>}/>
          <Route path="/user/:user1" elements={<Userdetails/>}/>
        </Routes>      
      </BrowserRouter>
      
       <Try/>*/