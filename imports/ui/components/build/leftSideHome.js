import './leftSideHome.html';
// import './menuHome.js';

Template.leftSideHome.events({
  'click .openbtn':function () {
      document.getElementById("mySidenav").style.width = "16.66%";
    },
    'click .closebtn':function () {
      document.getElementById("mySidenav").style.width = "0px";
    },
     
  });