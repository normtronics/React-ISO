module.exports = {
	dev: {
        bsFiles: {
            src : [
                   './public/*.css',
                   './piblic/*.js'
              	]
        },
        options: {
            watchTask: true,
            server: './public'
        }
    }
}