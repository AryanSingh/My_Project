module.exports = function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/styles.css': 'assets/stylesheets/src/styles.scss',
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/services.css':'assets/stylesheets/src/services.scss',
          'assets/stylesheets/about.css':'assets/stylesheets/src/about.scss',
          'assets/stylesheets/portfolio.css':'assets/stylesheets/src/portfolio.scss',
          'assets/stylesheets/testimonials.css':'assets/stylesheets/src/testimonials.scss',
          'assets/stylesheets/contact.css' :'assets/stylesheets/src/contact.scss',
          'assets/stylesheets/footer.css' : 'assets/stylesheets/src/footer.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', "cssmin"]
        
      }
    },
    // concat: {
    //   css: {
    //     src: ['assets/stylesheets/common.css', 'assets/stylesheets/land.css'],
    //     dest: 'assets/stylesheets/app.css',
    //   }  
    // },
    cssmin: {
      
      target: {
        files: {
          'assets/stylesheets/app.min.css': 
          [
          'assets/stylesheets/styles.css' ,
          'assets/stylesheets/common.css',
          'assets/stylesheets/services.css',
          'assets/stylesheets/about.css',
          'assets/stylesheets/portfolio.css',
          'assets/stylesheets/testimonials.css',
          'assets/stylesheets/contact.css',
          'assets/stylesheets/footer.css'
          // 'assets/stylesheets/about.css',
          // 'assets/stylesheets/how_it_works.css',
          // 'assets/stylesheets/services.css',
          // 'assets/stylesheets/contact.css' 
          ]
        }
      }
    }
    
     
  });
  // grunt.registerTask('speak',function() {
  //   console.log("Grunt is speaking!")
  // })
  // grunt.registerTask('shout',function(){
  //   console.log("Grunt is shouting!");
  // })
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch']);
  // , 'cssmin', 'watch'])
};
        