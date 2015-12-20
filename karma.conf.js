'use strict';

module.exports = function(karma) {
	karma.set({
		frameworks : [ 'jasmine', 'browserify' ],
		files : [ 'app*/**/*-test.js' ],
		reporters : [ 'dots' ],
		preprocessors : {
			'app*/**/*-test.js' : [ 'browserify' ]
		},
//		browsers : [ 'Chrome' ],
		browsers : [ 'PhantomJS' ],
		// logLevel: 'LOG_DEBUG',
		singleRun : true,
		autoWatch : false,
		// browserify configuration
		browserify : {
			debug : false,
			transform : [ 'brfs', 'browserify-shim' ]
		}
	});
};
