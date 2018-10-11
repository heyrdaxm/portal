export const navItems = [
  {
    name: '监控面板',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  },
  {
    title: true,
    name: '监控菜单'
  },
  {
    name: '账户管理',
    url: '/account/management',
    icon: 'icon-cursor'
  },
  {
    name: '其他',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  }
];
