import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          {/* <Route exact path="/" component={Header}/> */}
          {/* <Route exact path="/" component={Home}/> */}
        <Footer/>



      </div>
    </Router>

  );
}

export default App;
