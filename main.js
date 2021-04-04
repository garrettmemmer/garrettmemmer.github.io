var arg = new Vue({
    el: '#wrap',
    
    data: {
      name: 'Garrett Memmer',
      
      navs: [
        { title: 'Projects' },
        { title: 'Skills' },
        { title: 'About Me' },
      ],
      
      temps: [
       { title: '', description: '', source:'', sourceName:''},
      ],
      
      projects: [
        { title: 'Portfolio', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'', sourceName:'Portfolio' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaThis site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer', sourceName:'--' },
      ],
      
      skills: [
        { title: '--', description:'--' },
        { title: '--', description:'--' },
        { title: '--', description:'--' },
        { title: '--', description:'--' },
      ],
      
      about: [
        { title: 'About Me', description: 'My name is Garrett Memmer and I am a computer science graduate with a passion for all things computers. I enjoy programming, learning new ideas and working with electronics. During my free time I workout, read science fiction, and play video games.'},
        { title: 'Git Repository', description: 'My github is found at:', source:'https://github.com/garrettmemmer', sourceName:'Github' },
        { title: 'Email Address', description: 'My email address is found at:', source:'mailto:garrettmemmer@gmail.com', sourceName:'mailto:garrettmemmer@gmail.com' },
      ]     
    },
    
    methods: {
      changeNav: function(index) {
        console.log(this.$parent);
        if(index == 0) {
          this.temps = this.projects;
        }
        else if(index == 1) {
          this.temps = this.skills;
        }
        else if(index == 2) {
          this.temps = this.about;
        }
      },
    },
  
    ready: function() {
      this.temps = this.projects;
    },
    
  })


  window.addEventListener("scroll", function() {
    let mainNav = document.getElementById("mainNav");
  
    if (window.pageYOffset > 0) {
      mainNav.classList.add("is-sticky");
    } else {
      mainNav.classList.remove("is-sticky");
    }
  });