import { useMemo, useState } from "react";
import List from "./List";
const users = [
  {id:"1", name:"Robin"},
  {id:"2", name:"Dennis"},
  {id:"3", name:"Thedore"},
  {id:"4", name:"Jacqeline"},
  {id:"5", name:"Amanda"},
  {id:"7", name:"Jennifer"},
  {id:"8", name:"Jack"},
  {id:"9", name:"Oliver"},
  {id:"10", name:"Chris"},
  {id:"11", name:"Robert"},
  {id:"12", name:"Robin"},
]

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (e) => {
    setText(e.target.value)
  }
  const handleSearch = () => {
    setSearch(text);

  }
  const filteredUsers = users.filter((user) => {
    console.log("filter is running")
    return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());

  })
  return (
    <div className="App">
      <input value={text} onChange={handleText} />
      <button onClick={handleSearch} type="button">Search</button>
      <List list={filteredUsers} />
     
    </div>
  );
}

export default App;
