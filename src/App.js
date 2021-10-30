import './App.css';
import React from 'react'

function App() {
const [array, setArray] = React.useState([])
const [object, setObject] = React.useState({})


React.useEffect(() => {
  fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
  .then((response)=>{
    return response.json()
  })
  .then((arrayOfObjects) => {
    let randomIndex = Math.floor(Math.random() * (arrayOfObjects.length-1))
    setArray(arrayOfObjects)
    setObject(arrayOfObjects[randomIndex])
  });
}, [])

  return (
    <div className="App">
      <p>character : {object.character}</p>
      <p>quote : {object.quote}</p>
      <p><img src={object.image}  alt="" /></p>
    <button onClick={()=> 
    setObject(array[Math.floor(Math.random() * (array.length-1))])}>
    Random Quote</button>
    </div>
  );
}

export default App;
