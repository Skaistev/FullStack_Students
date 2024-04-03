import { useState } from "react";

function App() {
  
  const [list, setList] = useState(' ');
  console.log(list);

  function showList (e){

    e.preventDefault()
 
    fetch('http://localhost:4832/api/student')
    .then(res => res.json)
    .then(data => setList(data.list))
    .catch(e=> console.error(e));
  }

  return (
    <>
      <div className="pgr">
         <header>Studentų sąrašas</header>
          <main>Gauti sąrašą </main>
          <form onSubmit={showList}>
             <button >Gauti</button>
          </form>
        <div className="list">visi: {list}</div>
      </div>
    </>
  )
}

export default App
