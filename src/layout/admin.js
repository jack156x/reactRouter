import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import NavLeft from './NavLeft'
import Header from './Header'
import style from './style.module.less'
import Logo from '@/assets/logo-ant.svg'
const { Sider } = Layout;


@connect(
  state => ({ app: state.app })
)
class Admin extends Component {
  render () {
    const { appName } = this.props.app
    return (
      <Layout className={style.admin}>
        <Sider trigger={null} collapsible collapsed={this.props.app.collapsed} className={style.admin_sider}>
          <div className={style.logo}>
            <img src={Logo} alt="logo" />
            {
              !this.props.app.collapsed && (<p>{appName}</p>)
            }
          </div>
          <NavLeft />
        </Sider>
        <Layout className={style.site_layout}>
          <Header />
          <div className={style.admin_content}>
            {this.props.children}
          </div>
        </Layout>
      </Layout>
    )
  }
}
export default Admin
