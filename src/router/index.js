import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Admin from "../layouts/Admin";
import Dashboard from "../views/Dashboard/Dashboard";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "product-categories",
        name: "category-index",
        component: import('../views/ProductCategories/CategoryList')
      },
      {
        path: "product-categories/create",
        name:"category-create",
        component: import('../views/ProductCategories/CategoryCreate')
      },
      {
        path: "product-categories/:id/edit",
        name: "category-edit",
        component: import('../views/ProductCategories/CategoryEdit'),
        props: true,
      },
      {
        path: "products",
        name: "product-index",
        component: import('../views/Products/ProductList')
      },
      {
        path: "product/create",
        name:"product-create",
        component: import('../views/Products/ProductCreate')
      },
      {
        path: "product/:id/edit",
        name: "product-edit",
        component: import('../views/Products/ProductEdit'),
        props: true,
      },
      {
        path: "orders",
        name: "order-index",
        component: import('../views/Orders/OrderList')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
