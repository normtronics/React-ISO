module.exports = {
	options: {
      mangle: false
    },
	my_target: {
      files: {
        './public/build.js': ['./.temp/temp-build.js']
      }
    }
}

