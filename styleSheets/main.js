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
        { title: '--', description: '--', sourceName:'ChainReaction' },
        { title: '--', description: '--', source:'https://github.com/garrettmemmer', sourceName:'Draughts' },
        { title: '--', description: '--', source:'https://github.com/garrettmemmer', sourceName:'Reversi' },
        { title: 'Choice', description: '--', source:'https://github.com/garrettmemmer', sourceName:'Choice' },
        { title: 'Static Yahoo Front Page', description: '--', source:'https://github.com/garrettmemmer', sourceName:'Static Yahoo' },
        { title: 'CampusAlly', description: '--', source:'https://github.com/garrettmemmer', sourceName:'CampusAlly' },
      ],
      
      skills: [
        { title: 'Programming Languages', description:'I am proficient in the following languages C++, Java, JavaScript, Assembly, HTML and CSS and the JavaScript framework Vue.js. I am adequate in the use of Python.' },
        { title: 'Computer Literacy', description:'I started using computers at a young age and developed an interest in working with different devices running various operating systems and programs. Whenever my friends or family has computer concerns or just need advice they usually call me.' },
        { title: 'Critical Thinking', description:'The ability to quickly analyze a problem and figure out a solution is very valuable. I try to increase my critical thinking skills by asking questions, putting myself in other people\'s shoes, joining coding competitions, solving problems on Project Euler and HackerRank.'},
        { title: 'Willingness to Learn', description:'During my internship at Edward Jones I taught myself how to program in Java and familiarized myself with their development processes and tools. I also learned how to program in other languages outside of class.' },
      ],
      
      about: [
        { title: 'About Me', description: 'My name is Garrett Memmer and I am a computer science graduate with a passion for all things computers. I enjoy programming, learning new ideas and working with electronics. During my free time I workout, read science fiction, and play.'},
        { title: 'Git Repository', description: 'My github is found at:', source:'https://github.com/wayneanam', sourceName:'Github' },
        { title: 'Email Address', description: 'My email address is found at:', source:'mailto:wayneanam@yahoo.com', sourceName:'Email' },
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
