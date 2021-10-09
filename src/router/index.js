import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateResume from '../views/CreateResume.vue'
import Services from '../views/Services.vue'
import Consultation from '../views/Consultation.vue'
import NeedResume from '../views/NeedResume.vue'
import Vacancies from '../views/Vacancies.vue'
import FavoriteVacancies from '../views/FavoriteVacancies.vue'
import Vacancy from '../views/Vacancy.vue'
import Check from '../views/Check.vue'
import MyResume from '../views/MyResume.vue'
import Employers from '../views/Employers.vue'
import PersonalArea from '../views/PersonalArea.vue'
import EmployerRegister from '../views/EmployerRegister.vue'
import EmployerSetPassword from '../views/EmployerSetPassword.vue'
import Responses from '../views/Responses.vue'
import Response from '../views/Response.vue'
import HiddenMyselfVacanciesAndCompanies from '../views/HiddenMyselfVacanciesAndCompanies.vue'
import Settings from '../views/Settings.vue'
import Mailings from '../views/Mailings.vue'
import Images from '../views/Images.vue'
import ConnectedServices from '../views/ConnectedServices.vue'
import MyApps from '../views/MyApps.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/resumes/create',
    name: 'CreateResume',
    component: CreateResume
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/resumes/need',
    name: 'NeedResume',
    component: NeedResume
  },
  {
    path: '/consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: Vacancies
  },
  {
    path: '/vacancies/favorite',
    name: 'FavoriteVacancies',
    component: FavoriteVacancies
  },
  {
    path: '/vacancy',
    name: 'Vacancy',
    component: Vacancy
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/resumes/me',
    name: 'MyResume',
    component: MyResume
  },
  {
    path: '/employers',
    name: 'Employers',
    component: Employers
  },
  {
    path: '/area',
    name: 'PersonalArea',
    component: PersonalArea
  },
  {
    path: '/employers/register',
    name: 'EmployerRegister',
    component: EmployerRegister
  },
  {
    path: '/employers/password',
    name: 'EmployerSetPassword',
    component: EmployerSetPassword
  },
  {
    path: '/responses',
    name: 'Responses',
    component: Responses
  },
  {
    path: '/response',
    name: 'Response',
    component: Response
  },
  {
    path: '/apps',
    name: 'MyApps',
    component: MyApps
  },
  {
    path: '/mailings',
    name: 'Mailings',
    component: Mailings
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  },
  {
    path: '/services/connected',
    name: 'ConnectedServices',
    component: ConnectedServices
  },
  {
    path: '/hidden',
    name: 'HiddenMyselfVacanciesAndCompanies',
    component: HiddenMyselfVacanciesAndCompanies
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
