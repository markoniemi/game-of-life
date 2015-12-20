'use strict';

module.exports = function(karma) {
	karma.set({
		frameworks : [ 'jasmine', 'browserify' ],
		files : [ 'app*/**/*-test.js' ],
		reporters : [ 'dots' ],
		preprocessors : {
			'app*/**/*-test.js' : [ 'browserify' ]
		},
		browsers : [ 'Chrome' ],
//		browsers : [ 'PhantomJS' ],
		// logLevel: 'LOG_DEBUG',
		singleRun : false,
		autoWatch : true,
		// browserify configuration
		browserify : {
			debug : true,
			transform : [ 'brfs', 'browserify-shim' ]
		}
	});
};
