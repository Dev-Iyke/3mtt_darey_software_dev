import "./App.css";
import ListComponent from "./ListComponent";
import Loader from "./Loader";
import useGetData from "./useGetData";

function App() {
  const {
    data: list,
    isLoading,
    error,
  } = useGetData("https://jsonplaceholder.typicode.com/todos");
  console.log(list);
  console.log(isLoading);
  console.log(error);

  if(error) return (
  <div className="error">
    <p>⚠️⚠️⚠️</p>
    <h2>{error}</h2>
  </div>) 

  return (
    <div className="App">
      <div className="container">
        {isLoading ? 
          (<Loader />) 
        :
          <ListComponent list={list} />}
      </div>
      </div>
  );
}

export default App;
