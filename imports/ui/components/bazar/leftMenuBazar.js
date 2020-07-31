import './leftMenuBazar.html';

Template.leftMenuBazar.events({
    'click .openbtn':function () {
        document.getElementById("mySidenav").style.width = "16.66%";
      },
      'click .closebtn':function () {
        document.getElementById("mySidenav").style.width = "0px";
      },
       
    });