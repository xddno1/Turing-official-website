(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[7],{613:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return l}));var o=a(75),r=a(76),n=a(78),c=a(77),s=a(0),u=a(235),i=a.n(u),d=(a.p,a(6)),l=function(t){Object(n.a)(a,t);var e=Object(c.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).state={teamintroduct:{},teacherguobao:{},preFourAwards:{},preFourTeamActivity:{}},i.a.get("http://150.158.171.105:8080/guest/introduction").then((function(t){var e=t.data.data[0];r.setState({teamintroduct:e})})),console.log(1),i.a.get("http://150.158.171.105:8080/guest/teacher/getTeacherById/1").then((function(t){var e=t.data.data;r.setState({teacherguobao:e})})),i.a.get("http://150.158.171.105:8080/guest/award/getAllAwards").then((function(t){var e=t.data.awards.slice(-4);console.log(e),r.setState({preFourAwards:e})})),r}return Object(r.a)(a,[{key:"render",value:function(){var t=this.state,e=t.teamintroduct,a=t.teacherguobao,o=t.preFourAwards,r=t.preFourTeamActivity;return console.log(e),console.log(a),console.log(o),console.log(r),Object(d.jsx)("h1",{children:"\u7ef4\u62a4\u4e2d..."})}}]),a}(s.Component)}}]);
//# sourceMappingURL=7.7d9f8d85.chunk.js.map