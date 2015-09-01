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
    },
    express: {
      files:  ['./src/components/*.js', './src/pages/*.js', './*.js'],
      tasks:  [ 'express:dev' ],
      options: {
        spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
      }
    }
}