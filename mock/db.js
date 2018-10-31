//

// module.exports = {
//   getComment: Mock.mock({
//     'error': 0,
//     'message': 'success',
//     'result|40': [{
//       'author': '@name',
//       'comment': '@cparagraph',
//       'date': '@datetime'
//     }]
//   }),
//   addComment: Mock.mock({
//     'error': 0,
//     'message': 'success',
//     'result|1': [{
//       'comment': '@cparagraph'
//     }]
//   })
// }

var api = require('../api')
console.log(api)
var Mock = require('mockjs')
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
  })
}
