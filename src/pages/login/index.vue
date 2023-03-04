<template>
  <view>
    <view class="px-7 mt-10">
      <view class="form-item">
        <u-input
          v-model="form.mobile"
          type="digit"
          placeholder="请输入手机号"
          border="none"
          shape="circle"
          maxlength="11"
          font-size="20px"
          clearable
        />
      </view>
      <view class="mt-5 form-item">
        <u-input
          v-model="form.code"
          type="digit"
          placeholder="请输入验证码"
          border="none"
          shape="circle"
          maxlength="4"
          font-size="20px"
        >
          <template slot="suffix">
            <u-code ref="uCode" seconds="60" change-text="Xs" @change="codeChange" />
            <text class="text-34 text-primary" @tap="getCode">
              {{ tips }}
            </text>
          </template>
        </u-input>
      </view>
      <view class="mt-10">
        <u-button
          type="primary"
          text="登录"
          shape="circle"
          size="large"
          :disabled="disabled"
          @click="handleLogin"
        />
      </view>
    </view>
    <view class="flex-center px-10 mt-8">
      <u-checkbox-group v-model="checked">
        <u-checkbox :name="1" shape="circle" />
      </u-checkbox-group>
      <view
        class="text-24 ml-3 leading-4 text-gray-4"
        @click="checked = checked.length > 0 ? [] : [1]"
      >
        未注册手机号授权后将自动创建新账号，并视为您同意
        <text class="text-primary" @click.stop="goPrivacy">
          《用户协议》
        </text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked: [],
      tips: '',
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {
    disabled() {
      return !(
        uni.$u.test.mobile(this.form.mobile) && uni.$u.test.code(this.form.code, 4)
      )
    }
  },
  methods: {
    // 验证码
    getCode() {
      if (!this.$u.test.mobile(this.form.mobile)) {
        this.$u.toast('请输入正确的手机号')
        return false
      }
      if (this.$refs.uCode.canGetCode) {
        this.$loading(true, '正在获取验证码')
        getCode({ mobile: this.form.mobile }).then((res) => {
          this.form.code = res.data
          this.$loading(false)
          uni.$u.toast('验证码已发送')
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start()
        })
      } else {
        uni.$u.toast('倒计时结束后再发送')
      }
    },

    codeChange(text) {
      this.tips = text
    },

    // 验证码登录
    handleLogin() {
      if (this.checked.length === 0) {
        uni.$u.toast('请先阅读并同意用户协议')
        return false
      }
      this.loginFun()
    },

    loginFun() {
      this.$u.toast('跳转首页')
      // uni.reLaunch({
      //   url: 'your path'
      // })
    },

    // 隐私协议
    goPrivacy() {
      this.$u.toast('补充用户协议')
    }
  }
}
</script>

<style>
page {
  background-color: #fff;
}
</style>

<style scoped lang="scss">
.form-item::v-deep {
  .u-input {
    height: 30px;
    background: #f3f5f7;
    padding: 12px 30px !important;
  }
}
</style>
