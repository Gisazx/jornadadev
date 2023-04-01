import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={100}
          messages={200}
          shares={300} 
          name="Gisazx"
          description="Brecker o goleiro"
          music="música épica"  
          //url=
        />
      </div>
    </div>
  );
}

export default App;
