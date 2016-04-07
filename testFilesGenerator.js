require('shelljs/global')
var path = require('path')
var fs = require('fs')

// CONTEXT
// Give a file structure
// src
// test
// this script will generate test files via src

var srcFiles = find('-type f', path.join(__dirname, 'src'))
var files = []
srcFiles.filter(function(e) {
  if(e.slice(e.length -2) !== 'js') {
    mkdir('-p', path.join(__dirname, 'test', e.slice(53)))
  }
  else {
    files.push(e.slice(53))
  }
})

files.map(function(e) {
    var file = e.split('/')
    fs.writeFile(path.join(__dirname, 'test', (e.split('.js')[0] += '.test.js')), `import '${ (file[file.length - 1]).split('.')[0] }' from '${ e.split('.')[0] }'`,(err) => {
      if (err) throw err;
      console.log('It\'s saved!')
    })
})

// `import ${ fileName } from '${ relativePath/fileName }'`
