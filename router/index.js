const test = require('./test/test')

module.exports = {
  ...test,
  '/comment/get.action': '/getComment',
  '/comment/add.action': '/addComment'
}
