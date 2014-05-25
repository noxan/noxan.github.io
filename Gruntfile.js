module.exports = function(grunt) {
  grunt.initConfig({
    devserver: {
      server: {},
      options: {
        host: '0.0.0.0'
      }
    }
  });
  grunt.loadNpmTasks('grunt-devserver');
  grunt.registerTask('default', ['devserver']);
};
