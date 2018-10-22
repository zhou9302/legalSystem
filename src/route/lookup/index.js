const lookup = [
  {
    path: 'toLookUp',
    name: 'toLookUp',
    component: resolve => require(['views/lookUp/views/toLookUp'], resolve),
    children: [
      {
        path: 'lookList',
        name: 'lookList',
        component: resolve => require(['views/lookUp/views/toLookUp/list.vue'], resolve)
      },
      {
        path: 'lookUpList',
        name: 'lookUpList',
        component: resolve => require(['views/lookUp/views/toLookUp/lookUpList.vue'], resolve)
      }
    ]
  },
  {
    path: 'noFillIn',
    name: 'noFillIn',
    component: resolve => require(['views/lookUp/views/noFillIn'], resolve)
  },
  {
    path: 'cleared',
    name: 'clearen',
    component: resolve => require(['views/lookUp/views/cleared'], resolve)
  }
]
export {
  lookup
}
