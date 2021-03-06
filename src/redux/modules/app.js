import { APP_NAME } from '@/config'

const defaultState = {
  appName: !APP_NAME ? '管理系统' : APP_NAME + '管理系统',
  menuTitle: '首页', // 当前导航名称
  collapsed: false, // 主菜单是否折叠
}

const app = function (state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case 'changeMenuTitle':
      return { ...state, menuTitle: payload }
    case 'toggleCollapsed':
      return { ...state, collapsed: !state.collapsed }
    default:
      return state
  }
}

export default app