import './App.css';
import AppHeader from './ui/components/header/App-header';
import TopDrawer from './ui/components/topDrawer/topDrawer';
import { useState } from 'react';
import Home from './ui/pages/home/home';
import Projects from "./ui/pages/projects/projects";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Test from './ui/pages/projects/pages/test/test';
import About from './ui/pages/about/about'


function App() {

  const [isTopDrawerOpen, setTopDrawer] = useState(false);

  const drawToggleClickHandler = () => {
    setTopDrawer(!isTopDrawerOpen);
  };
  

  return (
    <BrowserRouter>
      <div className="App">
          <AppHeader drawToggleClickHandler = {drawToggleClickHandler}/>
          <TopDrawer show = {isTopDrawerOpen} /> 
  

          <div className="App-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/test" component={Test} />
                <Route path="/about" component={About} />
              </Switch>
          </div>
      </div> 
    </BrowserRouter>
  );
}





export default App;
