# Countdown Pad
# 倒计时面板

**This is a UI component made for Wechat miniprogram**

**这是一个微信小程序使用的 UI 组件**

## Brief

## 简介

![Demo](https://github.com/Elenionl/discount-pad/blob/master/demo/demo.gif?raw=true)

This countdown pad can automatically calculate and disply time as seted. If needed, time can count down automatically. 

All time change has a scroll animation.

本倒计时面板支持根据设置的时长，自动换算并展示对应的时间，还支持数字自动减小。

所有数字变化都自带滚动动画。

## Install

## 安装

Add line bellow to the `package.json` in your project directory:

在工程文件夹下的 `package.json` 文件中添加如下代码：

``` JSON
{
  ...
  "dependencies": {
    ...
    "countdown-pad": "^1.0.2",
    ...
  },
  ...
}
```

Then follow the instruction in [this document](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

然后按照如下[文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)操作。

## Use

## 使用

Add lines bellow to JSON file (like `pageOrComponentName.json`) of the page or component you want to use this component.

在你希望使用本组件的页面或组件的 `JSON` 配置文件 `pageOrComponentName.json` 中添加下面的代码：

``` JSON
{
  ...
  "usingComponents": {
    "countdown-pad": "countdown-pad",
  }
  ...
}
```

Add line as follow to `WXML` file like `pageOrComponentName.wxml` to add component to display:

在你希望使用本组件的页面或组件的 `WXML` 文件，例如 `pageOrComponentName.wxml` 添加如下代码：

```HTML
<countdown-pad time='1434000' autoCount/>
```

## Parameters

## 参数说明

* `time: Number`

`default value: 0`

Time left to disply in ms.

用于展示的剩余时间（单位：毫秒）

* `autoCount: Boolean`

`default value: false`

if `autoCount` is set as `true`, the countdown pad will automatically count down from the `time` value.

Otherwise you should set the `time` value by yourself once the time change, value change is always with an animation.

如果将 `autoCount` 设置为 `true`, 本组件会自动进行倒计时。否则，本组组件不会自动倒计时，这时可以定期设置新的时间来变更显示，所有时间变更都会有动画。