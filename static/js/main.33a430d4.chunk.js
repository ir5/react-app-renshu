(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(4),u=r(3),i=r(7),l=r(0),c=r.n(l),o=r(6),m=r.n(o);r(14);function h(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(i.a)(t[r],3),n=a[0],s=a[1],u=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return e[n]}return null}function p(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return c.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),c.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),c.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(c.a.Component),v=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,player:0},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();h(r)||r[e]||(r[e]=this.currentPlayer(),this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,player:1-this.state.player}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,player:e%2})}},{key:"currentPlayer",value:function(){return 0===this.state.player?"X":"O"}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=r.map((function(e,r){var a=r?"Go to move #"+r:"Go to game start";return c.a.createElement("li",{key:r},c.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))})),s=h(a.squares);return e=s?"Winner: "+s:"Next player: "+this.currentPlayer(),c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(d,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("ol",null,n)))}}]),r}(c.a.Component);m.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.33a430d4.chunk.js.map