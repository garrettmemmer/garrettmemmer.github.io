var arg = new Vue({
    el: '#wrap',
    
    data: {
      name: 'Garrett Memmer',

      //currentTitle: 0,
      activeIndex: 0,

      navs: [
        { title: 'Projects', temp: "useless string" },
        { title: 'Skills' },
        { title: 'About Me' },
      ],
      
      temps: [
       { title: '', description: '', source:'', sourceName:''},
      ],
      
      projects: [
        { title: 'This Portfolio Site', description: 'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.', source:'https://github.com/garrettmemmer/garrettmemmer.github.io', sourceName:'Portfolio' },
        { title: 'Robotic Arm', description: 'Partnered with a small team of 3 to design, build, and program a robotic arm with the goal of the arm to reach out, grab three cans, and move them across the desk. For this project we implemented the arms movement logic using C and inverse kinematics in order to calculate how far the arm must reach out to grab each can and how far it must reach back to place the can in a different location. The scope of this project included designing the architecture of the arm, writing the code to perform the actions, and taking outside variables into account variables like weight as well as power required in order to move the arm and the cans.' },
        { title: 'Upgrading Video Game AI', description: 'Partnered with a small group of 3 to implement Minimax with Alpha-Beta pruning into a computer game that was built with Java. Our efforts resulted in a more difficult game and the CPU achieving a better win ratio from 10% to 35% of games played vs. humans.', source:'https://github.com/garrettmemmer/minimaxFireEmblem', sourceName:'MiniMax Implementation' },
        { title: 'GameDev@IU', description: 'While in school at Indiana University I was in a club called GameDev@IU where we formed groups from all different disciplines to develop video games. My group decided to created a Top-Down Shooter where a boy is struggling to save a lost cub from poachers in a forest. A few of my key contributions to the team were the different enemy AI as well as the boss level. ', source:'https://github.com/garrettmemmer/Ekter-Cub', sourceName:'Ekter and the Cub' },
        { title: '--', description: '', source:'https://github.com/garrettmemmer', sourceName:'--' },
        { title: '--', description: 'TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST ', source:'https://github.com/garrettmemmer', sourceName:'--' },
      ],
      
      skills: [
        { title: 'TEST', description:'TEST TEST TEST TEST' },
        { title: '--', description:'This site will hold all of the projects that I have completed/am already working on. It was created with a javascript framework called Vue.js and is constantly updated.' },
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
        //console.log(index);  just for testing
        if(index == 0) {
          this.temps = this.projects;
        }
        else if(index == 1) {
          this.temps = this.skills;
        }
        else if(index == 2) {
          this.temps = this.about;
        }  
        this.activeIndex = index
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