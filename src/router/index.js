import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import SimpleVueValidation from 'simple-vue-validator'
import Hello from '@/components/Hello'
// import Goto from '@/components/Goto'
import FormTable from '@/components/FormTable'
// import Page from '@/components/Page4SearchFormAndTableList.vue'
import MyTableList from '@/components/MyTableList'
import Page from '@/components/Page4SearchFormAndTableList'
import SearchForm from '@/components/SearchForm'
import Datepicker from '@/components/Datepicker'

Vue.use(Router)
Vue.use(Resource)
Vue.use(SimpleVueValidation)

export default new Router({
  mode: 'history', // 去掉URL中的#号
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
/*    {
      path: '/myTableList',
      name: 'page',
      component: Page
    }, */
    {
      path: '/myTableList',
      name: 'myTableList',
      component: MyTableList
    },
    {
      path: '/searchForm',
      name: 'searchForm',
      component: SearchForm
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/formTable',
      name: 'formTable',
      component: FormTable
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: Datepicker
    }
  ]
})
