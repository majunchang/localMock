var Mock = require('mockjs')
let test = {
  getme: {
    name: 'xiaoming',
    age: 19,
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
