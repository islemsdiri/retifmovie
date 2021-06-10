import './App.css';
import MovieCard from './Component/movieCard'
import RenderNav from './Component/NavBar'

// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
    <RenderNav/>
     <MovieCard/>
    
    </div>
  );
}

export default App;
