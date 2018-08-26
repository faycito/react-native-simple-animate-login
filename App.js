
import React, { Component } from 'react';
import { Router, Drawer, Stack, Scene } from 'react-native-router-flux'
// SCENES
import LoginPage from './src/views/login/container/login'
// STYLES


export default class App extends Component {

  render() {
    return (
      <Router>
        <Stack>
          {/* <Drawer
            key="drawer"
          >
          </Drawer> */}
          <Scene
            key="root"
            component={LoginPage}
            initial={true}
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}
