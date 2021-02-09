import React, { Component, Suspense, lazy } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from '@/App';
import Admin from '@/layout/admin'
import Common from '@/layout/common'
import Login from '@/pages/login'
// import NoFound from '@/pages/noFound'

/*
 * 路由懒加载  
 * 只懒加载admin的子路由
 * 如果懒加载全部路由会导致菜单闪烁
 */
const Home = lazy(() => import('@/pages/home'))

export default class Router extends Component {
  render () {
    return (
      <App>
        <HashRouter>
          <Suspense fallback={<div style={{ fontSize: 20, textAlign: 'center' }}>Loading...</div>}>
            <Switch>
              <Route path="/login" component={Login} />
              <Redirect exact from="/" to="/admin/home" />
              <Redirect exact from="/admin" to="/admin/home" />
              <Route path="/admin" render={() =>
                <Admin>
                  <Suspense fallback={<div style={{ fontSize: 20, textAlign: 'center' }}>Loading...</div>}>
                    <Switch>
                      <Route path="/admin/home" component={Home} />
                    </Switch>
                  </Suspense>
                </Admin>
              } />
              <Route path="/common" render={() =>
                <Common>
                  {/* <Switch>
                    <Route path="/common/orderDetail/:id" component={OrderDetail} />
                  </Switch> */}
                </Common>
              } />
              {/* <Route component={NoFound} /> */}
            </Switch>
          </Suspense>
        </HashRouter>
      </App>

    )
  }
}
