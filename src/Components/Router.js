import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Menu from './Menu'
import BookTable from './BookTable'
import NotFound from './NotFound'
import ReviewBooking from './ReviewBooking'
import Admin from './Admin'
import Login from './Login'
import { store } from '../store/store'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/book-table' component={BookTable} />
        <Route path='/review-booking' component={ReviewBooking} />
        <Route path='/menu' component={Menu} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Router
