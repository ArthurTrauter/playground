module.exports = function(grunt) {
	"use strict";

	// configuration
	grunt.initConfig({

		dir : {
			webapp : {
				src : 'src/main/webapp',
				dist : '<%= dir.dist %>/ui5-helloworld-app'
			},
			dist : 'target'
		},

		eslint : {
			app : ['<%= dir.webapp.src %>']
		}

	});

	// plugins provide tasks
	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask('default', ['eslint']);
};