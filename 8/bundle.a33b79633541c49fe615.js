(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);s&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,o=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:i,s,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",_={};_[$]=m;var g="$isDayjsObject",b=function(t){return t instanceof k||!(!t||!t[g])},C=function t(e,n,s){var i;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();_[r]&&(i=r),n&&(_[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,i=a}return!s&&i&&($=i),i||!s&&$},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},w=y;w.l=C,w.i=b,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=C(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,h=w.p(t),p=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?s:s.endOf(o)},f=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case u:return c?p(1,0):p(31,11);case l:return c?p(1,v):p(0,v+1);case a:var _=this.$locale().weekStart||0,g=(m<_?m+7:m)-_;return p(c?y-g:y+(6-g),v);case o:case d:return f($+"Hours",0);case r:return f($+"Minutes",1);case i:return f($+"Seconds",2);case s:return f($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),h="set"+(this.$u?"UTC":""),p=(a={},a[o]=h+"Date",a[d]=h+"Date",a[l]=h+"Month",a[u]=h+"FullYear",a[r]=h+"Hours",a[i]=h+"Minutes",a[s]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],f=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[p](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,h=this;n=Number(n);var p=w.p(c),f=function(t){var e=M(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var m=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[p]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},p=function(t){return w.s(r%12||12,t,"0")},m=u||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(f,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return m(r,o,!0);case"A":return m(r,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var p,f=this,m=w.p(d),v=M(n),y=(v.utcOffset()-this.utcOffset())*t,$=this-v,_=function(){return w.m(f,v)};switch(m){case u:p=_()/12;break;case l:p=_();break;case c:p=_()/3;break;case a:p=($-y)/6048e5;break;case o:p=($-y)/864e5;break;case r:p=$/e;break;case i:p=$/t;break;case s:p=$/1e3;break;default:p=$}return h?p:w.a(p)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=C(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=k.prototype;return M.prototype=S,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,k,M),t.$i=!0),M},M.locale=C,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=_[$],M.Ls=_,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof $},h=function(t,e,n){return new $(t,n,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function f(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=y(n,"D"),i=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=y(o,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,c=i.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+s.format+c+i.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/u[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],e||0},v.add=function(t,e,n){var s;return s=e?t*u[p(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}(),_=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return h(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)?_(this,t,1):r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)?_(this,t,-1):o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var h=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=i(p,s);s.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=s(t,i),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),s=n(795),i=n.n(s),r=n(569),o=n.n(r),a=n(565),l=n.n(a),c=n(216),u=n.n(c),d=n(589),h=n.n(d),p=n(10),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}function y(t,e,n="beforeend"){if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function $(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}function _(t){if(null!==t){if(!(t instanceof v))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}const g=t=>t.charAt(0).toUpperCase()+t.slice(1);function b(t){return t[Math.floor(Math.random()*t.length)]}const C=(t,e)=>{const n=Math.ceil(Math.min(t,e)),s=Math.floor(Math.max(t,e)),i=Math.random()*(s-n+1)+n;return Math.floor(i)};class M extends v{get template(){return'<ul class="trip-events__list"></ul>'}}const w=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],k="HH:mm",S="DD/MM/YY HH:MM",D="everything",E="past",T="future",A="present",P={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFER:"offer"};class x extends v{#e=null;#n="";constructor({onSortClick:t,sortType:e}){super(),this.#e=t,this.#n=e,this.element.addEventListener("click",this.#s)}get template(){return t=this.#n,`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${Object.values(P).map((e=>((t,e)=>`<div class="trip-sort__item  trip-sort__item--${t}">\n  <input\n  id="sort-${t}"\n  class="trip-sort__input  visually-hidden"\n  type="radio"\n  name="trip-sort"\n  value="sort-${t}"\n  ${"offer"===t||"event"===t?"disabled":""}\n  ${t===e?"checked":""}>\n<label class="trip-sort__btn" for="sort-${t}" data-sort-type="${t}">${g(t)}</label>\n</div>`)(e,t))).join("")}\n  </form>`;var t}#s=t=>{"LABEL"===t.target.tagName&&(t.preventDefault(),this.#e(t.target.dataset.sortType))}}class F extends v{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var H=n(484),L=n.n(H),O=n(646),Y=n.n(O);L().extend(Y());const j=(t,e)=>t?L()(t).format(e):"",I=(t,e)=>{const n=L()(t),s=L()(e),i=L().duration(s.diff(n));return i.days()>0?i.format("DD[D] HH[H] mm[M]"):i.hours()>0?i.format("HH[H] mm[M]"):i.format("mm[M]")};function N(t,e){return t.basePrice<e.basePrice?1:t.basePrice>e.basePrice?-1:t.basePrice===e.basePrice?0:void 0}function B(t,e){const n=I(t.dateFrom,t.dateTo),s=I(e.dateFrom,e.dateTo);return n<s?1:n>s?-1:n===s?0:void 0}class q extends v{#i=null;#r=null;#o=null;#a=null;#l=null;constructor({point:t,offers:e,destinations:n,onEditClick:s,onFavoriteClick:i}){super(),this.#i=t,this.#r=e,this.#o=n,this.#a=s,this.#l=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#u)}get template(){return function(t,e,n){const{type:s,destination:i,dateFrom:r,dateTo:o,basePrice:a,isFavorite:l}=t,c=n.find((t=>t.id===i)).name,u=l?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${j(r,"D MMM")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${s} ${c}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${j(r,k)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${j(o,k)}</time>\n      </p>\n      <p class="event__duration">${I(r,o)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${a}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${d=s,h=e,h.find((t=>t.type===d)).offers.map((t=>`<li class="event__offer">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n      </li>`)).join("")}\n    </ul>\n    <button class="${u}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var d,h}(this.#i,this.#r,this.#o)}#c=t=>{t.preventDefault(),this.#a()};#u=t=>{t.preventDefault(),this.#l()}}const W=["Amsterdam","Geneva","Chamonix","Basel","Düsseldorf","Strasbourg"],U=[`https://loremflickr.com/248/152?random=${C(1,5)}`,`https://loremflickr.com/248/152?random=${C(1,5)}`,`https://loremflickr.com/248/152?random=${C(1,5)}`,`https://loremflickr.com/248/152?random=${C(1,5)}`,`https://loremflickr.com/248/152?random=${C(1,5)}`],R=[{dateFrom:"2024-07-10T10:00:00",dateTo:"2024-07-11T11:00:00"},{dateFrom:"2024-07-15T18:00:00",dateTo:"2024-07-16T20:30:00"},{dateFrom:"2024-07-16T21:00:00",dateTo:"2024-07-16T23:45:00"},{dateFrom:"2024-08-01T09:55:00",dateTo:"2024-08-02T11:22:00"},{dateFrom:"2024-08-10T14:00:00",dateTo:"2024-08-10T17:00:00"},{dateFrom:"2024-08-12T13:56:00",dateTo:"2024-08-12T14:06:00"}],Z=[{id:1,title:"Add luggage",price:C(5,200)},{id:2,title:"Switch to comfort",price:C(5,200)},{id:3,title:"Add meal",price:C(5,200)},{id:4,title:"Choose seats",price:C(5,200)},{id:5,title:"Order Uber",price:C(5,200)},{id:6,title:"Add breakfast",price:C(5,200)},{id:7,title:"Rent a car",price:C(5,200)}],V=t=>{const e=t.split(" ");return e[e.length-1]};class z extends v{#i=null;#r=null;#o=null;#a=null;#d=null;constructor({point:t,offers:e,destinations:n,onEditClick:s,onFormSaveClick:i}){super(),this.#i=t,this.#r=e,this.#o=n,this.#a=s,this.#d=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.element.querySelector("form").addEventListener("submit",this.#h)}get template(){return function(t,e,n){const{type:s,destination:i,dateFrom:r,dateTo:o,basePrice:a,description:l,offers:c}=t,u=n.find((t=>t.id===i)).name,d=e.find((t=>t.type===s)).offers;return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${w.map((t=>((t,e)=>`\n  <div class="event__type-item">\n  <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${e}>\n  <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${g(t)}</label>\n  </div>`)(t,(t=>t===s?"checked":"")(t)))).join("")}\n          </fieldset>\n        </div>\n      </div>\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          ${s}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${u}" list="destination-list-1">\n        <datalist id="destination-list-1">\n          ${W.map((t=>(t=>`<option value="${t}"></option>`)(t))).join("")}\n        </datalist>\n      </div>\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${j(r,S)}">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${j(o,S)}">\n      </div>\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n      </div>\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n        <div class="event__available-offers">\n        ${d.map((t=>{return((t,e)=>`<div class="event__offer-${V(t.title)}">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${V(t.title)}-1" type="checkbox" name="event-offer-${V(t.title)}" ${e}>\n  <label class="event__offer-label" for="event-offer-${V(t.title)}-1">\n    <span class="event__offer-title">${t.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${t.price}</span>\n  </label>\n  </div>`)(t,(e=t.id,c.includes(e)?"checked":""));var e})).join("")}\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${l}</p>\n      </section>\n    </section>\n  </form>\n</li>`}(this.#i,this.#r,this.#o)}#c=t=>{t.preventDefault(),this.#a()};#h=t=>{t.preventDefault(),this.#d()}}const J="DEFAULT",K="EDIT";class X{#i=null;#o=null;#r=null;#p=null;#f=null;#m=null;#v=null;#y=null;#$=J;constructor({pointsListComponent:t,onPointsChange:e,onModeChange:n}){this.#p=t,this.#v=e,this.#y=n}init(t,e,n){this.#i=t,this.#r=e,this.#o=n;const s=this.#f,i=this.#m;this.#f=new q({point:this.#i,offers:this.#r,destinations:this.#o,onEditClick:()=>{this.#_()},onFavoriteClick:this.#l}),this.#m=new z({point:t,offers:e,destinations:n,onEditClick:()=>{this.#g()},onFormSaveClick:this.#b}),null!==s&&null!==i?(this.#$===J&&$(this.#f,s),this.#$===K&&$(this.#m,i),_(s),_(i)):y(this.#f,this.#p)}#_(){$(this.#m,this.#f),document.addEventListener("keydown",this.#C),this.#y(),this.#$=K}#g(){$(this.#f,this.#m),document.removeEventListener("keydown",this.#C),this.#$=J}destroy(){_(this.#f),_(this.#m)}resetView(){this.#$!==J&&this.#g()}#l=()=>{this.#v({...this.#i,isFavorite:!this.#i.isFavorite})};#b=t=>{this.#v(t),this.#g(),document.removeEventListener("keydown",this.#C)};#C=t=>{"Escape"===t.key&&(t.preventDefault(),this.#g(),document.removeEventListener("keydown",this.#C))}}const G=t=>{const e=[];return t.forEach((t=>{const n=Z.find((e=>e.id===t));e.push(n)})),e},Q=(()=>{const t=[];return w.forEach((e=>{const n=((t,e)=>({type:t,offers:G(e)}))(e,((t,e)=>{const n=[];for(;n.length!==e;){let t=C(1,e);n.every((e=>e!==t))?n.push(t):t=C(1,e)}return n})(0,C(1,Z.length)));t.push(n)})),t})(),tt=()=>Q,et=tt(),nt=t=>{const e=t.split(".");return Array.from({length:5},(()=>b(e).trim())).join(".")},st=(()=>{let t=0;return()=>(t+=1,t)})(),it=Array.from({length:10},(()=>(()=>{const t=b(R),e=b(w);return{id:st(),type:e,destination:C(1,W.length),description:nt("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:C(20,5e3),offers:(()=>{const t=et.find((t=>t.type===e)).offers,n=[];return t.forEach((t=>{n.push(t.id)})),n.slice(0,C(1,n.length))})(),isFavorite:0===C(0,1)}})()));let rt=0;const ot=(()=>{const t=[];return W.forEach((e=>{rt++,t.push((t=>({id:rt,name:t,description:`${t}, is a beautiful city, a true asian pearl, with crowded streets.`,pictures:[{src:U[0],description:`${t} parliament building`},{src:U[1],description:`${t} main square`},{src:U[2],description:`${t} best view`},{src:U[3],description:`${t} landscape`},{src:U[4],description:`${t} church`}]}))(e))})),t})(),at={[D]:t=>t,[E]:t=>t.filter((t=>(t=>{const e=new Date;return new Date(t.dateTo)<e})(t))),[A]:t=>t.filter((t=>(t=>{const e=new Date,n=new Date(t.dateTo);return new Date(t.dateFrom)<=e&&n>=e})(t))),[T]:t=>t.filter((t=>(t=>{const e=new Date;return new Date(t.dateFrom)>e})(t)))},lt=document.querySelector(".trip-main"),ct=document.querySelector(".trip-controls__filters"),ut=document.querySelector(".trip-events"),dt=new class{#M=(()=>it)();#o=(()=>ot)();#r=tt();get points(){return this.#M}get destinations(){return this.#o}get offers(){return this.#r}},ht=new class{#p=new M;#w=null;#k=null;#M=[];#o=[];#r=[];#S=new Map;#D=new F;#E=null;#T=P.DAY;#A=[];constructor({pointsContainer:t,pointModel:e}){this.#w=t,this.#k=e}init(){this.#M=[...this.#k.points],this.#o=[...this.#k.destinations],this.#r=[...this.#k.offers],this.#A=[...this.#k.points],this.#P()}#P(){this.#x(this.#T),y(this.#p,this.#w),0===this.#M.length&&this.#F(),this.#H()}#x(t){this.#E=new x({onSortClick:this.#e,sortType:t}),y(this.#E,this.#w)}#L=t=>{switch(t){case P.TIME:this.#M.sort(B);break;case P.PRICE:this.#M.sort(N);break;case P.EVENT:case P.OFFER:break;case P.DAY:this.#M=[...this.#A]}this.#T=t};#e=t=>{this.#T!==t&&(this.#L(t),this.#x(t),this.#O(),this.#H())};#Y(t){const e=new X({pointsListComponent:this.#p.element,onPointsChange:this.#v,onModeChange:this.#y});e.init(t,this.#r,this.#o),this.#S.set(t.id,e)}#v=t=>{this.#M=function(t,e){return t.map((t=>t.id===e.id?e:t))}(this.#M,t),this.#S.get(t.id).init(t,this.#r,this.#o)};#y=()=>{this.#S.forEach((t=>t.resetView()))};#H(){for(const t of this.#M)this.#Y(t)}#O(){this.#S.forEach((t=>t.destroy())),this.#S.clear()}#F(){y(this.#D,this.#p.element)}}({pointsContainer:ut,pointModel:dt}),pt=function(t){return Object.entries(at).map((([e,n])=>({type:e,count:n(t).length})))}(dt.points);y(new class extends v{get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n    <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n  </div>\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}},lt,"afterbegin"),y(new class extends v{#j=[];constructor({filters:t}){super(),this.#j=t}get template(){return function(t){return`<form class="trip-filters" action="#" method="get">\n  ${Object.values(t).map((t=>{return`<div class="trip-filters__filter">\n    <input\n    id="filter-${e=t.type}"\n    class="trip-filters__filter-input  visually-hidden"\n    type="radio"\n    name="trip-filter"\n    value="${e}"\n    ${"everything"===e?"checked":""}\n    ${0===(n=t.count)?"disabled":"checked"} >\n    <label class="trip-filters__filter-label" for="filter-${e}">${g(e)} ${n}</label>\n    </div>`;var e,n})).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}(this.#j)}}({filters:pt}),ct),ht.init()})()})();
//# sourceMappingURL=bundle.a33b79633541c49fe615.js.map