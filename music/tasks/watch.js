module.exports = {
	styles: {
        files: ['./src/less/*.less', './src/components/*.less', './src/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
    },
    scripts: {
    	files: ['./src/*.js', './src/components/*.js', './src/pages/*.js'],
    	tasks: ['browserify', 'uglify'],
    	options: {
    		nospawn: true
    	}
    }
}