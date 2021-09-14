import './App.css';
import { useCallback, useState } from "react"
function App() {
  const [arr,setArr] = useState([
    {Id:1,Title:"aaa",Time:"2020"},
    {Id:2,Title:"bbb",Time:"2021"},
    {Id:3,Title:"ccc",Time:"2022"},
    {Id:4,Title:"ddd",Time:"2023"}
  ])

  const handleRemove = useCallback((Id)=>{
    const newArr = arr.filter((ele)=>{
      if(ele.Id!==Id){
        return ele
      }
    })
    setArr(newArr)
  },[arr])

  return (
    <div className="App" style={{width:"100%"}}>
      <table border="1px" cellPadding="0px" style={{width:"100%",height:"100%",borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Time</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {arr.map((ele)=>{
          return (
            <tr key={ele.Id}>
              <td>{ele.Id}</td>
              <td>{ele.Title}</td>
              <td>{ele.Time}</td>
              <td style={{cursor:"pointer",color:"blue"}} onClick={()=>{handleRemove(ele.Id)}}>Remove</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
