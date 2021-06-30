
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Favorites from './components/notes/Favorites';
import NotesDetails from './components/notes/NotesDetails';
import EditForm from './components/notes/EditForm';
function App() {
  return (
   
   <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/favorites"component={Favorites}/>
      <Route path="/note/:id" component={NotesDetails}/>
      <Route path="/editnote/:id" component={EditForm}/>
      </Switch>
    </Router>


  );
}

export default App;
