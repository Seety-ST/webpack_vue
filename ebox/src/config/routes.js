
import index from '../page/index/index.vue'
import content from '../page/content.vue'

// 引入子路由
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'


// 配置路由
export default [
  {
	path: '/',
	component: index,
            
  },
  {
	path: '/content',
	component: content,
            children: [
                    {path: '/',component: userIndex},
                    {path: 'info',component: userInfo},
                    {path: 'love',component: userLove}
            ],
  },

]