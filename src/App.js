import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Adduser';
import About from './Pages/About';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Notfound from './Pages/Notfound';
import Store from './Pages/Store';
import ViewProduct from './Pages/ViewProduct';
import Mycard from './Pages/Mycard';
// import ShoppingCartProvider from './Context/ShoppingCartContext';
function App() {
  return (
    <div className="App">
     {/* <ShoppingCartProvider> */}
      <BrowserRouter>       
        <Navbar/>    
        <Switch>
          <Route exact path={'/'}  component={Home} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/store'} component={Store} />
          <Route exact path={'/viewproduct/:id'} component={ViewProduct} />
          <Route exact path={'/Mycard/:id'} component={Mycard} />
          <Route exact path={'**'} component={Notfound} />
        </Switch>
        <Footer />   
      </BrowserRouter>
      {/* </ShoppingCartProvider> */}
    </div>
  );
}

export default App;
