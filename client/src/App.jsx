import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const token = localStorage.getItem("token");

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
