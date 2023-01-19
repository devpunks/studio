import fs from 'fs'
import postcss from 'postcss'
import atImport from 'postcss-import'

const file = fs
  .readFileSync("./index.css", "utf8")

const { css } = await postcss()
  .use( atImport() )
  .process( file, {
    // `from` option is needed here
    from: "./index.css"
  })

console.log( css )
