module.exports = {
	combined_file_output: {
      files: {
        './public/build.js': [
          './src/*.jsx',
          './src/components/*/*.jsx'
        ]
      }
    }
}