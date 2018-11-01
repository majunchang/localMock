// var Mock = require('mockjs')
import Mock from 'mockjs'
var obj = {
  name: '11',
  age: 22
}

let test = {
  getme: {
    name: 'xiaohong',
    age: 21,
    gender: '男',
    xuexi: 'cha11'
  },
  getshe: Mock.mock({
    'error': 0,
    'message': 'success',
    'result|5': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  })
}

module.exports = {
  ...test
}
