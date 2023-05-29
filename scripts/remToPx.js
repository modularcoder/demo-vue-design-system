const path = require('path')
const fs = require('fs')
const filePath = path.resolve(__dirname, '../tailwind.config.px.js')

const reg = /[+-]?([0-9]*[.])?[0-9]+rem/gi


fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  let result = data;
  const arr = result.match(reg);

  console.log('arr', arr)

  arr.forEach(item => {
    result = result.replace(item, (parseFloat(item) * 16)  + 'px')
  })

  console.log('result', result);

  // const lines = data.split("\n")
  // const result = remtopx(data)
  // console.log('result', lines.length)
  // lines.forEach(line => {
  // })

  fs.writeFile(filePath, result, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
