<template>
  <el-form size="large" class="login-content-form">
    <el-form-item class="login-animation1">
      <el-input type="text" :placeholder="'message.mobile.placeholder1'" v-model="mobile" clearable autocomplete="off">
        <template #prefix>
          <i class="iconfont icon-dianhua el-input__icon"></i>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="login-animation2">
      <el-col :span="15">
        <el-input
          type="text"
          maxlength="4"
          :placeholder="'message.mobile.placeholder2'"
          v-model="code"
          clearable
          autocomplete="off"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><ele-Position /></el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="8">
        <el-button class="login-content-code">message.mobile.codeText</el-button>
      </el-col>
    </el-form-item>
    <el-form-item class="login-animation3">
      <el-button round type="primary" class="login-content-submit">
        <span>message.mobile.btnText</span>
      </el-button>
    </el-form-item>
    <div class="font12 mt30 login-animation4 login-msg">message.mobile.msgText</div>
  </el-form>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent } from 'vue'

// 定义接口来定义对象的类型
interface LoginMobileState {
  mobile: string | number
  code: string | number | undefined
}

export default defineComponent({
  name: 'LoginMobile',
  setup() {
    const mobileForm = reactive<LoginMobileState>({
      mobile: '',
      code: ''
    })
    return {
      ...toRefs(mobileForm)
    }
  }
})
</script>

<style scoped lang="scss">
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
  .login-content-code {
    width: 100%;
    padding: 0;
  }
  .login-content-submit {
    width: 100%;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 15px;
  }
  .login-msg {
    color: var(--el-text-color-placeholder);
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
