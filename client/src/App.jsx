import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  return (
    <div className= "whole-app-styles">
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default App;
