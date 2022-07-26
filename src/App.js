import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import Main from './components/MainComponent';
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Main/>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
