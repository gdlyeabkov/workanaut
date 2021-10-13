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
import AuthPage from '../views/AuthPage.vue'
import Map from '../views/Map.vue'

import About from '../views/FooterLinks/About.vue'
import AdsSite from '../views/FooterLinks/AdsSite.vue'
import Carrier from '../views/FooterLinks/Carrier.vue'
import Companions from '../views/FooterLinks/Companions.vue'
import ConditionsOfServices from '../views/FooterLinks/ConditionsOfServices.vue'
import ConditionUsabilitySite from '../views/FooterLinks/ConditionUsabilitySite.vue'
import DRM from '../views/FooterLinks/DRM.vue'
import Etic from '../views/FooterLinks/Etic.vue'
import Investors from '../views/FooterLinks/Investors.vue'
import ITProjects from '../views/FooterLinks/ITProjects.vue'
import LifeInCompany from '../views/FooterLinks/LifeInCompany.vue'
import NewsTradeHR from '../views/FooterLinks/NewsTradeHR.vue'
import Ratio from '../views/FooterLinks/Ratio.vue'
import RequirementsSoftware from '../views/FooterLinks/RequirementsSoftware.vue'
import Security from '../views/FooterLinks/Security.vue'
import WorkanautAPI from '../views/FooterLinks/WorkanautAPI.vue'
import OurVacancies from '../views/FooterLinks/OurVacancies.vue'
import Proforientation from '../views/FooterLinks/Proforientation.vue'

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
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ads',
    name: 'AdsSite',
    component: AdsSite
  },
  {
    path: '/carrier',
    name: 'Carrier',
    component: Carrier
  },
  {
    path: '/companions',
    name: 'Companions',
    component: Companions
  },
  {
    path: '/services/conditions',
    name: 'ConditionsOfServices',
    component: ConditionsOfServices
  },
  {
    path: '/usability',
    name: 'ConditionUsabilitySite',
    component: ConditionUsabilitySite
  },
  {
    path: '/drm',
    name: 'DRM',
    component: DRM
  },
  {
    path: '/etic',
    name: 'Etic',
    component: Etic
  },
  {
    path: '/Investors',
    name: 'Investors',
    component: Investors
  },
  {
    path: '/it',
    name: 'ITProjects',
    component: ITProjects
  },
  {
    path: '/life',
    name: 'LifeInCompany',
    component: LifeInCompany
  },
  {
    path: '/hr',
    name: 'NewsTradeHR',
    component: NewsTradeHR
  },
  {
    path: '/ratio',
    name: 'Ratio',
    component: Ratio
  },
  {
    path: '/soft',
    name: 'RequirementsSoftware',
    component: RequirementsSoftware
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/api',
    name: 'WorkanautAPI',
    component: WorkanautAPI
  },
  {
    path: '/orientation',
    name: 'Proforientation',
    component: Proforientation
  },
  {
    path: '/our',
    name: 'OurVacancies',
    component: OurVacancies
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
