import { useState, useEffect } from "react";


function App() {
  const [items, setItems] = useState ([])
  useEffect(()=> {
    fetch("items.json")
    .then(response=> response.json())
    .then(items=>setItems(items))
  }, [])
  
  return (
    <>
      <h1>
        Online Shop
      </h1>


      <table className="w-100">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {items&&items.map(item => <tr><td>{item.title}</td><td>{item.price}</td></tr>)}
        </tbody>        
      </table>
      
    </>
  );
}

export default App;
