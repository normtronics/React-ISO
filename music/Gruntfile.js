

module.exports = function(grunt){
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	require('time-grunt')(grunt);

	var options = {
		config : {
			src: './tasks/*.*',
            pkg: grunt.file.readJSON('package.json')
		}
	}


	var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);


    grunt.registerTask('default', ['wiredep', 'browserSync', 'watch']);
    grunt.registerTask('build', ['less', 'browserify', 'uglify']);

}