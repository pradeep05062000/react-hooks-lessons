import './App.css';
import CounterHooks from './components/CounterHooks'
import UseStateObject from './components/UseStateObject'
import UseStateArray from './components/UseStateArray'
import  UseEffect from "./components/UseEffect";
import ConditionalUseEffect from "./components/ConditionalUseEffect"
import UseEffectOnlyOnce from "./components/UseEffectOnlyOnce"
import CleanUpUseEffect from "./components/CleanUpUseEffect"
import FeacthDataUseEffect from './components/FeatchDatauseEffect'
import UseReducer from './components/UseReducer';
import UseContextA from './components/UseContextA'
import {NameContext,AgeContext} from "./components/UseContext";
import UseReducerMultiple from './components/UseReducerComplexState'
import React,{ useReducer } from "react";
import {initialState,reducer} from "./components/UseReducerAndUseContext";
// import UseReducerA from './components/UseReducerA'
import FeacthDataUseReducer from './components/FeatchDataUseReducer'
// export const countContext = React.createContext()
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef"
import CounterOne from "./components/CounterOne"
import CounterTwo from "./components/CounterTwo"

function App() {
  // const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <FeacthDataUseReducer /> */}
      {/* <countContext.Provider value={{count,dispatch}}>
        // <UseReducerA />
      </countContext.Provider> */}
      {/* <UseReducerMultiple /> */}
      {/* <UseReducer /> */}
      {/* <NameContext.Provider value={["pradeep","ingle"]}>
        <AgeContext.Provider value="20">
          // <UseContextA />
        </AgeContext.Provider>
      </NameContext.Provider > */}
      {/* <FeacthDataUseEffect /> */}
      {/* <CleanUpUseEffect /> */}
      {/* <UseEffectOnlyOnce /> */}
      {/* <ConditionalUseEffect /> */}
      {/* <UseEffect /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <CounterHooks /> */}
    </div>
  );
}

export default App;
