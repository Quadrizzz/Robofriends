(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),s=(n(7),n(1)),i=n(2),l=n(4),h=n(3),u=n(5),d=function(e){e.searchfield;var t=e.searchchange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",placeholder:"Search Robots ",className:"pa3  ba b--green br2 bg-lightest-blue shadow-5",onChange:t}))},b=function(e){e.robots;throw new Error("Nooooooo")},f=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={HasError:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({HasError:!0})}},{key:"render",value:function(){return this.state.HasError?o.a.createElement("h1",null,"Ooooops,shit happens"):this.props.children}}]),t}(a.Component),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onsearchchange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?o.a.createElement("h1",{className:"pa3"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(d,{searchchange:this.onsearchchange}),o.a.createElement(f,null,o.a.createElement(m,null,o.a.createElement(b,{robots:t}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.774e0fb0.chunk.js.map