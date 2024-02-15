import React from 'react';
import EmployeesContextProvider from './context/EmployeesContextProvider';
import SearchInput from './components/SearchInput';
import * as Constants from "./Constants";

import './App.css';

function App() {

  return (
    <EmployeesContextProvider>
      <div className="App">
        <img src={Constants.backgroundImageSrc} alt="office image background"/>
        <SearchInput />
      </div>
    </EmployeesContextProvider>
  );
}

export default App;
