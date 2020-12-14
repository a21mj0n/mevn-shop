import HomePage from 'pages/HomePage';
import Products from 'pages/crud/Products';
import Categories from 'pages/crud/Categories';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import MainShell from '../shells/MainShell';
import AuthShell from '../shells/AuthShell';

const routes = [
  {
    path: '/',
    component: MainShell,
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
    ],
  },
  {
    path: '/crud',
    component: MainShell,
    children: [
      {
        path: 'categories',
        name: 'crud-categories',
        component: Categories,
        meta: {
          protected: true,
        },
      },
      {
        path: 'products',
        name: 'crud-products',
        component: Products,
        meta: {
          protected: true,
        },
      },
    ],
  },
  {
    path: '/auth',
    component: AuthShell,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginPage,
      },
      {
        path: 'register',
        name: 'register',
        component: RegisterPage,
      },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
