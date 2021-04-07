import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return(
          <div>
            <Main/>
          </div>
        );
    }
}

export default App;
