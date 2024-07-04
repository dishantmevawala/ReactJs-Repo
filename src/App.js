// import logo from './logo.svg';
import './App.css';
// import Header  from './header';
// import Footer  from './footer';
// import Employee from './Employee';
import Test from './Test';
import './Style.css';
// import PropTypes from 'prop-types'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header name='Dishant' surname='mevawala'/>
      <Employee name='Dev' surname='mevawala'></Employee>
      <Footer name='Janvi' surname='mevawala'/> */}
      <Test name='Dishant'>React</Test>
    </div>
  );
}

export default App;
