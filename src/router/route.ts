import { RouteRecordRaw } from 'vue-router'

/**
 * 路由meta对象参数说明
 * meta: {
 *    title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *    isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *    isHide：        是否隐藏此路由
 *    isKeepAlive：   是否缓存组件状态
 *    isAffix：       是否固定在 tagsView 栏上
 *    isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *    roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *    icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义静态路由
 * @description 前端控制直接改 dynamicRoutes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 dynamicRoutes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 */
export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: 'message.staticRoutes.notFound' }
  }
]

/**
 * 定义动态路由
 * @description 未开启 isRequestRoutes 为 true 时使用（前端控制路由），开启时第一个顶级 children 的路由将被替换成接口请求回来的路由数据
 * @description 各字段请查看 `/@/views/system/menu/component/addMenu.vue 下的 ruleForm`
 */
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true
    },
    children: [
      /** home */
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'message.router.home',
          isLink: false,
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'HomeFilled'
        }
      },
      /** system */
      {
        path: '/system',
        name: 'system',
        component: () => import('@/layout/routerView/Parent.vue'),
        redirect: '/system/menu',
        meta: {
          title: 'message.router.system',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'Setting'
        },
        children: [
          {
            path: '/system/menu',
            name: 'systemMenu',
            component: () => import('@/views/system/menu/index.vue'),
            meta: {
              title: 'message.router.systemMenu',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'Menu'
            }
          },
          {
            path: '/system/role',
            name: 'systemRole',
            component: () => import('@/views/system/role/index.vue'),
            meta: {
              title: 'message.router.systemRole',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'ColdDrink'
            }
          },
          {
            path: '/system/user',
            name: 'systemUser',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
              title: 'message.router.systemUser',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'User'
            }
          },
          {
            path: '/system/dept',
            name: 'systemDept',
            component: () => import('@/views/system/dept/index.vue'),
            meta: {
              title: 'message.router.systemDept',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'OfficeBuilding'
            }
          },
          {
            path: '/system/dic',
            name: 'systemDic',
            component: () => import('@/views/system/dic/index.vue'),
            meta: {
              title: 'message.router.systemDic',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin'],
              icon: 'SetUp'
            }
          }
        ]
      },
      /** control */
      {
        path: '/control',
        name: 'control',
        component: () => import('@/layout/routerView/Parent.vue'),
        redirect: '/control/frontEnd',
        meta: {
          title: 'message.router.control',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'Switch'
        },
        children: [
          {
            path: '/control/frontEnd',
            name: 'controlFrontEnd',
            component: () => import('@/layout/routerView/Parent.vue'),
            redirect: '/control/frontEnd/page',
            meta: {
              title: 'message.router.controlFrontEnd',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: ''
            },
            children: [
              {
                path: '/control/frontEnd/page',
                name: 'controlFrontEndPage',
                component: () => import('@/views/control/frontEnd/page/index.vue'),
                meta: {
                  title: 'message.router.controlFrontEndPage',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              },
              {
                path: '/control/frontEnd/btn',
                name: 'controlFrontEndBtn',
                component: () => import('@/views/control/frontEnd/btn/index.vue'),
                meta: {
                  title: 'message.router.controlFrontEndBtn',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              }
            ]
          },
          {
            path: '/control/backEnd',
            name: 'controlBackEnd',
            component: () => import('@/layout/routerView/Parent.vue'),
            redirect: '/control/backEnd/page',
            meta: {
              title: 'message.router.controlBackEnd',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: ''
            },
            children: [
              {
                path: '/control/backEnd/page',
                name: 'controlBackEndPage',
                component: () => import('@/views/control/backEnd/page/index.vue'),
                meta: {
                  title: 'message.router.controlBackEndPage',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: ''
                }
              }
            ]
          }
        ]
      },
      /** menu */
      {
        path: '/menu',
        name: 'menu',
        component: () => import('@/layout/routerView/Parent.vue'),
        redirect: '/menu/menu1',
        meta: {
          title: 'message.router.menu',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'Menu'
        },
        children: [
          {
            path: '/menu/menu1',
            name: 'menu1',
            component: () => import('@/layout/routerView/Parent.vue'),
            redirect: '/menu/menu1/menu11',
            meta: {
              title: 'message.router.menu1',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'Menu'
            },
            children: [
              {
                path: '/menu/menu1/menu11',
                name: 'menu11',
                component: () => import('@/views/menu/menu1/menu11/index.vue'),
                meta: {
                  title: 'message.router.menu11',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'Menu'
                }
              },
              {
                path: '/menu/menu1/menu12',
                name: 'menu12',
                component: () => import('@/layout/routerView/Parent.vue'),
                redirect: '/menu/menu1/menu12/menu121',
                meta: {
                  title: 'message.router.menu12',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'Menu'
                },
                children: [
                  {
                    path: '/menu/menu1/menu12/menu121',
                    name: 'menu121',
                    component: () => import('@/views/menu/menu1/menu12/menu121/index.vue'),
                    meta: {
                      title: 'message.router.menu121',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin', 'common'],
                      icon: 'Menu'
                    }
                  },
                  {
                    path: '/menu/menu1/menu12/menu122',
                    name: 'menu122',
                    component: () => import('@/views/menu/menu1/menu12/menu122/index.vue'),
                    meta: {
                      title: 'message.router.menu122',
                      isLink: '',
                      isHide: false,
                      isKeepAlive: true,
                      isAffix: false,
                      isIframe: false,
                      roles: ['admin', 'common'],
                      icon: 'Menu'
                    }
                  }
                ]
              },
              {
                path: '/menu/menu1/menu13',
                name: 'menu13',
                component: () => import('@/views/menu/menu1/menu13/index.vue'),
                meta: {
                  title: 'message.router.menu13',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'Menu'
                }
              }
            ]
          },
          {
            path: '/menu/menu2',
            name: 'menu2',
            component: () => import('@/views/menu/menu2/index.vue'),
            meta: {
              title: 'message.router.menu2',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'Menu'
            }
          }
        ]
      },
      /** link */
      {
        path: '/link',
        name: 'layoutLinkView',
        component: () => import('@/layout/routerView/Link.vue'),
        meta: {
          title: 'message.router.layoutLinkView',
          isLink: 'https://github.com',
          isHide: false,
          isKeepAlive: false,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'Link'
        }
      },
      /** iframe */
      {
        path: '/iframe',
        name: 'layoutIfameView',
        component: () => import('@/layout/routerView/Iframes.vue'),
        meta: {
          title: 'message.router.layoutIfameView',
          isLink: 'https://cn.vuejs.org/',
          isHide: false,
          isKeepAlive: false,
          isAffix: true,
          isIframe: true,
          roles: ['admin'],
          icon: 'IceCreamRound'
        }
      }
    ]
  }
]
