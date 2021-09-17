(this["webpackJsonpreact-color-searcher"]=this["webpackJsonpreact-color-searcher"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(9),a=n.n(c),s=(n(14),n(8)),i=n(2),u=n.n(i),d=n(3),l=n(4),b=n(0),f=function(e){var t=e.background,n=e.border,r=e.borderRadius,o=e.buttonText,c=e.color,a=e.cursor,s=e.fontSize,i=e.padding,u=e.margin,d=(e.notFound,e.onClick);return Object(b.jsx)("button",{style:{background:t,border:n,borderRadius:r,color:c,cursor:a,fontSize:s,padding:i,margin:u},className:"btn",onClick:d,children:o})};f.defaultProps={borderRadius:"5px",color:"white",cursor:"pointer",fontSize:"15px",padding:"9px 9px",margin:"5px"};var p=f,h=function(e){var t=e.color,n=e.onDelete;return Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("div",{className:"color",style:{background:t.name,border:"1px solid ".concat("white"===t.name?"black":t.name)}}),Object(b.jsx)("div",{style:{position:"absolute",top:0,right:0},children:Object(b.jsx)(p,{background:"red",border:"1px solid white",borderRadius:"3px",buttonText:"Delete",fontSize:"13px",padding:"3px",margin:"2px",onClick:function(){return n(t.id)}})})]})},j=function(e){var t=e.colors,n=e.onDelete;return Object(b.jsx)("div",{className:"colors",children:t.map((function(e){return Object(b.jsx)(h,{color:e,onDelete:n},e.id)}))})},x=function(e){var t=e.findColors,n=e.notFound,o=e.onAdd,c=Object(r.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1];return Object(b.jsxs)("div",{id:"header",children:[Object(b.jsx)("div",{id:"search-bar",children:Object(b.jsx)("form",{id:"search-form",children:Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",placeholder:"Enter Color Name",value:s,onChange:function(e){i(e.target.value),t(e.target.value)}})})})}),Object(b.jsx)("div",{className:"add-color",children:Object(b.jsx)(p,{background:"".concat(n?"green":"grey"),border:"1px solid ".concat(n?"green":"grey"),buttonText:"Add Color",cursor:"".concat(n?"pointer":"not-allowed"),notFound:n,onClick:function(){return o({name:s})}})})]})};var v=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(!1),a=Object(l.a)(c,2),i=a[0],f=a[1],p=Object(r.useState)("Loading colors..."),h=Object(l.a)(p,2),v=h[0],O=h[1];Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("e call me"),e.next=3,k();case 3:t=e.sent,o(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("The selected color will be deleted and can't be recovered, Are you sure you want to continue?")){e.next=5;break}return e.next=4,fetch("http://localhost:5000/colors/".concat(t),{method:"DELETE"});case 4:o(n.filter((function(e){return e.id!==t})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=9;break}return e.next=3,fetch("http://localhost:5000/colors",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,o([].concat(Object(s.a)(n),[c])),alert("Color added successfully");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:n=e.sent,r=n.filter((function(e){return e.name.startsWith(t.toLowerCase())})),o(Object(s.a)(r)),0===r.length?(f(!0),O("No colour found, please click the 'Add Color' button if you would like to add the color you searched for")):f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/colors");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React Color Searcher"}),Object(b.jsx)(x,{findColors:w,notFound:i,onAdd:m}),n.length>0?Object(b.jsx)(j,{colors:n,onDelete:g}):v]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.533a24f4.chunk.js.map