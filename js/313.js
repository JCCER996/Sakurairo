(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[313],{7313:(t,r,n)=>{n.r(r);n(1703),n(285),n(1637);var e=new Image,i=50;class s{constructor(t,r,n,e,i){this.x=t,this.y=r,this.s=n,this.r=e,this.fn=i}draw(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(e,0,0,40*this.s,40*this.s),t.restore()}update(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=a("fnr"),Math.random()>.4?(this.x=a("x"),this.y=0,this.s=a("s"),this.r=a("r")):(this.x=window.innerWidth,this.y=a("y"),this.s=a("s"),this.r=a("r")))}}function a(t){var r,n;switch(t){case"x":r=Math.random()*window.innerWidth;break;case"y":r=Math.random()*window.innerHeight;break;case"s":r=Math.random();break;case"r":r=6*Math.random();break;case"fnx":n=1*Math.random()-.5,r=function(t,r){return t+.5*n-1.7};break;case"fny":n=1.5+.7*Math.random(),r=function(t,r){return r+n};break;case"fnr":n=.03*Math.random(),r=function(t){return t+n}}return r}function o(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t,r=document.createElement("canvas");!0,r.height=window.innerHeight,r.width=window.innerWidth,r.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),r.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(r),t=r.getContext("2d");for(var n=new u,e=0;e<i;e++){var o,c,h,f,d,l,w,p;c=a("x"),h=a("y"),d=a("r"),f=a("s"),l=a("fnx"),w=a("fny"),p=a("fnr"),(o=new s(c,h,f,d,{x:l,y:w,r:p})).draw(t),n.push(o)}requestAnimationFrame((function(){t.clearRect(0,0,r.width,r.height),n.update(),n.draw(t),requestAnimationFrame(arguments.callee)}))}class u{constructor(){this.list=[]}push(t){this.list.push(t)}update(){for(var t=0,r=this.list.length;t<r;t++)this.list[t].update()}draw(t){for(var r=0,n=this.list.length;r<n;r++)this.list[r].draw(t)}get(t){return this.list[t]}size(){return this.list.length}}window.onresize=function(){document.getElementById("canvas_snow")};const c=mashiro_option.effect.amount;let h;switch(c){case"half":h=25;break;case"less":h=15;break;case"quarter":h=35;break;case"native":h=50;break;default:h=parseInt(c),isNaN(h)&&(console.error("wrong arg"),h=50)}!function(t){switch(typeof t){case"number":i=Math.floor(t);break;case"string":i=parseInt(t);break;default:throw new TypeError("need a int as args, but get "+typeof t+" instead")}e.src=new URL(n(891),n.b),e.onload=function(){o()}}(h)},7741:(t,r,n)=>{var e=n(1702)("".replace),i=String(Error("zxcasd").stack),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(i);t.exports=function(t,r){if(a&&"string"==typeof t)for(;r--;)t=e(t,s,"");return t}},2914:(t,r,n)=>{var e=n(7293),i=n(9114);t.exports=!e((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},9587:(t,r,n)=>{var e=n(614),i=n(111),s=n(7674);t.exports=function(t,r,n){var a,o;return s&&e(a=r.constructor)&&a!==n&&i(o=a.prototype)&&o!==n.prototype&&s(t,o),t}},8340:(t,r,n)=>{var e=n(111),i=n(8880);t.exports=function(t,r){e(r)&&"cause"in r&&i(t,"cause",r.cause)}},6277:(t,r,n)=>{var e=n(1340);t.exports=function(t,r){return void 0===t?arguments.length<2?"":r:e(t)}},9191:(t,r,n)=>{var e=n(5005),i=n(2597),s=n(8880),a=n(7976),o=n(7674),u=n(9920),c=n(9587),h=n(6277),f=n(8340),d=n(7741),l=n(2914),w=n(1913);t.exports=function(t,r,n,p){var m=p?2:1,y=t.split("."),g=y[y.length-1],v=e.apply(null,y);if(v){var b=v.prototype;if(!w&&i(b,"cause")&&delete b.cause,!n)return v;var k=e("Error"),x=r((function(t,r){var n=h(p?r:t,void 0),e=p?new v(t):new v;return void 0!==n&&s(e,"message",n),l&&s(e,"stack",d(e.stack,2)),this&&a(b,this)&&c(e,this,x),arguments.length>m&&f(e,arguments[m]),e}));if(x.prototype=b,"Error"!==g&&(o?o(x,k):u(x,k,{name:!0})),u(x,v),!w)try{b.name!==g&&s(b,"name",g),b.constructor=x}catch(t){}return x}}},1703:(t,r,n)=>{var e=n(2109),i=n(7854),s=n(2104),a=n(9191),o="WebAssembly",u=i.WebAssembly,c=7!==Error("e",{cause:7}).cause,h=function(t,r){var n={};n[t]=a(t,r,c),e({global:!0,forced:c},n)},f=function(t,r){if(u&&u[t]){var n={};n[t]=a("WebAssembly."+t,r,c),e({target:o,stat:!0,forced:c},n)}};h("Error",(function(t){return function(r){return s(t,this,arguments)}})),h("EvalError",(function(t){return function(r){return s(t,this,arguments)}})),h("RangeError",(function(t){return function(r){return s(t,this,arguments)}})),h("ReferenceError",(function(t){return function(r){return s(t,this,arguments)}})),h("SyntaxError",(function(t){return function(r){return s(t,this,arguments)}})),h("TypeError",(function(t){return function(r){return s(t,this,arguments)}})),h("URIError",(function(t){return function(r){return s(t,this,arguments)}})),f("CompileError",(function(t){return function(r){return s(t,this,arguments)}})),f("LinkError",(function(t){return function(r){return s(t,this,arguments)}})),f("RuntimeError",(function(t){return function(r){return s(t,this,arguments)}}))},891:(t,r,n)=>{t.exports=n.p+"891.png"}}]);
//# sourceMappingURL=313.js.map