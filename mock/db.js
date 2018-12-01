// var Mock = require('mockjs')
import Mock from 'mockjs'
var api = require('../api')
console.log(api)
module.exports = {
  ...api,
  getComment: Mock.mock({
    'error': 0,
    'message': 'success',
    'result|40': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  }),
  addComment: Mock.mock({
    'error': 0,
    'message': 'success',
    'result|5': [{
      'comment': '@cparagraph'
    }]
  }),
  // post/1 和post/2 返回不同的内容
  'posts': [{
      'id': 1,
      'title': 'json-server',
      'author': 'typicode'
    },
    {
      'id': 2,
      'title': 'json-server',
      'author': 'typicode'
    }
  ],
  'comments': [{
    'id': 1,
    'body': 'some comment',
    'postId': 1
  }],
  'profile': {
    'name': 'typicode'
  }
}
