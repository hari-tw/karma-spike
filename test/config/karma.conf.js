module.exports = function(config) {
	config.set({
		basePath: '../../',
		frameworks: ['jasmine', 'requirejs'],
		files: [
			{pattern: 'angular-requirejs-seed/app/js/*.js', included: false},
			{pattern: 'angular-requirejs-seed/app/js/**/*.js', included: false},
			// {pattern: 'test/unit.js', included: false},
			{pattern: 'test/unit/*.js', included: false},
			{pattern: 'test/unit/**/*.js', included: false},
			{pattern: 'angular-requirejs-seed/bower_components/**/*.js', included: false},
			// needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
			'test/main-test.js'
	],

	autoWatch: true,

	LogLevel: config.LOG_DEBUG,

	browsers: ['Chrome'],

	junitReporter: {
		outputFile: 'test_out/unit.xml',
		suite: 'unit'
	}
	});
};
