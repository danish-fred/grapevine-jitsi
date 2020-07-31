import './navOpenChat.html';

let flag = 0;

Template.navOpenChat.events({
  'click .openChatbtn': function toggle() {
    // if (flag == 0) {
    //   document.getElementById("myChatnav").style.width = "16.66%";
    //   flag = 1;
      
    // } else if (flag == 1) {
    //   document.getElementById("myChatnav").style.width = "0px";
    //   flag = 0;
    // }
 
   if (flag == 0) {
      document.getElementById("myChatnew").style.width = "300px";
      flag = 1;
      
    } else if (flag == 1) {
      document.getElementById("myChatnew").style.width = "0px";
      flag = 0;
    } },
});