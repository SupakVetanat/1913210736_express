const data = [{
  id: 1,
  name: 'Ministry of Digital Economy and Society.',
  address: {
      province: 'Bangkok',
      postcode: 10210
  }
},{
  id: 2,
  name: 'Google Thailand',
  address: {
      province: 'Bangkok',
      postcode: 10330
  }
},{
  id: 3,
  name: 'Facebook Thailand',
  address: {
      province: 'Bangkok',
      postcode: 10330
  }
},
]

exports.index = (req, res, next) => {
    // res.send('Hallo Kitty');
    res.status(200).json({
      data: data
    })
  }