/*global describe beforeEach it expect */

define([
	'controllers/myctrl2'
], function(myctrl) {
	'use strict';

	describe('my control', function() {
		describe('some test', function() {
			it('should return current version', function() {
				expect(true).toBeTruthy();
			});
		});
	});
});