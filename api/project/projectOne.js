let projectOne = {
  'getList': {
    code: '0',
    data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }]
  },
  getInfo: {
    error_no: 0,
    errMessage: '',
    data: {
      info: {
        'name': 'BeJson',
        'url': 'http://www.bejson.com',
        'page': 88,
        'isNonProfit': true,
        'address': {
          'street': '科技园路.',
          'city': '江苏苏州',
          'country': '中国'
        },
        'links': [{
          'name': 'Google',
          'url': 'http://www.google.com'
        },
        {
          'name': 'Baidu',
          'url': 'http://www.baidu.com'
        },
        {
          'name': 'SoSo',
          'url': 'http://www.SoSo.com'
        }
        ]
      }
    }
  }
}

module.exports = {
  ...projectOne
}
