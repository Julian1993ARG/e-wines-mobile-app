import { View } from 'react-native'
import NavBar from './NavBar'
import { Route, Switch, Redirect } from 'react-router-native'
import Login from './Login'
import Home from './Home'
import CreatePubli from './CreatePubli'

export default function Main () {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/createpubli' exact>
          <CreatePubli />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}
