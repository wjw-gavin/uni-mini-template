# 使用须知

## 集成 unocss

- [unocss](https://github.com/unocss/unocss)
- [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp)

## 内置 css

详情见 [src/assets/style/common.scss](https://github.com/wjw-gavin/uni-mini-template/blob/main/src/assets/style/common.scss)

## tabbar 底部导航栏

建议把底部导航栏列表写在`store`中，方便引用和修改。

## 安全区适配

这里提供两种方式：

1. 自己编写 css，如底部安全区类名：`.safe-area-inset-bottom`，则：

```css
.safe-area-inset-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

顶部安全区同理。

2. uView 提供了组件`u-safe-bottom`和`u-status-bar`分别对应底部和顶部安全区。
