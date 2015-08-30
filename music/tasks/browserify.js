module.exports = {
  dist: {
    files: {
      './.temp/temp-build.js': ["./src/*.js", "./src/components/*/*.js", "./src/*/*.js"]
    },
    options: {
      transform: ['babelify']
    }
  }
}