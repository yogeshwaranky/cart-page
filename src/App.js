// App.js

import React from 'react';
import './App.css';
import Cart from './Cart';
import jsonData from './products.json';
console.log(jsonData.products);
function App() {
  return (
    <div className="App">
      <Cart />
      
    </div>
  );
}

export default App;
