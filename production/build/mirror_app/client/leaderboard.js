if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['/Users/jrgrafton/Desktop/shortly/production/app/client/leaderboard.js']) {
   __coverage__['/Users/jrgrafton/Desktop/shortly/production/app/client/leaderboard.js'] = {"path":"/Users/jrgrafton/Desktop/shortly/production/app/client/leaderboard.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":13}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":47}}},"3":{"name":"(anonymous_3)","line":8,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":53}}},"4":{"name":"(anonymous_4)","line":13,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":43}}},"5":{"name":"(anonymous_5)","line":18,"loc":{"start":{"line":18,"column":27},"end":{"line":18,"column":39}}},"6":{"name":"(anonymous_6)","line":24,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":29}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":29,"column":5}},"2":{"start":{"line":4,"column":4},"end":{"line":6,"column":6}},"3":{"start":{"line":5,"column":8},"end":{"line":5,"column":62}},"4":{"start":{"line":8,"column":4},"end":{"line":11,"column":6}},"5":{"start":{"line":9,"column":8},"end":{"line":9,"column":69}},"6":{"start":{"line":10,"column":8},"end":{"line":10,"column":37}},"7":{"start":{"line":13,"column":4},"end":{"line":15,"column":6}},"8":{"start":{"line":14,"column":8},"end":{"line":14,"column":77}},"9":{"start":{"line":17,"column":4},"end":{"line":21,"column":7}},"10":{"start":{"line":19,"column":12},"end":{"line":19,"column":79}},"11":{"start":{"line":23,"column":4},"end":{"line":27,"column":7}},"12":{"start":{"line":25,"column":12},"end":{"line":25,"column":53}}},"branchMap":{"1":{"line":10,"type":"binary-expr","locations":[{"start":{"line":10,"column":15},"end":{"line":10,"column":21}},{"start":{"line":10,"column":25},"end":{"line":10,"column":36}}]},"2":{"line":14,"type":"cond-expr","locations":[{"start":{"line":14,"column":61},"end":{"line":14,"column":71}},{"start":{"line":14,"column":74},"end":{"line":14,"column":76}}]}}};
}
var __cov_y$3JVrDYm7oLtpHCw$5HPA = __coverage__['/Users/jrgrafton/Desktop/shortly/production/app/client/leaderboard.js'];
__cov_y$3JVrDYm7oLtpHCw$5HPA.s['1']++;(function(){'use strict';__cov_y$3JVrDYm7oLtpHCw$5HPA.f['1']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['2']++;Template.leaderboard.players=function(){__cov_y$3JVrDYm7oLtpHCw$5HPA.f['2']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['3']++;return Players.find({},{sort:{score:-1,name:1}});};__cov_y$3JVrDYm7oLtpHCw$5HPA.s['4']++;Template.leaderboard.selected_name=function(){__cov_y$3JVrDYm7oLtpHCw$5HPA.f['3']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['5']++;var player=Players.findOne(Session.get('selected_player'));__cov_y$3JVrDYm7oLtpHCw$5HPA.s['6']++;return(__cov_y$3JVrDYm7oLtpHCw$5HPA.b['1'][0]++,player)&&(__cov_y$3JVrDYm7oLtpHCw$5HPA.b['1'][1]++,player.name);};__cov_y$3JVrDYm7oLtpHCw$5HPA.s['7']++;Template.player.selected=function(){__cov_y$3JVrDYm7oLtpHCw$5HPA.f['4']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['8']++;return Session.equals('selected_player',this._id)?(__cov_y$3JVrDYm7oLtpHCw$5HPA.b['2'][0]++,'selected'):(__cov_y$3JVrDYm7oLtpHCw$5HPA.b['2'][1]++,'');};__cov_y$3JVrDYm7oLtpHCw$5HPA.s['9']++;Template.leaderboard.events({'click input.inc':function(){__cov_y$3JVrDYm7oLtpHCw$5HPA.f['5']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['10']++;Players.update(Session.get('selected_player'),{$inc:{score:5}});}});__cov_y$3JVrDYm7oLtpHCw$5HPA.s['11']++;Template.player.events({'click':function(){__cov_y$3JVrDYm7oLtpHCw$5HPA.f['6']++;__cov_y$3JVrDYm7oLtpHCw$5HPA.s['12']++;Session.set('selected_player',this._id);}});}());