
import { connect } from 'react-redux'

import './App.css';
import Landing from './components/landing'

function App(props) {

  return (
  
      <div className="App">
        <Landing />
      </div>

  );
}


const mapStateToProps = (state) =>{
   
  return {
     items: state
  }
}

export default connect(mapStateToProps)(App)

