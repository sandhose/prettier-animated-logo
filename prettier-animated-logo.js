require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){}var n={},o=[],r=[];function i(e,i){var l,a,p,s,c=r;for(s=arguments.length;s-- >2;)o.push(arguments[s]);for(i&&null!=i.children&&(o.length||o.push(i.children),delete i.children);o.length;)if((a=o.pop())&&void 0!==a.pop)for(s=a.length;s--;)o.push(a[s]);else"boolean"==typeof a&&(a=null),(p="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(p=!1)),p&&l?c[c.length-1]+=a:c===r?c=[a]:c.push(a),l=p;var u=new t;return u.nodeName=e,u.children=c,u.attributes=null==i?void 0:i,u.key=null==i?void 0:i.key,void 0!==n.vnode&&n.vnode(u),u}function l(e,t){for(var n in t)e[n]=t[n];return e}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function p(e,t){return i(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function u(e){!e._dirty&&(e._dirty=!0)&&1==c.push(e)&&(n.debounceRendering||a)(f)}function f(){var e,t=c;for(c=[];e=t.pop();)e._dirty&&D(e)}function d(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&v(e,t.nodeName):n||e._componentConstructor===t.nodeName}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function _(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function m(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function y(t,n,o,r,i){if("className"===n&&(n="class"),"key"===n);else if("ref"===n)o&&o(null),r&&r(t);else if("class"!==n||i)if("style"===n){if(r&&"string"!=typeof r&&"string"!=typeof o||(t.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":e(r))){if("string"!=typeof o)for(var l in o)l in r||(t.style[l]="");for(var l in r)t.style[l]="number"==typeof r[l]&&!1===s.test(l)?r[l]+"px":r[l]}}else if("dangerouslySetInnerHTML"===n)r&&(t.innerHTML=r.__html||"");else if("o"==n[0]&&"n"==n[1]){var a=n!==(n=n.replace(/Capture$/,""));n=n.toLowerCase().substring(2),r?o||t.addEventListener(n,x,a):t.removeEventListener(n,x,a),(t._listeners||(t._listeners={}))[n]=r}else if("list"!==n&&"type"!==n&&!i&&n in t)b(t,n,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(n);else{var p=i&&n!==(n=n.replace(/^xlink\:?/,""));null==r||!1===r?p?t.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):t.removeAttribute(n):"function"!=typeof r&&(p?t.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),r):t.setAttribute(n,r))}else t.className=r||""}function b(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](n.event&&n.event(e)||e)}var C=[],g=0,N=!1,k=!1;function w(){for(var e;e=C.pop();)n.afterMount&&n.afterMount(e),e.componentDidMount&&e.componentDidMount()}function S(e,t,n,o,r,i){g++||(N=null!=r&&void 0!==r.ownerSVGElement,k=null!=e&&!("__preactattr_"in e));var l=U(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--g||(k=!1,i||w()),l}function U(e,t,n,o,r){var i=e,l=N;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),M(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return H(e,t,n,o);if(N="svg"===a||"foreignObject"!==a&&N,a=String(a),(!e||!v(e,a))&&(i=m(a,N),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),M(e,!0)}var p=i.firstChild,s=i.__preactattr_,c=t.children;if(null==s){s=i.__preactattr_={};for(var u=i.attributes,f=u.length;f--;)s[u[f].name]=u[f].value}return!k&&c&&1===c.length&&"string"==typeof c[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=c[0]&&(p.nodeValue=c[0]):(c&&c.length||null!=p)&&L(i,c,n,o,k||null!=s.dangerouslySetInnerHTML),T(i,t.attributes,s),N=l,i}function L(e,t,n,o,r){var i,l,a,p,s,c=e.childNodes,u=[],f={},v=0,_=0,m=c.length,y=0,b=t?t.length:0;if(0!==m)for(var x=0;x<m;x++){var C=c[x],g=C.__preactattr_;null!=(N=b&&g?C._component?C._component.__key:g.key:null)?(v++,f[N]=C):(g||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(u[y++]=C)}if(0!==b)for(x=0;x<b;x++){s=null;var N;if(null!=(N=(p=t[x]).key))v&&void 0!==f[N]&&(s=f[N],f[N]=void 0,v--);else if(!s&&_<y)for(i=_;i<y;i++)if(void 0!==u[i]&&d(l=u[i],p,r)){s=l,u[i]=void 0,i===y-1&&y--,i===_&&_++;break}s=U(s,p,n,o),a=c[x],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?h(a):e.insertBefore(s,a))}if(v)for(var x in f)void 0!==f[x]&&M(f[x],!1);for(;_<=y;)void 0!==(s=u[y--])&&M(s,!1)}function M(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||h(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;M(e,!0),e=t}}function T(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||y(e,o,n[o],n[o]=void 0,N);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||y(e,o,n[o],n[o]=t[o],N)}var B={};function E(e){var t=e.constructor.name;(B[t]||(B[t]=[])).push(e)}function W(e,t,n){var o,r=B[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),z.call(o,t,n)):((o=new z(t,n)).constructor=e,o.render=V),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function V(e,t,n){return this.constructor(e,n)}function A(e,t,o,r,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==o&&(1!==o&&!1===n.syncComponentUpdates&&e.base?u(e):D(e,1,i)),e.__ref&&e.__ref(e))}function D(e,t,o,r){if(!e._disable){var i,a,p,s=e.props,c=e.state,u=e.context,f=e.prevProps||s,d=e.prevState||c,v=e.prevContext||u,m=e.base,h=e.nextBase,y=m||h,b=e._component,x=!1;if(m&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,u)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){i=e.render(s,c,u),e.getChildContext&&(u=l(l({},u),e.getChildContext()));var N,k,U=i&&i.nodeName;if("function"==typeof U){var L=_(i);(a=b)&&a.constructor===U&&L.key==a.__key?A(a,L,1,u,!1):(N=a,e._component=a=W(U,L,u),a.nextBase=a.nextBase||h,a._parentComponent=e,A(a,L,0,u,!1),D(a,1,o,!0)),k=a.base}else p=y,(N=b)&&(p=e._component=null),(y||1===t)&&(p&&(p._component=null),k=S(p,i,u,o||!m,y&&y.parentNode,!0));if(y&&k!==y&&a!==b){var P=y.parentNode;P&&k!==P&&(P.replaceChild(k,y),N||(y._component=null,M(y,!1)))}if(N&&j(N),e.base=k,k&&!r){for(var T=e,B=e;B=B._parentComponent;)(T=B).base=k;k._component=T,k._componentConstructor=T.constructor}}if(!m||o?C.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),n.afterUpdate&&n.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||r||w()}}function H(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,p=a,s=_(t);r&&!p&&(r=r._parentComponent);)p=r.constructor===t.nodeName;return r&&p&&(!o||r._component)?(A(r,s,3,n,o),e=r.base):(i&&!a&&(j(i),e=l=null),r=W(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,l=null),A(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,M(l,!1))),e}function j(e){n.beforeUnmount&&n.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;o?j(o):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,h(t),E(e),P(t)),e.__ref&&e.__ref(null)}function z(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}l(z.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=l({},n)),l(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),u(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),D(this,2)},render:function(){}});function R(e,t,n){return S(n,e,{},!1,t,!1)}var I={h:i,createElement:i,cloneElement:p,Component:z,render:R,rerender:f,options:n};exports.h=i,exports.createElement=i,exports.cloneElement=p,exports.Component=z,exports.render=R,exports.rerender=f,exports.options=n,exports.default=I;
},{}],3:[function(require,module,exports) {
module.exports = {
  "total": 500,
  "lines": [
    {
      "initialOffset": 130,
      "roll": 1,
      "dashes": [
        {
          "start": 0,
          "length": 40
        },
        {
          "start": 60,
          "length": 140
        },
        {
          "start": 220,
          "length": 100
        }
      ]
    },
    {
      "initialOffset": -100,
      "roll": -1,
      "dashes": [
        {
          "start": 20,
          "length": 60
        },
        {
          "start": 100,
          "length": 120,
          "color": 1
        },
        {
          "start": 240,
          "length": 40
        },
        {
          "start": 300,
          "length": 40
        }
      ]
    },
    {
      "initialOffset": 120,
      "roll": 1,
      "dashes": [
        {
          "start": 40,
          "length": 40
        },
        {
          "start": 100,
          "length": 30,
          "color": 2
        },
        {
          "start": 150,
          "length": 100,
          "color": 3
        },
        {
          "start": 270,
          "length": 130
        },
        {
          "start": 420,
          "length": 20
        }
      ]
    },
    {
      "initialOffset": 40,
      "roll": 1,
      "dashes": [
        {
          "start": 0,
          "length": 80
        },
        {
          "start": 100,
          "length": 70,
          "color": 1
        },
        {
          "start": 190,
          "length": 40,
          "color": 4
        },
        {
          "start": 250,
          "length": 10,
          "color": 1
        },
        {
          "start": 280,
          "length": 20
        },
        {
          "start": 320,
          "length": 100
        }
      ]
    },
    {
      "initialOffset": -150,
      "roll": -1,
      "dashes": [
        {
          "start": 70,
          "length": 10
        },
        {
          "start": 100,
          "length": 20,
          "color": 3
        },
        {
          "start": 140,
          "length": 10,
          "color": 1
        },
        {
          "start": 170,
          "length": 30
        },
        {
          "start": 220,
          "length": 50,
          "color": 2
        },
        {
          "start": 290,
          "length": 90
        }
      ]
    },
    {
      "initialOffset": 100,
      "roll": 1,
      "dashes": [
        {
          "start": 0,
          "length": 20
        },
        {
          "start": 40,
          "length": 40
        },
        {
          "start": 100,
          "length": 50,
          "color": 4
        },
        {
          "start": 170,
          "length": 30
        },
        {
          "start": 220,
          "length": 50,
          "color": 3
        },
        {
          "start": 290,
          "length": 40
        },
        {
          "start": 350,
          "length": 40
        }
      ]
    },
    {
      "initialOffset": 190,
      "roll": 2,
      "dashes": [
        {
          "start": 20,
          "length": 60
        },
        {
          "start": 100,
          "length": 10,
          "color": 1
        },
        {
          "start": 130,
          "length": 30,
          "color": 3
        },
        {
          "start": 180,
          "length": 80,
          "color": 2
        },
        {
          "start": 280,
          "length": 20
        },
        {
          "start": 320,
          "length": 100
        },
        {
          "start": 440,
          "length": 20
        }
      ]
    },
    {
      "initialOffset": -30,
      "roll": -1,
      "dashes": [
        {
          "start": 50,
          "length": 30
        },
        {
          "start": 100,
          "length": 40,
          "color": 1
        },
        {
          "start": 160,
          "length": 40,
          "color": 2
        },
        {
          "start": 220,
          "length": 30,
          "color": 4
        },
        {
          "start": 270,
          "length": 60
        },
        {
          "start": 350,
          "length": 60
        }
      ]
    },
    {
      "initialOffset": 50,
      "roll": 1,
      "dashes": [
        {
          "start": 20,
          "length": 30
        },
        {
          "start": 70,
          "length": 10
        },
        {
          "start": 100,
          "length": 10,
          "color": 3
        },
        {
          "start": 130,
          "length": 90,
          "color": 4
        },
        {
          "start": 240,
          "length": 20
        },
        {
          "start": 280,
          "length": 80
        },
        {
          "start": 380,
          "length": 100
        }
      ]
    },
    {
      "initialOffset": 150,
      "roll": -2,
      "dashes": [
        {
          "start": 10,
          "length": 70
        },
        {
          "start": 100,
          "length": 50,
          "color": 4
        },
        {
          "start": 170,
          "length": 20
        },
        {
          "start": 210,
          "length": 90
        },
        {
          "start": 320,
          "length": 90
        }
      ]
    },
    {
      "initialOffset": -100,
      "roll": 1,
      "dashes": [
        {
          "start": 40,
          "length": 40
        },
        {
          "start": 100,
          "length": 20,
          "color": 1
        },
        {
          "start": 140,
          "length": 10,
          "color": 3
        },
        {
          "start": 170,
          "length": 40
        },
        {
          "start": 230,
          "length": 10
        },
        {
          "start": 260,
          "length": 80
        },
        {
          "start": 360,
          "length": 20
        }
      ]
    },
    {
      "initialOffset": -50,
      "roll": 2,
      "dashes": [
        {
          "start": 60,
          "length": 20
        },
        {
          "start": 100,
          "length": 50,
          "color": 2
        },
        {
          "start": 170,
          "length": 60
        },
        {
          "start": 250,
          "length": 40
        },
        {
          "start": 310,
          "length": 20
        }
      ]
    },
    {
      "initialOffset": -150,
      "roll": -1,
      "dashes": [
        {
          "start": 40,
          "length": 60
        },
        {
          "start": 120,
          "length": 60
        },
        {
          "start": 200,
          "length": 100
        },
        {
          "start": 320,
          "length": 20
        }
      ]
    }
  ]
}
;
},{}],4:[function(require,module,exports) {

},{}],2:[function(require,module,exports) {
"use strict";var e=require("preact"),t=require("./data.json"),a=r(t);require("./style.styl");function r(e){return e&&e.__esModule?e:{default:e}}var n=function(t){var a=t.index,r=t.dashes,n=t.total;return(0,e.h)("g",{className:"l"+a},r.map(function(t,r){var d=t.color;return(0,e.h)("path",{d:"m 5 "+(20*a+5)+" l "+n+" 0",class:["dash","p"+r,"c"+d].join(" ")})}))},d=function(t){var a=t.data,r=a.total,d=a.lines,i=20*d.length+10,s=r+20;return(0,e.h)("svg",{height:i,width:s,id:"logo",viewbox:"0 0 "+i+" "+s,version:"1.1"},d.map(function(t,a){var d=t.dashes;return(0,e.h)(n,{total:r,dashes:d,index:a})}))};(0,e.render)((0,e.h)("div",{id:"app"},(0,e.h)(d,{data:a.default})),document.body);
},{"preact":5,"./data.json":3,"./style.styl":4}]},{},[2])