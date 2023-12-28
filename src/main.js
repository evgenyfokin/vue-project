import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import ArticlesAndNews from "@/pages/ArticlesAndNews.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import Layout from "@/components/Layout.vue";
import OurProject from "@/pages/OurProject.vue";
import Store from "@/store";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import VueSplide from "@splidejs/vue-splide";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(), routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    name: 'Home', path: '/', component: Home
                },
                {
                    name: 'ArticlesAndNews', path: '/articlesandnews', component: ArticlesAndNews
                },
                {
                    name: 'BlogDerails', path: '/blogDetails', component: BlogDetails
                },
                {
                    name: 'OurProject', path: '/ourproject', component: OurProject
                },
                {
                    name: 'ProjectDetails', path: '/projectDetails', component: ProjectDetails
                },
                {
                    path: '/:pathMatch(.*)*', component: NotFoundPage
                }
            ]
        }
    ]
})

const app = createApp(App)

app.use(router)
app.use(Store)
app.use(VueSplide)
app.mount('#app')
