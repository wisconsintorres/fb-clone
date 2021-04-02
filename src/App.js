import React from 'react';
import './App.css'
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className="App">

        <Header />

        <div className='app_body'>
        {/*header */}

        <Sidebar />
        <Feed />

        {/*feed */}


        </div>
    </div>
  );
}

export default App;
