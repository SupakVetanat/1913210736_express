exports.index = (req, res, next) => {
    // res.send('Hallo Kitty');
    res.status(200).json({
      fullname:'Supak Vetanat'
    })
  }

exports.bio = (req, res, next) =>{
    res.status(200).json({
      fullname:'Supak Vetanat',
      nickname:'Fah',
      Hobby:'Sleep',
      gitusername:'SupakVetanat',
    })
  }