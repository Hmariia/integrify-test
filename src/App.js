import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListPage from './components/ListPage'
import DetailsPage from './components/DetailsPage'
import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/users/:userId" component={DetailsPage}/>
      </Switch>
    </Suspense>
  </Router>
) ;

export default App
