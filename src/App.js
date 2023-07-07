import './App.css';
import First from './components/First/First';
import Reasons from './components/Reasons/Reasons';
import Programs from './components/programs/Programs';
import Plan from './components/Plan/Plan';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <First/>
          <Programs/>
          <Reasons/>
          <Plan/>
          <Testimonials/>
          <Join/>
          <Footer/>
          
    </div>
  );
}

export default App;
