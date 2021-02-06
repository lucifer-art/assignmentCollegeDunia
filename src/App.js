import './App.css';
import College from './college/college';
import data from './college.json';

function App() {
  let colleges = data;
  return (
    <div className="container-view">
      <College colleges={colleges} />
    </div>
  );
}

export default App;
