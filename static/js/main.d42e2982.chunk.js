(this.webpackJsonpcolorclock=this.webpackJsonpcolorclock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),a=n(2),i=n.n(a),r=(n(12),n(3)),l=n(4),s=n(6),u=n(5),v=(n(13),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={time:""},t.timeHandler=function(){var e=new Date,n=e.getHours();n<10&&(n="0".concat(n));var c=e.getMinutes();c<10&&(c="0".concat(c));var o=e.getSeconds();o<10&&(o="0".concat(o));var a="".concat(n).concat(c).concat(o);console.log(a),t.setState({time:a})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeHandler()}},{key:"componentDidUpdate",value:function(){var t=this;setInterval((function(){t.timeHandler()}),1e3)}},{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundColor:"#".concat(this.state.time),color:"white",width:"100vw",height:"100vh",textAlign:"center",verticalAlign:"middle",lineHeight:"100vh",fontSize:"5vh",transition:"0.5s"}},"#".concat(this.state.time))}}]),n}(o.a.Component));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d42e2982.chunk.js.map