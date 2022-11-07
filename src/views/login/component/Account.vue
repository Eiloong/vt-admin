<template>
  <el-form size="large" class="login-content-form">
    <el-form-item class="login-animation1">
      <el-input type="text" v-model="form.username" />
    </el-form-item>
    <el-form-item class="login-animation2">
      <el-input type="password" v-model="form.password" />
    </el-form-item>
    <el-form-item class="login-animation3">
      <el-col :span="15">
        <el-input type="text" maxlength="4" v-model="form.code" clearable autocomplete="off">
          <template #prefix>
            <el-icon class="el-input__icon"><ele-Position /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="8">
        <el-button>1234</el-button>
      </el-col>
    </el-form-item>
    <el-form-item class="login-animation4">
      <el-button type="primary" @click="handleLogin" :loading="loading" round>登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import { initFrontEndControlRoutes } from '@/router/frontEnd'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
const form = reactive({
  username: 'admin',
  password: '123456',
  code: '1234'
})
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  let defaultRoles: Array<string> = []
  let defaultAuthBtnList: Array<string> = []
  const userInfos = vData(defaultRoles, defaultAuthBtnList)
  // 存储 token 到浏览器缓存
  // Session.set('token', Math.random().toString(36).substr(0))
  sessionStorage.setItem('token', Math.random().toString(36).substring(0))
  // 存储用户信息到浏览器缓存
  // Session.set('userInfo', userInfos)
  sessionStorage.setItem('userInfo', JSON.stringify(userInfos))
  // 1、请注意执行顺序(存储用户信息到vuex)
  userStore.setUserInfo(userInfos)
  // if (!themeStore.isRequestRoutes) {
  // 前端控制路由，2、请注意执行顺序
  await initFrontEndControlRoutes()
  signInSuccess()
  // } else {
  // 模拟后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
  // 添加完动态路由，再进行 router 跳转，否则可能报错 No match found for location with path "/"
  // await initBackEndControlRoutes()
  // 执行完 initBackEndControlRoutes，再执行 signInSuccess
  // signInSuccess()
  // }
}
// 登录成功后的跳转
const signInSuccess = () => {
  // 登录成功，跳到转首页
  // 添加完动态路由，再进行 router 跳转，否则可能报错 No match found for location with path "/"
  // 如果是复制粘贴的路径，非首页/登录页，那么登录成功后重定向到对应的路径中
  if (route.query?.redirect) {
    // router.push({
    //   path: <string>route.query?.redirect,
    //   query: Object.keys(<string>route.query?.params).length > 0 ? JSON.parse(<string>route.query?.params) : ''
    // })
    router.push('/home')
  } else {
    router.push('/')
  }
  // 关闭 loading
  loading.value = false
  ElMessage.success(`登录成功！`)
}
// 模拟数据
const vData = (defaultRoles: string[], defaultAuthBtnList: string[]) => {
  // admin 页面权限标识，对应路由 meta.roles，用于控制路由的显示/隐藏
  let adminRoles: Array<string> = ['admin']
  // admin 按钮权限标识
  let adminAuthBtnList: Array<string> = ['btn.add', 'btn.del', 'btn.edit', 'btn.link']
  // test 页面权限标识，对应路由 meta.roles，用于控制路由的显示/隐藏
  let testRoles: Array<string> = ['common']
  // test 按钮权限标识
  let testAuthBtnList: Array<string> = ['btn.add', 'btn.link']
  // 不同用户模拟不同的用户权限
  if (form.username === 'admin') {
    defaultRoles = adminRoles
    defaultAuthBtnList = adminAuthBtnList
  } else {
    defaultRoles = testRoles
    defaultAuthBtnList = testAuthBtnList
  }
  // 用户信息模拟数据
  const userInfos = {
    userId: 1,
    username: form.username,
    avatar:
      form.username === 'admin'
        ? 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg'
        : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg',
    roles: defaultRoles,
    authBtnList: defaultAuthBtnList
  }
  return userInfos
}
</script>

<style scoped lang="scss">
.el-button {
  width: 100%;
}
.login-content-form {
  margin-top: 20px;
  @for $i from 1 through 4 {
    .login-animation#{$i} {
      opacity: 0;
      animation-name: error-num;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-delay: calc($i/10) + s;
    }
  }
  .el-form-item--large .el-form-item__content {
    line-height: 0;
  }
}
@keyframes error-num {
  0% {
    transform: translateY(60px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
