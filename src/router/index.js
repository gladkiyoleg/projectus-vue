import VueRouter from 'vue-router'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import ('@/pages/home') 
		},
		{
			path: '/activity',
			name: 'activity',
			component: () => import('@/pages/activity')
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: () => import('@/pages/calendar')
		},
		{
			path: '/files',
			name: 'files',
			component: () => import('@/pages/files') 
		},
		{
			path: '/kanban',
			name: 'kanban',
			component: () => import('@/pages/kanban') 
		},
		{
			path: '/my-tasks',
			name: 'myTasks',
			component: () => import('@/pages/myTasks') 
		},
		{
			path: '/notifications',
			name: 'notifications',
			component: () => import('@/pages/notifications') 
		},
		{
			path: '/tasks',
			name: 'tasks',
			component: () => import('@/pages/tasks') 
		},
		{
			path: '*',
			name: 'not founded',
			component: () => import('@/pages/notFound') 
		}
	]
})

export default router;