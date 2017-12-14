import Router from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'

import {
  User, UserDashboard, UserData, UserDataSingle, UserIndex, UserLayers,
  UserLayersSingle, UserProjects, UserProjectsSingle, UserSettings
} from './user'

import { Layers, LayersIndex, LayersSingle } from './layers'

import { Projects, ProjectsIndex, ProjectsSingle } from './projects'

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // TODO add 404 page
      path: '*',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/layers',
      component: Layers,
      children: [
        {
          path: '',
          name: 'Layers',
          component: LayersIndex
        },
        {
          path: ':id',
          name: 'LayersSingle',
          component: LayersSingle
        }
      ]
    },
    {
      path: '/projects',
      component: Projects,
      children: [
        {
          path: '',
          name: 'Projects',
          component: ProjectsIndex
        },
        {
          path: ':id',
          name: 'ProjectsSingle',
          component: ProjectsSingle
        }
      ]
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '',
          name: 'User',
          component: UserIndex
        },
        {
          path: 'dashboard',
          name: 'UserDashboard',
          component: UserDashboard
        },
        {
          path: 'settings',
          name: 'UserSettings',
          component: UserSettings
        },
        {
          path: 'data',
          name: 'UserData',
          component: UserData
        },
        {
          path: 'data/:id',
          name: 'UserDataSingle',
          component: UserDataSingle
        },
        {
          path: 'layers',
          name: 'UserLayers',
          component: UserLayers
        },
        {
          path: 'layers/:id',
          name: 'UserLayersSingle',
          component: UserLayersSingle
        },
        {
          path: 'projects',
          name: 'UserProjects',
          component: UserProjects
        },
        {
          path: 'projects/:id',
          name: 'UserProjectsSingle',
          component: UserProjectsSingle
        }
      ]
    }
  ]
})
