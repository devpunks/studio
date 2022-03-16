export default {
  apps: [
    {
      name: 'Studio',
      script: 'node .',
      watch:
        [ '.' ],
      ignore_watch:
        [ 'node_modules' ],
      env:
        { NODE_ENV: 'development' }
    },
  ]
}
