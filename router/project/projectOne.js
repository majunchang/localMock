module.exports = {
  '/localMock/*': '/$1',
  '/localMock/getList': '/getList',
  '/localMock/getInfo': '/getInfo',
  /*
    如果没有'/localMock/*': '/$1',
    下面接口连接无法访问到
  */
  '/localMock/getInfo?123456+.2345.3434': '/getInfo'
}
