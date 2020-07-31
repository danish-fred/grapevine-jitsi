import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '/imports/ui/pages/sideTop/sideTop.js';
import '/imports/ui/pages/business/business';
import '/imports/ui/pages/home/home.js';
import '/imports/ui/pages/not-found/not-found.js';
import '/imports/ui/layouts/body/body.js';

// setup SubsCache
window.SubsCache = new SubsCache(5, 10);

// Set up all routes in the app
FlowRouter.route('/', {
  action() {
    BlazeLayout.render('home', {
      top: '',
      left: '',
      main: 'login',
      right: ''
    });
  },
});
FlowRouter.route('/login', {
  action() {
    BlazeLayout.render('home', {
      top: '',
      left: '',
      main: 'login',
      right: ''
    });
  },
});
FlowRouter.route('/register', {
  action() {
    BlazeLayout.render('home', {
      top: '',
      left: '',
      main: 'register',
      right: ''
    });
  },
});

FlowRouter.route('/bazarHome', {  //     right_side
  name: 'bazar',
  action() {
    BlazeLayout.render('sideTop', { top: 'navbarBazar', left: 'leftMenuBazar', main: 'bazarHome', right: 'rightSide' });
  },
});


FlowRouter.route('/friendsTemplate', {
  action() {
    BlazeLayout.render('home', { top: 'friendsNavbar', left: '', main: 'friendsTemplate', right: 'right_side' });
  },
});
FlowRouter.route('/friendsItem', {
  action() {
    BlazeLayout.render('home', { top: 'friendsNavbar', left: '', main: 'friendsItem', right: 'right_side' });
  },
});
FlowRouter.route('/friendsList', {
  action() {
    BlazeLayout.render('home', { top: 'friendsNavbar', left: '', main: 'friendsList', right: 'right_side' });
  },
});
FlowRouter.route('/friendsDetails/:id', {
  action() {
    BlazeLayout.render('sideTop', { top: 'friendsNavbar', left: 'friendsTemplate', main: 'friendsDetails', right: 'right_side' });
  },
});
// FlowRouter.route('/userEshop', {
//   name: 'userEshop',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEshops', left: 'leftSideWall', main: 'userEshop', right: 'right_side' });
//   },
// });
// FlowRouter.route('/userEvents', {
//   name: 'userEvents',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarCreateEvents', left: 'leftSideWall', main: 'myEvents', right: 'right_side' });
//   },
// });
// FlowRouter.route('/userProfile', {
//   name: 'userProfile',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarProfile', left: 'leftSideWall', main: 'userProfile', right: 'right_side' });
//   },
// });
// FlowRouter.route('/myEvents', {
//   name: 'myEvents',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEvents', left: 'leftSideWall', main: 'myEvents', right: 'right_side' });
//   },
// });
// FlowRouter.route('/friends', {
//   name: 'friends',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarFriends', left: 'leftSideWall', main: 'friends', right: 'right_side' });
//   },
// });
// FlowRouter.route('/eShops', {
//   name: 'eShops',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEshops', left: 'leftMenuShops', main: 'eShops', right: 'rightSide' });
//   },
// });
// FlowRouter.route('/eShopsHome', {
//   name: 'shops',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEshops', left: 'leftMenuShops', main: 'eShopsHome', right: 'right_side' });
//   },
// });
// FlowRouter.route('/eShopsStart', {
//   name: 'shops',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEshops', left: 'leftMenuShops', main: 'eShopsStart', right: 'right_side' });
//   },
// });
// FlowRouter.route('/findFriends', {
//   name: 'findFriends',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_Wall', left: 'leftSideWall', main: 'findFriends', right: 'right_side' });
//   },
// });
// FlowRouter.route('/userFunds', {
//   name: 'userFunds',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarFunds', left: 'leftSideWall', main: 'funds', right: 'right_side' });
//   },
// });
// FlowRouter.route('/createEvents', {
//   name: 'create_events',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_events', left: 'leftSideWall', main: 'create_events', right: 'right_side' });
//   },
// });
// FlowRouter.route('/groups', {
//   name: 'groups',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_groups', left: 'left_side_groups', main: 'groups', right: 'right_side' });
//   },
// });
// FlowRouter.route('/myGroups', {
//   name: 'my_groups',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_groups', left: 'left_side_groups', main: 'my_groups', right: 'right_side' });
//   },
// });
// FlowRouter.route('/sports_groups', {
//   name: 'sports_groups',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_groups', left: 'left_side_groups', main: 'sports_groups', right: 'right_side' });
//   },
// });
// FlowRouter.route('/welcomeShopping', {
//   name: 'welcome_shopping',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_bazar', left: 'left_side_bazar', main: 'welcome_shopping', right: 'right_side' });
//   },
// });

