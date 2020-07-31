import './rightSide.html';

Template.rightSide.events({

  // 'click .openChatbtn': function () {
  //   document.getElementById("huggo").style.width = "10px";
  
  // },
  'click .btnClose': function () {
    document.getElementById("myChatnew").style.width = "16.66%";
    },
  // 'click .person': function () {
  //   document.getElementById("myChatnew").style.width = "75%";
  // },
  'click .utilitybtn': function () {
    document.getElementById("myChatnew").style.width = "100%";
  },
});
