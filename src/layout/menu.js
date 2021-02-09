const menuList = [
  {
    title: '首页',
    key: '/admin/home',
    icon: 'home',
  },
  {
    title: '表单',
    key: '/admin/form',
    icon: 'form',
    children: [
      {
        title: '登录',
        key: '/admin/form/login',
      }
    ],
  },
  {
    title: '权限设置',
    key: '/admin/permission',
    icon: 'permission',
  },
];
export default menuList;