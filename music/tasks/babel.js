module.exports = {
	options: {
      sourceMap: true
    },
    dist: {
      files: {
        "./.temp/temp-build.js": ["./src/*.js", "./src/components/*/*.js", "./src/pages/*.js"]
      }
    }
}