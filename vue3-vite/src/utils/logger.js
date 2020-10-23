/*
 * @Author: LiangYagen
 * @Date: 2020-10-19 10:55:44
 * @LastEditTime: 2020-10-19 17:25:50
 * @FilePath: /MicServer-ui/src/utils/logger.js
 */
// 类型 - 原因 - 建议 - 时间 - 报错人姓名/工号

// chalk字典 方法
const _chalkDict = {
  bright: '\x1B[1m', // 亮色
  grey: '\x1B[2m', // 灰色
  black: '\x1B[30m', // 黑色
  red: '\x1B[31m', // 红色
  green: '\x1B[32m', // 绿色
  yellow: '\x1B[33m', // 黄色
  blue: '\x1B[34m', // 蓝色
  magenta: '\x1B[35m', // 品红
  cyan: '\x1B[36m', // 青色
  white: '\x1B[37m', // 白色
  blackBG: '\x1B[40m', // 背景色为黑色
  redBG: '\x1B[41m', // 背景色为红色
  greenBG: '\x1B[42m', // 背景色为绿色
  yellowBG: '\x1B[43m', // 背景色为黄色
  blueBG: '\x1B[44m', // 背景色为蓝色
  magentaBG: '\x1B[45m', // 背景色为品红
  cyanBG: '\x1B[46m', // 背景色为青色
  whiteBG: '\x1B[47m' // 背景色为白色
}

// 过期时间 1天 过期的logger清除掉
const _OUTTIME = 60 * 60 * 24

// 获取时间年月日
const _getLocalTime = function (nS) {     
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}

// 过滤过期报错文案
const _filterOutTimeText = function (textArray) {
  // 过期时间等于当前时间减去过期时间常量
  const outTime = Math.floor(new Date().getTime() / 1000) - _OUTTIME
  return textArray.filter(item => item.time > outTime)
}

// 取出报错文案
const _getErrorTexts = function (localName = 'micServeLogger') {
  // 取出已经存入的报错文案
  let _micServeLogger = localStorage.getItem(localName)

  if (_micServeLogger) {
    _micServeLogger = _filterOutTimeText(JSON.parse(_micServeLogger))
  } else {
    _micServeLogger = []
  }

  return _micServeLogger
}

/**
 * @description: 生成规范报错文案
 * @param {object} origin 文案信息
 * @param {object} useInfo 上报人信息
 * @param {date} time 上报人时间
 */
const errorText = function(origin = {}, useInfo, time) {
  const _time = time || Math.floor(new Date().getTime() / 1000)
  // 取出文案对象
  const { typeDesc, originDesc, suggestDesc } = origin

  let _text = `问题类型：${typeDesc}, 产生原因: ${originDesc}, 建议: ${suggestDesc}, 报错时间: ${_getLocalTime(_time)}`

  // 如果传入上报人则拼接
  if (useInfo && typeof(useInfo) == 'object') {
    const { name, no } = useInfo

    _text += `, 上报人: ${name}/${no}`
  }

  return `
  --------------------------------------------------------------------------------------------------
   ${_text}
  --------------------------------------------------------------------------------------------------
  `
}

/**
 * @description: 输出logger
 * @param {string} text 文案
 * @param {string} color 文字颜色
 */
const logger = function (text, color = 'black') {
  const _color = _chalkDict[color]
  console.log(`${_color}${text}\x1B[0m`)
}

/**
 * @description: 存入logger
 * @param {object} useInfo 报错人 包括姓名、工号
 */
const setLogger = function (origin, useInfo) {
  // 取出已经存入的报错文案
  let _micServeLogger = _getErrorTexts()

  // 取出文案对象
  const time = Math.floor(new Date().getTime() / 1000)
  const text = errorText(origin, useInfo, time)

  // 存入报错文案
  _micServeLogger.push({
    time,
    text
  })
  localStorage.setItem('micServeLogger', JSON.stringify(_micServeLogger))
}

// 取出logger
const getLogger = function () {
  const _micServeLogger = _getErrorTexts()
  return _micServeLogger
}

export {
  errorText,
  logger,
  setLogger,
  getLogger
}