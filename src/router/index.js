import VueRouter from 'vue-router'

import home from '@/pages/home'
import activity from '@/pages/activity'
import calendar from '@/pages/calendar'
import files from '@/pages/files'
import kanban from '@/pages/kanban'
import myTasks from '@/pages/myTasks'
import notifications from '@/pages/notifications'
import tasks from '@/pages/tasks'
import notFound from '@/pages/notFound'

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: home 
		},
		{
			path: '/activity',
			name: 'activity',
			component: activity 
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: calendar 
		},
		{
			path: '/files',
			name: 'files',
			component: files 
		},
		{
			path: '/kanban',
			name: 'kanban',
			component: kanban 
		},
		{
			path: '/my-tasks',
			name: 'myTasks',
			component: myTasks 
		},
		{
			path: '/notifications',
			name: 'notifications',
			component: notifications 
		},
		{
			path: '/tasks',
			name: 'tasks',
			component: tasks 
		},
		{
			path: '*',
			name: 'not founded',
			component: notFound 
		}
	]
})

export default router;