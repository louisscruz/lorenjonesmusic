(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2l/u":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("Jyyn"),o=r("G/LD"),c=r("vOnD"),u=r("A0PP"),l=r("ufqH"),s=r("u2Gm"),d=r("2nov"),f=r("17x9"),p=r.n(f);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function h(e,t,r){if(null==e)throw new Error('Accessibility Error: You must provide an "'+t+'" option to "'+r+'()"')}function v(e){var t=void 0===e?{}:e,r=t.vertical,a=t.idPrefix,i=m(t,["vertical","idPrefix"]),o=Object(d.a)(b({direction:r?"vertical":"horizontal",defaultSelectedIndex:0},i)),c=o.selectedItem,u=o.focusedItem,l=o.getContainerProps,f=o.getItemProps,p=Object(s.a)(),v=Object(n.useState)(a||p("tabs_0.5.6"))[0],g=v+"--panel",y=v+"--tab";return{selectedItem:c,focusedItem:u,getTabPanelProps:function(e){var t=void 0===e?{}:e,r=t.role,n=void 0===r?"tabpanel":r,a=t.index,i=t.item,o=m(t,["role","index","item"]);return h(a,"index","getTabPanelProps"),h(i,"item","getTabPanelProps"),b({role:n,id:g+":"+a,hidden:i!==c,"aria-labelledby":y+":"+a},o)},getTabListProps:function(e){return l((a=(n=void 0===(t=e)?{}:t).role,i=void 0===a?"tablist":a,o=m(n,["role"]),b({role:i,"aria-orientation":r?"vertical":"horizontal","data-garden-container-id":"containers.tabs","data-garden-container-version":"0.5.6"},o)));var t,n,a,i,o},getTabProps:function(e){return f((n=(r=void 0===(t=e)?{}:t).role,a=void 0===n?"tab":n,i=r.index,o=m(r,["role","index"]),h(i,"index","getTabProps"),b({id:y+":"+i,"aria-controls":g+":"+i,role:a},o)),"getTabProps");var t,r,n,a,i,o}}}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(){var e=w(["\n  display: inline-block;\n  position: relative;\n  transition: color 0.25s ease-in-out;\n  border-bottom: "," transparent;\n  border-width: ",";\n  cursor: pointer;\n  overflow: hidden; /* [1] */\n  vertical-align: top; /* [2] */\n  user-select: none;\n  text-align: center;\n  text-decoration: none; /* [3] */\n  text-overflow: ellipsis; /* [1] */\n\n  ","\n  ","\n\n  &:focus {\n    outline: none;\n    text-decoration: none;\n  }\n\n  &[data-garden-focus-visible]::before {\n    position: absolute;\n    top: ","px;\n    right: ","px;\n    left: ","px;\n    border-radius: ",";\n    height: ","px;\n    pointer-events: none;\n  }\n\n  &::before {\n    transition: box-shadow 0.1s ease-in-out;\n    content: '';\n  }\n\n  &:active::before {\n    box-shadow: none;\n  }\n\n  &[aria-disabled='true'] {\n    cursor: default;\n  }\n\n  ",";\n"]);return E=function(){return e},e}p.a.func,p.a.func,p.a.bool,p.a.string,p.a.number,p.a.func;var S=c.c.div.attrs((function(e){return{"data-garden-id":"tabs.tab","data-garden-version":"8.19.0","aria-disabled":e.disabled}}))(E(),(function(e){return e.theme.borderStyles.solid}),(function(e){return e.theme.borderWidths.md}),(function(e){var t=e.theme,r=2.5*t.space.base,n=7*t.space.base,a=r-Object(l.g)(t.borderWidths.md)-Object(l.g)(t.borderWidths.sm);return Object(c.b)(["padding:","px ","px ","px;"],r,n,a)}),(function(e){var t=e.theme,r=e.isSelected,n=Object(u.d)("primaryHue",600,t);return Object(c.b)(["border-color:",";color:",";&:hover{color:",";}&:active{border-color:currentColor;color:",";}&[data-garden-focus-visible]{color:",";}&[data-garden-focus-visible]::before{box-shadow:inset ",";}&[aria-disabled='true']{border-color:transparent;color:",";}"],r&&"currentColor !important",r?n:"inherit",n,n,n,t.shadows.sm(Object(u.d)("primaryHue",600,t,.35)),(function(e){return Object(u.d)("neutralHue",400,e.theme)}))}),(function(e){return 2.5*e.theme.space.base}),(function(e){return 6*e.theme.space.base}),(function(e){return 6*e.theme.space.base}),(function(e){return e.theme.borderRadii.md}),(function(e){return 5*e.theme.space.base}),(function(e){return Object(u.h)("tabs.tab",e)}));function I(){var e=w(["\n  display: block;\n  margin-top: 0; /* [1] */\n  margin-bottom: ","px;\n  border-bottom: "," ","\n    ",";\n  padding: 0; /* [1] */\n  line-height: ","px;\n  white-space: nowrap;\n  color: ",";\n  font-size: ",";\n\n  ",";\n"]);return I=function(){return e},e}S.defaultProps={theme:u.a};var R=c.c.div.attrs({"data-garden-id":"tabs.tablist","data-garden-version":"8.19.0"})(I(),(function(e){return 5*e.theme.space.base}),(function(e){return e.theme.borderWidths.sm}),(function(e){return e.theme.borderStyles.solid}),(function(e){return Object(u.d)("neutralHue",300,e.theme)}),(function(e){return 5*e.theme.space.base}),(function(e){return Object(u.d)("neutralHue",600,e.theme)}),(function(e){return e.theme.fontSizes.md}),(function(e){return Object(u.h)("tabs.tablist",e)}));function C(){var e=w(["\n  display: block;\n\n  &[aria-hidden='true'] {\n    display: none;\n  }\n\n  ",";\n"]);return C=function(){return e},e}R.defaultProps={theme:u.a};var k=c.c.div.attrs({"data-garden-id":"tabs.tabpanel","data-garden-version":"8.19.0"})(C(),(function(e){return Object(u.h)("tabs.tabpanel",e)}));function N(){var e=w(["\n  display: block;\n  overflow: hidden;\n  direction: ",";\n\n  ",";\n\n  ",";\n"]);return N=function(){return e},e}k.defaultProps={theme:u.a};var T=c.c.div.attrs({"data-garden-id":"tabs.tabs","data-garden-version":"8.19.0"})(N(),(function(e){return e.theme.rtl&&"rtl"}),(function(e){return e.isVertical&&(t=e.theme,Object(c.b)(["display:table;","{display:table-cell;margin-bottom:0;border-bottom:none;vertical-align:top;}","{display:block;margin-bottom:","px;margin-left:",";border-left:",";border-bottom-style:none;border-","-style:",";border-","-color:transparent;padding:","px ","px;text-align:",";&:last-of-type{margin-bottom:0;}&[data-garden-focus-visible]::before{top:","px;right:","px;left:","px;}}","{margin-",":","px;vertical-align:top;}"],R,S,5*t.space.base,t.rtl&&"0",t.rtl&&"0",t.rtl?"right":"left",t.borderStyles.solid,t.rtl?"right":"left",t.space.base,2*t.space.base,t.rtl?"right":"left",t.space.base,t.space.base,t.space.base,k,t.rtl?"right":"left",8*t.space.base));var t}),(function(e){return Object(u.h)("tabs.tabs",e)}));T.defaultProps={theme:u.a};var _=Object(n.createContext)(void 0),L=function(){return Object(n.useContext)(_)},H=a.a.forwardRef((function(e,t){var r=e.disabled,n=e.item,i=x(e,["disabled","item"]),c=L(),u=Object(o.d)(t);return r||!c?a.a.createElement(S,y({disabled:r,ref:u},i)):a.a.createElement(S,c.getTabProps(j({item:n,focusRef:u,index:c.tabIndexRef.current++,isSelected:n===c.selectedItem},i)))}));H.displayName="Tab";var A=a.a.forwardRef((function(e,t){var r=L();return r?a.a.createElement(R,r.getTabListProps(j({ref:t},e))):a.a.createElement(R,y({ref:t},e))}));A.displayName="TabList";var D=a.a.forwardRef((function(e,t){var r=e.item,n=x(e,["item"]),i=L();return i?a.a.createElement(k,i.getTabPanelProps(j({item:r,ref:t,index:i.tabPanelIndexRef.current++,"aria-hidden":i.selectedItem!==r},n))):a.a.createElement(k,y({ref:t},n))}));D.displayName="TabPanel";var q=a.a.forwardRef((function(e,t){var r=e.isVertical,i=e.children,c=e.onChange,u=e.selectedItem,l=e.theme,s=x(e,["isVertical","children","onChange","selectedItem","theme"]),d=P(Object(n.useState)(),2),f=d[0],p=d[1],b=Object(n.useRef)(0),m=Object(n.useRef)(0),h=Object(o.c)(u,f),g=j(j({},v({rtl:l.rtl,vertical:r,selectedItem:h,defaultSelectedIndex:0,onSelect:function(e){c?c(e):p(e)}})),{},{tabIndexRef:b,tabPanelIndexRef:m});return a.a.createElement(_.Provider,{value:g},a.a.createElement(T,y({isVertical:r},s,{ref:t}),i))}));q.defaultProps={isVertical:!1,theme:u.a};var W=Object(u.j)(q),X=r("Wbzz"),G=r("7ZOs"),M=a.a.memo((function(){var e=Object(X.useStaticQuery)("2662857005"),t=e.allGoogleSheetBiosRow.nodes,r=e.allGoogleSheetQuotesRow.nodes,o=Object(n.useState)(t[0].name),c=o[0],u=o[1];return a.a.createElement(G.a,null,a.a.createElement(i.b,null,"About"),a.a.createElement(W,{selectedItem:c,onChange:u},a.a.createElement(A,null,t.map((function(e){var t=e.id,r=e.name;return a.a.createElement(H,{item:r,key:t},r)}))),t.map((function(e){var t=e.content,r=e.id,n=e.name;return a.a.createElement(D,{item:n,key:r},t.split("\n").map((function(e,t){return a.a.createElement(i.a,{key:t},e)})))}))),a.a.createElement(i.b,null,"Quotes"),r.map((function(e){var t=e.content,r=e.id,n=e.name,o=e.title;e.url;return a.a.createElement("div",{key:r},a.a.createElement(i.a,{key:r},t),a.a.createElement(i.a,null,n,", ",o))})))}));t.default=M},"7ZOs":function(e,t,r){"use strict";r("q1tI");var n=r("vOnD"),a=n.c.div.withConfig({displayName:"ContentContainer__OuterContentContainer",componentId:"sc-1yyuuqv-0"})(["background-color:white;border-radius:4px;flex:1;margin:36px 24px;max-width:720px;padding:24px 24px;"]);n.c.div.withConfig({displayName:"ContentContainer__InnerContentContainer",componentId:"sc-1yyuuqv-1"})(["background-color:white;border-radius:4px;flex:1;margin:36px 24px;max-width:960px;padding:24px 12px;"]);t.a=a},Jyyn:function(e,t,r){"use strict";r.d(t,"a",(function(){return V})),r.d(t,"b",(function(){return q}));var n=r("q1tI"),a=r.n(n),i=r("vOnD"),o=r("A0PP"),c=r("ufqH");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=s(["\n  ",";\n  ",";\n"]);return d=function(){return e},e}var f=i.c.div.attrs({"data-garden-id":"typography.font","data-garden-version":"8.19.0"})(d(),(function(e){return function(e){var t,r,n,a="inherit"!==e.size&&e.theme.lineHeights[e.size],u=e.isMonospace&&-1!==["sm","md","lg","inherit"].indexOf(e.size),l=u&&e.theme.fonts.mono,s=Object(o.f)(e)?"rtl":"ltr";if(u?t="inherit"===e.size?"calc(1em - 1px)":Object(c.e)("".concat(e.theme.fontSizes[e.size]," - 1px")):"inherit"!==e.size&&(t=e.theme.fontSizes[e.size]),!0===e.isBold?r=e.theme.fontWeights.semibold:!1!==e.isBold&&"inherit"===e.size||(r=e.theme.fontWeights.regular),e.hue){var d="yellow"===e.hue?700:600;n=Object(o.d)(e.hue,d,e.theme)}return Object(i.b)(["line-height:",";color:",";font-family:",";font-size:",";font-weight:",";direction:",";"],a,n,l,t,r,s)}(e)}),(function(e){return Object(o.h)("typography.font",e)}));function p(){var e=s(["\n  border-radius: ",";\n  padding: 1.5px;\n\n  ",";\n\n  ",";\n"]);return p=function(){return e},e}f.defaultProps={theme:o.a,size:"inherit"};var b=Object(i.c)(f).attrs({"data-garden-id":"typography.code","data-garden-version":"8.19.0",as:"code"})(p(),(function(e){return e.theme.borderRadii.sm}),(function(e){return function(e){var t=e.hue||"neutralHue",r=Object(o.d)(t,200,e.theme),n="yellow"===t?800:700,a=Object(o.d)(t,n,e.theme);return Object(i.b)(["background-color:",";color:",";"],r,a)}(e)}),(function(e){return Object(o.h)("typography.code",e)}));function m(){var e=s(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: ",";\n\n  ",";\n"]);return m=function(){return e},e}b.defaultProps={theme:o.a,isMonospace:!0,hue:"neutralHue",size:"inherit"};var h=i.c.div.attrs({"data-garden-id":"typography.ellipsis","data-garden-version":"8.19.0"})(m(),(function(e){return Object(o.f)(e)?"rtl":"ltr"}),(function(e){return Object(o.h)("typography.ellipsis",e)}));function v(){var e=s(["\n  position: relative;\n  top: -1px;\n  vertical-align: middle;\n\n  ",";\n\n  ",";\n"]);return v=function(){return e},e}h.defaultProps={theme:o.a};var g=Object(i.c)((function(e){var t=e.children,r=l(e,["children"]);return a.a.cloneElement(n.Children.only(t),r)})).attrs({"data-garden-id":"typography.icon","data-garden-version":"8.19.0"})(v(),(function(e){return function(e){var t=e.isStart&&"".concat(2*e.theme.space.base,"px"),r=e.theme.iconSizes.md;return Object(i.b)(["margin-",":",";width:",";height:",";"],e.theme.rtl?"left":"right",t,r,r)}(e)}),(function(e){return Object(o.h)("typography.icon",e)}));function y(){var e=s(["\n  ",";\n  ",";\n"]);return y=function(){return e},e}function O(){var e=s(["\n  ",";\n  ",";\n"]);return O=function(){return e},e}g.defaultProps={theme:o.a};var j=function(e){var t=Object(o.f)(e);return Object(i.b)(["direction:",";margin:0;margin-",":24px;padding:0;list-style-position:outside;list-style-type:",";"],t?"rtl":"ltr",t?"right":"left",e.listType)},x=i.c.ol.attrs({"data-garden-id":"typography.ordered_list","data-garden-version":"8.19.0"})(O(),(function(e){return j(e)}),(function(e){return Object(o.h)("typography.ordered_list",e)}));x.defaultProps={theme:o.a};var w=i.c.ul.attrs({"data-garden-id":"typography.unordered_list","data-garden-version":"8.19.0"})(y(),(function(e){return j(e)}),(function(e){return Object(o.h)("typography.unordered_list",e)}));function P(){var e=s(["\n  ",";\n"]);return P=function(){return e},e}function z(){var e=s(["\n  ",";\n"]);return z=function(){return e},e}function E(){var e=s(["\n  ",";\n"]);return E=function(){return e},e}function S(){var e=s(["\n  /* stylelint-disable */\n  margin-",": ",";\n  padding-",": ",";\n  /* stylelint-enable */\n\n  ",";\n"]);return S=function(){return e},e}w.defaultProps={theme:o.a};var I=function(e){var t;switch(e.space){case"small":t="0";break;case"large":t="".concat(Object(c.e)("".concat(e.theme.space.base," * 1px"))," 0");break;case"medium":default:t="".concat(Object(c.e)("".concat(e.theme.space.base," * 0.5px"))," 0")}return Object(i.b)(["padding:",";"],t)},R=i.c.li.attrs({"data-garden-id":"typography.ordered_list_item","data-garden-version":"8.19.0"})(S(),(function(e){return Object(o.f)(e)?"right":"left"}),(function(e){return Object(c.e)("".concat(e.theme.space.base," * -1px"))}),(function(e){return Object(o.f)(e)?"right":"left"}),(function(e){return Object(c.e)("".concat(e.theme.space.base," * 1px"))}),(function(e){return Object(o.h)("typography.ordered_list_item",e)}));R.defaultProps={theme:o.a};var C=Object(i.c)(f)(E(),(function(e){return I(e)}));C.defaultProps={theme:o.a,space:"medium"};var k=i.c.li.attrs({"data-garden-id":"typography.unordered_list_item","data-garden-version":"8.19.0"})(z(),(function(e){return Object(o.h)("typography.unordered_list_item",e)}));k.defaultProps={theme:o.a};var N=Object(i.c)(f)(P(),(function(e){return I(e)}));function T(){var e=s(["\n  margin: 0;\n  padding: 0;\n  direction: ",";\n\n  & + & {\n    margin-top: ",";\n  }\n\n  ",";\n"]);return T=function(){return e},e}N.defaultProps={theme:o.a,space:"medium"};var _=i.c.p.attrs({"data-garden-id":"typography.paragraph","data-garden-version":"8.19.0"})(T(),(function(e){return e.theme.rtl?"rtl":"ltr"}),(function(e){return e.theme.lineHeights[e.size]}),(function(e){return Object(o.h)("typography.paragraph",e)}));_.defaultProps={theme:o.a,size:"md"};var L=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"sm"},n))}));L.displayName="SM",L.defaultProps={tag:"div"};var H=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"md"},n))}));H.displayName="MD",H.defaultProps={tag:"div"};var A=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"lg"},n))}));A.displayName="LG",A.defaultProps={tag:"div"};var D=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"xl"},n))}));D.displayName="XL",D.defaultProps={tag:"div"};var q=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"xxl"},n))}));q.displayName="XXL",q.defaultProps={tag:"div"};var W=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"xxxl"},n))}));W.displayName="XXXL",W.defaultProps={tag:"div"};var X=a.a.forwardRef((function(e,t){var r,n=e.size,i=e.hue,o=l(e,["size","hue"]);return r="small"===n?"sm":"medium"===n?"md":"large"===n?"lg":"inherit",a.a.createElement(b,u({ref:t,size:r,hue:i},o))}));X.displayName="Code",X.defaultProps={hue:"grey",size:"inherit"};var G=a.a.forwardRef((function(e,t){var r=e.tag,n=l(e,["tag"]);return a.a.createElement(f,u({as:r,ref:t,size:"inherit"},n))}));G.displayName="Span",G.defaultProps={tag:"span"};G.StartIcon=function(e){return a.a.createElement(g,u({isStart:!0},e))},G.Icon=function(e){return a.a.createElement(g,e)};var M=a.a.forwardRef((function(e,t){var r=e.children,n=e.title,i=e.tag,o=l(e,["children","title","tag"]),c=void 0;return void 0!==n?c=n:"string"==typeof r&&(c=r),a.a.createElement(h,u({as:i,ref:t,title:c},o),r)}));M.displayName="Ellipsis",M.defaultProps={tag:"div"};var V=a.a.forwardRef((function(e,t){var r,n=e.size,i=l(e,["size"]);return r="small"===n?"sm":"medium"===n?"md":"lg",a.a.createElement(_,u({ref:t,size:r},i))}));V.displayName="Paragraph",V.defaultProps={size:"medium"};var J=Object(n.createContext)(void 0),U=a.a.forwardRef((function(e,t){var r=e.children,i=l(e,["children"]),o=function(){var e=Object(n.useContext)(J);if(!e)throw new Error("This component must be rendered within an `OrderedList` component.");return e}().size;return a.a.createElement(R,u({ref:t},i),a.a.createElement(C,{space:o},r))}));U.displayName="OrderedListItem";var B=a.a.forwardRef((function(e,t){var r=e.size,n=e.type,i=l(e,["size","type"]);return a.a.createElement(J.Provider,{value:{size:r}},a.a.createElement(x,u({ref:t,listType:n},i)))}));B.displayName="OrderedList",B.defaultProps={size:"medium",type:"decimal"},B.Item=U;var Q=Object(n.createContext)(void 0),Z=a.a.forwardRef((function(e,t){var r=e.children,i=l(e,["children"]),o=function(){var e=Object(n.useContext)(Q);if(!e)throw new Error("This component must be rendered within an `UnorderedList` component.");return e}().size;return a.a.createElement(k,u({ref:t},i),a.a.createElement(N,{space:o},r))}));Z.displayName="UnorderedListItem";var Y=a.a.forwardRef((function(e,t){var r=e.size,n=e.type,i=l(e,["size","type"]);return a.a.createElement(Q.Provider,{value:{size:r}},a.a.createElement(w,u({ref:t,listType:n},i)))}));Y.displayName="UnorderedList",Y.defaultProps={size:"medium",type:"disc"},Y.Item=Z}}]);
//# sourceMappingURL=component---src-pages-about-tsx-68c7d75f1179d02ffcf9.js.map