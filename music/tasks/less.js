module.exports = {
	development: {
		options: {
			compress: true,
			yuicompress: true,
			optimization: 2
		},
		files: {
	        "./public/build.css": ["./src/less/*.less", "./src/components/*/*.less", "./src/pages/*/*.less"]// destination file and source file
	    }
    }
}