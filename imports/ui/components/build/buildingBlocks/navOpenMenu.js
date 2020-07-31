import './navOpenMenu.html';

let flag = 0;

Template.navOpenMenu.events({
  'click .openMenubtn': function toggle() {
    if (flag == 0) {
      document.getElementById("mySidenav").style.width = "16.66%";
      flag = 1;
    } else if (flag == 1) {
      document.getElementById("mySidenav").style.width = "0px";
      flag = 0;
    }
  }
});
//   Template.nav_open_menu.onrendered(function () {

//   });
// Template.nav_open_menu.events({
//     var flag = 0;
//     function toggle(){
//     if(flag==0){
//         document.getElementById("toggleDiv").style.width = "16.66%";
//         flag=1;
//     }
//     else if(flag==1){
//         document.getElementById("toggleDiv").style.width = "0px";
//         flag=0;
//     }
//     }
// });