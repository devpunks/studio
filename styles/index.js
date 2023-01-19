// dependencies
import fs from 'fs'
import postcss from 'postcss'
import atImport from 'postcss-import'

const file = fs
  .readFileSync("./index.css", "utf8")

postcss()
  .use( atImport() )
  .process( css, {
    // `from` option is needed here
    from: "./index.css"
  })
  .then((result) => {
    const output = result.css

    console.log(output)
  })