// FlowRouter.route('/bazarStart', {  //     right_side
//   name: 'bazarStart',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarBazar', main: 'bazarStart', right: '' });
//   },
// });
// FlowRouter.route('/events', {
//   name: 'events',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarEvents', left: 'leftMenuEvents', main: 'events', right: 'right_side' });
//   },
// });
// FlowRouter.route('/eventsCategory', {
//   name: 'events_category',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_events_top', left: 'left_side_events', main: 'events_category', right: 'right_side' });
//   },
// });
// FlowRouter.route('/eventsDetail', {
//   name: 'events_detail',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbar_events_top', left: 'left_side_events', main: 'events_detail', right: 'right_side' });
//   },
// });
// FlowRouter.route('/eventsPlace', {
//   name: 'eventsPlace',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbareventsplace', left: 'left_side_events', main: 'events_place', right: 'right_side' });
//   },
// });
// FlowRouter.route('/arrowPage', {
//   name: 'arrowPage',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarAuctions', left: '', main: 'arrowPage', right: 'right_side'});
//   },
// });
// FlowRouter.route('/auction', {
//   name: 'auction',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarAuctions', left: 'leftAuctionRef', main: 'auction', right: 'right_side'});
//   },
// });
// FlowRouter.route('/auctionHome', {
//   name: 'auctionsHome',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarAuctions',  main: 'auctionHome', right: 'right_side' });
//   },
// });
// FlowRouter.route('/auctionStart', {
//   name: 'auctionStart',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarAuctions', main: 'auctionStart', right: 'right_side'});
//   },
// });

// FlowRouter.route('/proshopHome', {
//   name: 'proshopHome',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarProshop', left: 'leftMenuProshop', main: 'proshopHome', right: 'rightSide' });
//   },
// });
// FlowRouter.route('/proshop', {
//   name: 'proshop',
//   action() {
//     BlazeLayout.render('sideTop', { top: 'navbarProshop', left: 'leftMenuProshop', main: 'proshop', right: 'rightSide' });
//   },
// });

// FlowRouter.route('/proshopStart', {
//   name: 'proshopStart',
//   action() {
//     BlazeLayout.render('business', { top: 'navbarProshop', main: 'proshopStart', right: 'right_side' });
//   },
// });
// FlowRouter.route('/auctionTerms', {
//   name: 'auctionTerms',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbar_eshop',
//       left: '',
//       main: 'auction_terms',
//       right: 'right_side'
//     });
//   },
// });

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };


// FlowRouter.route('/menu_frontpage', {
//   name: 'menu_frontpage',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'admin_navbar',
//       left: 'leftside_menu',
//       main: 'menu_frontpage',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/register', {
//   name: 'register',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbar',
//       left: '',
//       main: 'register',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/bank', {
//   name: 'bank',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbar',
//       left: '',
//       main: 'bank',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/shops_menu_handle', {
//   name: 'shops_menu_handle',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'admin_navbar',
//       left: 'leftside_menu',
//       main: 'shops_menu_handle',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/events_menu_handle', {
//   name: 'events_menu_handle',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'admin_navbar',
//       left: 'leftside_menu',
//       main: 'events_menu_handle',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/auctions_menu_handle', {
//   name: 'auctions_menu_handle',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'admin_navbar',
//       left: 'leftside_menu',
//       main: 'auctions_menu_handle',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/socials_menu_handle', {
//   name: 'socials_menu_handle',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'admin_navbar',
//       left: 'leftside_menu',
//       main: 'socials_menu_handle',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/workshops', {
//   name: 'workshops',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftMenuWorkshops',
//       main: 'workshops',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/topicPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'topicPost', right: '' });
//   },
// });FlowRouter.route('/skillsPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'skillsPost', right: '' });
//   },
// });
// FlowRouter.route('/meetPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'meetPost', right: '' });
//   },
// });
// FlowRouter.route('/projectPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'projectPost', right: '' });
//   },
// });
// FlowRouter.route('/describtion', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'describtion', right: '' });
//   },
// });
// FlowRouter.route('/contestPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'contestPost', right: '' });
//   },
// });
// FlowRouter.route('/helpProject', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'helpProject', right: '' });
//   },
// });
// FlowRouter.route('/helpContest', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'helpContest', right: '' });
//   },
// });
// FlowRouter.route('/finalProjectPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'finalProjectPost', right: '' });
//   },
// });
// FlowRouter.route('/finalContestPost', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'finalContestPost', right: '' });
//   },
// });



// FlowRouter.route('/workshopsPostProject', {
//   name: 'workshopsPostProject',
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftMenuWorkshops',
//       main: 'workshopsPostProject',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/userWorkshops', {
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftSideWall',
//       main: 'userWorkshops',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/workshopsEmployment', {
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftSideWall',
//       main: 'workshopsEmployment',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/workshopsFreelance', {
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftSideWall',
//       main: 'workshopsFreelancer',
//       right: ''
//     });
//   },
// });
// FlowRouter.route('/workshopsProjects', {
//   action() {
//     BlazeLayout.render('sideTop', {
//       top: 'navbarWorkshops',
//       left: 'leftSideWall',
//       main: 'workshopsProject',
//       right: ''
//     });
//   },
// });

// FlowRouter.route('/projectDetails/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'projectDetails', right: '' });
//   },
// });
// FlowRouter.route('/ownerDetails/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'ownerDetails', right: '' });
//   },
// });
// FlowRouter.route('/freelancerDetails/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'freelancerDetails', right: '' });
//   },
// });
// FlowRouter.route('/jobDetails/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'jobDetails', right: '' });
//   },
// });
// FlowRouter.route('/workshopsDetails/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'workshopsDetails', right: '' });
//   },
// });
// FlowRouter.route('/projectChat/:id', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'projectChat', right: '' });
//   },
// });

// FlowRouter.route('/boardBids', {
//   action() {
//     BlazeLayout.render('business', {
//       top: 'navbarWorkshops', left: '', main: 'boardBids', right: '' });
//   },
// });


