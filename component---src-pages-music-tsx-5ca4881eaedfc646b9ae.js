(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7ZOs":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=i.c.div.withConfig({displayName:"ContentContainer__OuterContentContainer",componentId:"sc-1yyuuqv-0"})(["background-color:white;border-radius:4px;flex:1;flex-grow:0;margin:36px 24px;max-width:720px;width:100%;"]),c=i.c.div.withConfig({displayName:"ContentContainer__InnerContentContainer",componentId:"sc-1yyuuqv-1"})(["background-color:white;border-radius:4px;flex:1;margin:36px 24px;max-width:960px;padding:24px 12px;"]),u=a.a.memo((function(e){var t=e.children;return a.a.createElement(o,null,a.a.createElement(c,null,t))}));t.a=u},Fin9:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n("u2Gm"),i=n("G/LD"),o=n("17x9"),c=n.n(o);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function l(e){var t=void 0===e?{}:e,n=t.idPrefix,o=t.expandedSections,c=t.onChange,l=t.expandable,d=void 0===l||l,f=t.collapsible,p=void 0===f||f,m=null!=o,b=Object(a.a)(),h=Object(r.useState)(n||b("accordion_1.0.1"))[0],v=h+"--trigger",g=h+"--panel",O=Object(r.useState)([0]),y=O[0],j=O[1],x=Object(i.c)(o,y),w=Object(r.useState)(p?[]:y),E=w[0],P=w[1],z=[],C=function(e){var t=[],n=[];z.forEach((function(r){var a=!1;r===e?a=!p||-1===y.indexOf(r):d&&(a=-1!==y.indexOf(r)),a&&(t.push(r),p||n.push(r))})),c&&c(e),!1===m&&j(t),P(n)};return{getHeaderProps:function(e){var t=void 0===e?{}:e,n=t.role,r=void 0===n?"heading":n,a=t.ariaLevel,i=s(t,["role","ariaLevel"]);if(void 0===a)throw new Error("Accessibility Error: You must apply the `ariaLevel` prop to the element that contains your heading.");return u({role:r,"aria-level":a,"data-garden-container-id":"containers.accordion","data-garden-container-version":"1.0.1"},i)},getTriggerProps:function(e){var t=void 0===e?{}:e,n=t.index,r=t.role,a=void 0===r?"button":r,o=t.tabIndex,c=void 0===o?0:o,l=s(t,["index","role","tabIndex"]);if(void 0===n)throw new Error("Accessibility Error: You must provide an `index` option to `getTriggerProps()`");return z.push(n),u({id:v+":"+n,role:a,tabIndex:c,"aria-controls":g+":"+n,"aria-disabled":-1!==E.indexOf(n),"aria-expanded":m?x.includes(n):y.includes(n),onClick:Object(i.b)(l.onClick,(function(){return C(n)})),onKeyDown:Object(i.b)(l.onKeyDown,(function(e){e.keyCode!==i.a.SPACE&&e.keyCode!==i.a.ENTER||(C(n),e.preventDefault())}))},l)},getPanelProps:function(e){var t=void 0===e?{}:e,n=t.index,r=t.role,a=void 0===r?"region":r,i=s(t,["index","role"]);if(void 0===n)throw new Error("Accessibility Error: You must provide an `index` option to `getSectionProps()`");return u({id:g+":"+n,role:a,"aria-hidden":m?!x.includes(n):!y.includes(n),"aria-labelledby":v+":"+n},i)},expandedSections:x,disabledSections:E}}c.a.func,c.a.func,c.a.array,c.a.bool,c.a.bool,c.a.string},Jyyn:function(e,t,n){"use strict";n.d(t,"a",(function(){return U})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return B}));var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("A0PP"),c=n("ufqH");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=l(["\n  ",";\n  ",";\n"]);return d=function(){return e},e}var f=i.c.div.attrs({"data-garden-id":"typography.font","data-garden-version":"8.21.0"})(d(),(function(e){return function(e){var t,n,r,a="inherit"!==e.size&&e.theme.lineHeights[e.size],u=e.isMonospace&&-1!==["sm","md","lg","inherit"].indexOf(e.size),s=u&&e.theme.fonts.mono,l=Object(o.f)(e)?"rtl":"ltr";if(u?t="inherit"===e.size?"calc(1em - 1px)":Object(c.e)("".concat(e.theme.fontSizes[e.size]," - 1px")):"inherit"!==e.size&&(t=e.theme.fontSizes[e.size]),!0===e.isBold?n=e.theme.fontWeights.semibold:!1!==e.isBold&&"inherit"===e.size||(n=e.theme.fontWeights.regular),e.hue){var d="yellow"===e.hue?700:600;r=Object(o.d)(e.hue,d,e.theme)}return Object(i.b)(["line-height:",";color:",";font-family:",";font-size:",";font-weight:",";direction:",";"],a,r,s,t,n,l)}(e)}),(function(e){return Object(o.h)("typography.font",e)}));function p(){var e=l(["\n  border-radius: ",";\n  padding: 1.5px;\n\n  ",";\n\n  ",";\n"]);return p=function(){return e},e}f.defaultProps={theme:o.a,size:"inherit"};var m=Object(i.c)(f).attrs({"data-garden-id":"typography.code","data-garden-version":"8.21.0",as:"code"})(p(),(function(e){return e.theme.borderRadii.sm}),(function(e){return function(e){var t=e.hue||"neutralHue",n=Object(o.d)(t,200,e.theme),r="yellow"===t?800:700,a=Object(o.d)(t,r,e.theme);return Object(i.b)(["background-color:",";color:",";"],n,a)}(e)}),(function(e){return Object(o.h)("typography.code",e)}));function b(){var e=l(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  direction: ",";\n\n  ",";\n"]);return b=function(){return e},e}m.defaultProps={theme:o.a,isMonospace:!0,hue:"neutralHue",size:"inherit"};var h=i.c.div.attrs({"data-garden-id":"typography.ellipsis","data-garden-version":"8.21.0"})(b(),(function(e){return Object(o.f)(e)?"rtl":"ltr"}),(function(e){return Object(o.h)("typography.ellipsis",e)}));function v(){var e=l(["\n  position: relative;\n  top: -1px;\n  vertical-align: middle;\n\n  ",";\n\n  ",";\n"]);return v=function(){return e},e}h.defaultProps={theme:o.a};var g=Object(i.c)((function(e){var t=e.children,n=(e.isStart,s(e,["children","isStart"]));return a.a.cloneElement(r.Children.only(t),n)})).attrs({"data-garden-id":"typography.icon","data-garden-version":"8.21.0"})(v(),(function(e){return function(e){var t=e.isStart&&"".concat(2*e.theme.space.base,"px"),n=e.theme.iconSizes.md;return Object(i.b)(["margin-",":",";width:",";height:",";"],e.theme.rtl?"left":"right",t,n,n)}(e)}),(function(e){return Object(o.h)("typography.icon",e)}));function O(){var e=l(["\n  ",";\n  ",";\n"]);return O=function(){return e},e}function y(){var e=l(["\n  ",";\n  ",";\n"]);return y=function(){return e},e}g.defaultProps={theme:o.a};var j=function(e){var t=Object(o.f)(e);return Object(i.b)(["direction:",";margin:0;margin-",":24px;padding:0;list-style-position:outside;list-style-type:",";"],t?"rtl":"ltr",t?"right":"left",e.listType)},x=i.c.ol.attrs({"data-garden-id":"typography.ordered_list","data-garden-version":"8.21.0"})(y(),(function(e){return j(e)}),(function(e){return Object(o.h)("typography.ordered_list",e)}));x.defaultProps={theme:o.a};var w=i.c.ul.attrs({"data-garden-id":"typography.unordered_list","data-garden-version":"8.21.0"})(O(),(function(e){return j(e)}),(function(e){return Object(o.h)("typography.unordered_list",e)}));function E(){var e=l(["\n  ",";\n"]);return E=function(){return e},e}function P(){var e=l(["\n  ",";\n"]);return P=function(){return e},e}function z(){var e=l(["\n  ",";\n"]);return z=function(){return e},e}function C(){var e=l(["\n  /* stylelint-disable */\n  margin-",": ",";\n  padding-",": ",";\n  /* stylelint-enable */\n\n  ",";\n"]);return C=function(){return e},e}w.defaultProps={theme:o.a};var S=function(e){var t;switch(e.space){case"small":t="0";break;case"large":t="".concat(Object(c.e)("".concat(e.theme.space.base," * 1px"))," 0");break;case"medium":default:t="".concat(Object(c.e)("".concat(e.theme.space.base," * 0.5px"))," 0")}return Object(i.b)(["padding:",";"],t)},H=i.c.li.attrs({"data-garden-id":"typography.ordered_list_item","data-garden-version":"8.21.0"})(C(),(function(e){return Object(o.f)(e)?"right":"left"}),(function(e){return Object(c.e)("".concat(e.theme.space.base," * -1px"))}),(function(e){return Object(o.f)(e)?"right":"left"}),(function(e){return Object(c.e)("".concat(e.theme.space.base," * 1px"))}),(function(e){return Object(o.h)("typography.ordered_list_item",e)}));H.defaultProps={theme:o.a};var R=Object(i.c)(f)(z(),(function(e){return S(e)}));R.defaultProps={theme:o.a,space:"medium"};var k=i.c.li.attrs({"data-garden-id":"typography.unordered_list_item","data-garden-version":"8.21.0"})(P(),(function(e){return Object(o.h)("typography.unordered_list_item",e)}));k.defaultProps={theme:o.a};var I=Object(i.c)(f)(E(),(function(e){return S(e)}));function _(){var e=l(["\n  margin: 0;\n  padding: 0;\n  direction: ",";\n\n  & + & {\n    margin-top: ",";\n  }\n\n  ",";\n"]);return _=function(){return e},e}I.defaultProps={theme:o.a,space:"medium"};var L=i.c.p.attrs({"data-garden-id":"typography.paragraph","data-garden-version":"8.21.0"})(_(),(function(e){return e.theme.rtl?"rtl":"ltr"}),(function(e){return e.theme.lineHeights[e.size]}),(function(e){return Object(o.h)("typography.paragraph",e)}));L.defaultProps={theme:o.a,size:"md"};var N=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"sm"},r))}));N.displayName="SM",N.defaultProps={tag:"div"};var A=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"md"},r))}));A.displayName="MD",A.defaultProps={tag:"div"};var T=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"lg"},r))}));T.displayName="LG",T.defaultProps={tag:"div"};var M=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"xl"},r))}));M.displayName="XL",M.defaultProps={tag:"div"};var B=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"xxl"},r))}));B.displayName="XXL",B.defaultProps={tag:"div"};var D=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"xxxl"},r))}));D.displayName="XXXL",D.defaultProps={tag:"div"};var F=a.a.forwardRef((function(e,t){var n,r=e.size,i=e.hue,o=s(e,["size","hue"]);return n="small"===r?"sm":"medium"===r?"md":"large"===r?"lg":"inherit",a.a.createElement(m,u({ref:t,size:n,hue:i},o))}));F.displayName="Code",F.defaultProps={hue:"grey",size:"inherit"};var W=a.a.forwardRef((function(e,t){var n=e.tag,r=s(e,["tag"]);return a.a.createElement(f,u({as:n,ref:t,size:"inherit"},r))}));W.displayName="Span",W.defaultProps={tag:"span"};W.StartIcon=function(e){return a.a.createElement(g,u({isStart:!0},e))},W.Icon=function(e){return a.a.createElement(g,e)};var q=a.a.forwardRef((function(e,t){var n=e.children,r=e.title,i=e.tag,o=s(e,["children","title","tag"]),c=void 0;return void 0!==r?c=r:"string"==typeof n&&(c=n),a.a.createElement(h,u({as:i,ref:t,title:c},o),n)}));q.displayName="Ellipsis",q.defaultProps={tag:"div"};var U=a.a.forwardRef((function(e,t){var n,r=e.size,i=s(e,["size"]);return n="small"===r?"sm":"medium"===r?"md":"lg",a.a.createElement(L,u({ref:t,size:n},i))}));U.displayName="Paragraph",U.defaultProps={size:"medium"};var G=Object(r.createContext)(void 0),X=a.a.forwardRef((function(e,t){var n=e.children,i=s(e,["children"]),o=function(){var e=Object(r.useContext)(G);if(!e)throw new Error("This component must be rendered within an `OrderedList` component.");return e}().size;return a.a.createElement(H,u({ref:t},i),a.a.createElement(R,{space:o},n))}));X.displayName="OrderedListItem";var $=a.a.forwardRef((function(e,t){var n=e.size,r=e.type,i=s(e,["size","type"]);return a.a.createElement(G.Provider,{value:{size:n}},a.a.createElement(x,u({ref:t,listType:r},i)))}));$.displayName="OrderedList",$.defaultProps={size:"medium",type:"decimal"},$.Item=X;var J=Object(r.createContext)(void 0),Y=a.a.forwardRef((function(e,t){var n=e.children,i=s(e,["children"]),o=function(){var e=Object(r.useContext)(J);if(!e)throw new Error("This component must be rendered within an `UnorderedList` component.");return e}().size;return a.a.createElement(k,u({ref:t},i),a.a.createElement(I,{space:o},n))}));Y.displayName="UnorderedListItem";var K=a.a.forwardRef((function(e,t){var n=e.size,r=e.type,i=s(e,["size","type"]);return a.a.createElement(J.Provider,{value:{size:n}},a.a.createElement(w,u({ref:t,listType:r},i)))}));K.displayName="UnorderedList",K.defaultProps={size:"medium",type:"disc"},K.Item=Y},UfW6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("Jyyn"),o=n("gUio"),c=n("7ZOs"),u=n("vrFN"),s=a.a.memo((function(){return a.a.createElement(i.b,null,"Albums")})),l=a.a.memo((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.b,null,"Works by Genre"),a.a.createElement(o.a,{level:3},a.a.createElement(o.a.Section,null,a.a.createElement(o.a.Header,null,a.a.createElement(o.a.Label,null,"Orchestral")),a.a.createElement(o.a.Panel,null,a.a.createElement("div",null,a.a.createElement("h1",null,"Dancing on the Brink of the World"),a.a.createElement("ul",null,a.a.createElement("li",null,"Ohlone Song"))))),a.a.createElement(o.a.Section,null,a.a.createElement(o.a.Header,null,a.a.createElement(o.a.Label,null,"Solo Guitar")),a.a.createElement(o.a.Panel,null,"Here is some solo guitar music.")),a.a.createElement(o.a.Section,null,a.a.createElement(o.a.Header,null,a.a.createElement(o.a.Label,null,"Solo Piano")),a.a.createElement(o.a.Panel,null,"Here is some solo piano music.")),a.a.createElement(o.a.Section,null,a.a.createElement(o.a.Header,null,a.a.createElement(o.a.Label,null,"Band")),a.a.createElement(o.a.Panel,null,"Here is some solo band music."))))})),d=a.a.memo((function(){return a.a.createElement(c.a,null,a.a.createElement(u.a,{title:"Music"}),a.a.createElement(i.c,null,"Music"),a.a.createElement(s,null),a.a.createElement(l,null))}));t.default=d},gUio:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ae}));var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("A0PP"),c=n("17x9"),u=n.n(c),s=n("G/LD"),l=n("Fin9");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(){var e=h(["\n  ","\n  min-width: ","px;\n  word-break: break-word;\n\n  ",";\n"]);return O=function(){return e},e}var y=i.c.div.attrs({"data-garden-id":"accordions.step_content","data-garden-version":"8.21.0"})(O(),(function(e){var t=e.theme,n=t.rtl,r=t.space,a=e.isActive?8*r.base:6*r.base,o=n?6*r.base:5*r.base,c=n?5*r.base:6*r.base,u=n?3*r.base:"0",s=n?"0":3*r.base,l=3*r.base;return Object(i.b)(["margin:","px ","px ","px ","px;padding:0 ","px ","px ","px;"],l,u,l,s,o,a,c)}),(function(e){return 30*e.theme.space.base}),(function(e){return Object(o.h)("accordions.step_content",e)}));function j(){var e=h(["\n  display: block;\n  position: absolute;\n  top: ","px;\n  right: ",";\n  left: ",";\n  flex: 1;\n  border-top: ",";\n  border-color: ",";\n"]);return j=function(){return e},e}y.defaultProps={theme:o.a};var x=i.c.div.attrs({"data-garden-id":"accordions.step_line","data-garden-version":"8.21.0"})(j(),(function(e){return 3*e.theme.space.base}),(function(e){return"calc(50% + ".concat(6*e.theme.space.base,"px)")}),(function(e){return"calc(-50% + ".concat(6*e.theme.space.base,"px)")}),(function(e){return e.theme.borders.sm}),(function(e){return Object(o.d)("neutralHue",300,e.theme)}));function w(){var e=h(["\n  position: ",";\n  flex: ",";\n  min-width: ",";\n\n  &:last-of-type "," {\n    display: ",";\n  }\n\n  &:first-of-type "," {\n    display: ",";\n  }\n\n  &:not(:last-of-type) "," {\n    /* stylelint-disable-next-line property-no-unknown */\n    border-",": ",";\n    border-color: ",";\n  }\n\n  ",";\n"]);return w=function(){return e},e}x.defaultProps={theme:o.a};var E=i.c.li.attrs({"data-garden-id":"accordions.step","data-garden-version":"8.21.0"})(w(),(function(e){return e.isHorizontal&&"relative"}),(function(e){return e.isHorizontal&&"1"}),(function(e){return e.isHorizontal&&"".concat(15*e.theme.space.base,"px")}),x,(function(e){return e.theme.rtl&&"none"}),x,(function(e){return!e.theme.rtl&&"none"}),y,(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme.borders.sm}),(function(e){return Object(o.d)("neutralHue",300,e.theme)}),(function(e){return Object(o.h)("accordions.step",e)}));function P(){var e=h(["\n  transition: max-height 0.25s ease-in-out;\n  overflow: hidden;\n  max-height: ","; /* stylelint-disable-line */\n\n  ",";\n"]);return P=function(){return e},e}E.defaultProps={theme:o.a};var z=i.c.div.attrs({"data-garden-id":"accordions.step_inner_content","data-garden-version":"8.21.0"})(P(),(function(e){return!e.isActive&&"0 !important"}),(function(e){return Object(o.h)("accordions.step_inner_content",e)}));function C(){var e=h(["\n  display: ",";\n  margin: 0; /* [1] */\n  padding: 0; /* [1] */\n  list-style: none; /* [1] */\n\n  ",";\n"]);return C=function(){return e},e}z.defaultProps={theme:o.a};var S=i.c.ol.attrs({"data-garden-id":"accordions.stepper","data-garden-version":"8.21.0"})(C(),(function(e){return e.isHorizontal&&"flex"}),(function(e){return Object(o.h)("accordions.stepper",e)}));function H(){var e=h(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;\n  border-radius: 100%;\n  ","\n  ","\n\n  ",";\n"]);return H=function(){return e},e}function R(){var e=h(["\n  display: flex;\n  flex-basis: 100%;\n  justify-content: center;\n  width: 100%;\n"]);return R=function(){return e},e}S.defaultProps={theme:o.a};var k=i.c.div(R()),I=i.c.div.attrs({"data-garden-id":"accordions.step_icon","data-garden-version":"8.21.0"})(H(),(function(e){var t="".concat(6*e.theme.space.base,"px"),n=e.theme.fontSizes.sm;return Object(i.b)(["margin-bottom:",";margin-",":",";width:",";min-width:",";height:",";min-height:",";line-height:",";font-size:",";"],e.isHorizontal&&"".concat(2*e.theme.space.base,"px"),e.theme.rtl?"left":"right",!e.isHorizontal&&"".concat(3*e.theme.space.base,"px"),t,t,t,t,Object(o.e)(t,n),n)}),(function(e){return Object(i.b)(["background:",";color:",";"],e.isActive?Object(o.d)("neutralHue",600,e.theme):Object(o.d)("neutralHue",200,e.theme),e.isActive?e.theme.colors.background:Object(o.d)("neutralHue",800,e.theme))}),(function(e){return Object(o.h)("accordions.step_icon",e)}));function _(){var e=h(["\n  display: ",";\n  align-items: ",";\n  text-align: ",";\n  line-height: ",";\n  color: ",";\n  font-weight: ",";\n  ",";\n"]);return _=function(){return e},e}k.defaultProps={theme:o.a},I.defaultProps={theme:o.a};var L=i.c.div.attrs({"data-garden-id":"accordions.step_label","data-garden-version":"8.21.0"})(_(),(function(e){return!e.isHorizontal&&"flex"}),(function(e){return!e.isHorizontal&&"center"}),(function(e){return e.isHorizontal&&"center"}),(function(e){return Object(o.e)(5*e.theme.space.base,e.theme.fontSizes.md)}),(function(e){return e.isActive?Object(o.d)("neutralHue",800,e.theme):Object(o.d)("neutralHue",600,e.theme)}),(function(e){return e.isActive&&600}),(function(e){return Object(o.h)("accordions.step_label",e)}));function N(){var e=h(["\n  display: ",";\n  padding: ",";\n  word-wrap: ",";\n"]);return N=function(){return e},e}L.defaultProps={theme:o.a};var A=i.c.div.attrs({"data-garden-id":"accordions.step_label_text","data-garden-version":"8.21.0"})(N(),(function(e){return e.isHidden&&"none"}),(function(e){return e.isHorizontal&&"0 ".concat(3*e.theme.space.base,"px")}),(function(e){return e.isHorizontal&&"break-word"}));function T(){var e=h(["\n  ",";\n"]);return T=function(){return e},e}A.defaultProps={theme:o.a};var M=i.c.div.attrs({"data-garden-id":"accordions.accordion","data-garden-version":"8.21.0"})(T(),(function(e){return Object(o.h)("accordions.accordion",e)}));function B(){var e=h(["\n  ",";\n  border-bottom: ",";\n\n  ",";\n"]);return B=function(){return e},e}M.defaultProps={theme:o.a};var D=i.c.section.attrs({"data-garden-id":"accordions.panel","data-garden-version":"8.21.0"})(B(),(function(e){var t=e.theme.space.base,n=2*t,r=5*t,a=8*t;return e.isCompact&&(n=2*t,r=3*t,a=4*t),!1===e.isExpanded&&(n=0,a=0),Object(i.b)(["transition:padding 0.25s ease-in-out;padding:","px ","px ","px;"],n,r,a)}),(function(e){return"".concat(e.theme.borders.sm," ").concat(e.isBare?"transparent":Object(o.d)("neutralHue",300,e.theme))}),(function(e){return Object(o.h)("accordions.panel",e)}));function F(){var e=h(["\n  &:last-child "," {\n    border: none;\n  }\n\n  ",";\n"]);return F=function(){return e},e}D.defaultProps={theme:o.a};var W=i.c.div.attrs({"data-garden-id":"accordions.section","data-garden-version":"8.21.0"})(F(),D,(function(e){return Object(o.h)("accordions.section",e)}));function q(){var e=h(["\n  display: flex;\n  align-items: center;\n  box-shadow: ",";\n  font-size: ",";\n\n  &:hover {\n    cursor: ",";\n  }\n\n  ",";\n"]);return q=function(){return e},e}W.defaultProps={theme:o.a};var U=i.c.div.attrs({"data-garden-id":"accordions.header","data-garden-version":"8.21.0"})(q(),(function(e){return e.isFocused&&"".concat(e.theme.shadows.md(Object(o.d)("primaryHue",600,e.theme,.35))," inset")}),(function(e){return e.theme.fontSizes.md}),(function(e){return(e.isCollapsible||!e.isExpanded)&&"pointer"}),(function(e){return Object(o.h)("accordions.header",e)}));function G(){var e=h(["\n  transition: color 0.1s ease-in-out;\n  outline: none;\n  border: none;\n  background: transparent;\n  padding: ",";\n  width: 100%;\n  text-align: ",";\n  line-height: ",";\n  font-size: ",";\n  font-weight: ",";\n\n  ","\n\n  &::-moz-focus-inner {\n    border: 0; /* [1] */\n  }\n\n  &:hover {\n    cursor: ",";\n  }\n\n  ",";\n"]);return G=function(){return e},e}U.defaultProps={theme:o.a};var X=i.c.button.attrs({"data-garden-id":"accordions.button","data-garden-version":"8.21.0"})(G(),(function(e){return e.isCompact?"".concat(2*e.theme.space.base,"px ").concat(3*e.theme.space.base,"px"):"".concat(5*e.theme.space.base,"px")}),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return Object(o.e)(5*e.theme.space.base,e.theme.fontSizes.md)}),(function(e){return e.theme.fontSizes.md}),(function(e){return e.theme.fontWeights.semibold}),(function(e){var t=Object(o.d)("primaryHue",600,e.theme),n=e.isCollapsible||!e.isExpanded;return Object(i.b)(["color:",";&:hover{cursor:",";color:",";}"],n&&e.isHovered&&t,n&&"pointer",n&&t)}),(function(e){return(e.isCollapsible||!e.isExpanded)&&"pointer"}),(function(e){return Object(o.h)("accordions.button",e)}));function $(){var e=h(["\n  transition: max-height 0.25s ease-in-out;\n  /* stylelint-disable-next-line declaration-no-important */\n  max-height: ","; /* [1] */\n  overflow: hidden;\n  line-height: ",";\n  font-size: ",";\n\n  ",";\n"]);return $=function(){return e},e}X.defaultProps={theme:o.a};var J=i.c.div.attrs({"data-garden-id":"accordions.step_inner_panel","data-garden-version":"8.21.0"})($(),(function(e){return!e.isExpanded&&"0 !important"}),(function(e){return Object(o.e)(5*e.theme.space.base,e.theme.fontSizes.md)}),(function(e){return e.theme.fontSizes.md}),(function(e){return Object(o.h)("accordions.step_inner_panel",e)}));function Y(){var e=h(["\n  transform: ",";\n  transition: transform 0.25s ease-in-out, color 0.1s ease-in-out;\n  box-sizing: content-box;\n  padding: ",";\n  width: ",";\n  height: ",";\n  vertical-align: middle;\n\n  ","\n\n  ",";\n"]);return Y=function(){return e},e}J.defaultProps={theme:o.a};var K=Object(i.c)((function(e){var t=e.children,n=(e.isRotated,e.isHovered,e.isCompact,e.isCollapsible,b(e,["children","isRotated","isHovered","isCompact","isCollapsible"]));return Object(r.cloneElement)(r.Children.only(t),n)})).attrs({"data-garden-id":"accordions.rotate_icon","data-garden-version":"8.21.0"})(Y(),(function(e){return e.isRotated&&"rotate(".concat(e.theme.rtl?"-":"+","180deg)")}),(function(e){return e.isCompact?"".concat(1.5*e.theme.space.base,"px ").concat(3*e.theme.space.base,"px"):"".concat(5*e.theme.space.base,"px")}),(function(e){return e.theme.iconSizes.md}),(function(e){return e.theme.iconSizes.md}),(function(e){var t=Object(o.d)("primaryHue",600,e.theme),n=e.isCollapsible||!e.isRotated;return Object(i.b)(["color:",";&:hover{color:",";}"],n?e.isHovered&&t:Object(o.d)("neutralHue",400,e.theme),n&&t)}),(function(e){return Object(o.h)("accordions.rotate_icon",e)}));K.defaultProps={theme:o.a};var Z=Object(r.createContext)(void 0),Q=function(){var e=Object(r.useContext)(Z);if(void 0===e)throw new Error("This component must be rendered within a Stepper component");return e},V=Object(r.createContext)(void 0),ee=function(){var e=Object(r.useContext)(V);if(void 0===e)throw new Error("This component must be rendered within a Stepper.Step component");return e},te=Object(r.createContext)(void 0),ne=function(){var e=Object(r.useContext)(te);if(void 0===e)throw new Error("This component must be rendered within a Accordion component");return e},re=Object(r.createContext)(void 0),ae=function(){var e=Object(r.useContext)(re);if(void 0===e)throw new Error("This component must be rendered within a Accordion.Section component");return e},ie=Object(r.createContext)(void 0),oe=Object(r.forwardRef)((function(e,t){var n=Q(),i=n.currentIndexRef,o=n.isHorizontal,c={currentStepIndex:Object(r.useRef)(i.current++).current};return a.a.createElement(V.Provider,{value:c},a.a.createElement(E,f({ref:t,isHorizontal:o},e),o&&a.a.createElement(x,null),e.children))}));function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}oe.displayName="Step";var ue=Object(r.createElement)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.25,d:"M3 9l3 3 7-7"});function se(e){return Object(r.createElement)("svg",ce({width:16,height:16,viewBox:"0 0 16 16",focusable:"false",role:"presentation"},e),ue)}var le=Object(r.forwardRef)((function(e,t){var n=ee().currentStepIndex,r=Q(),i=r.activeIndex,o=r.isHorizontal,c=n+1,u=e.icon||c,s=i===n,l=i>n,d=a.a.createElement(I,{isActive:s,isHorizontal:o},l?a.a.createElement(se,null):u);return a.a.createElement(L,f({ref:t,isActive:s,isHorizontal:o},e),o?a.a.createElement(k,null,d):d,a.a.createElement(A,{isHidden:e.isHidden,isHorizontal:o},e.children))}));le.displayName="Label",le.propTypes={icon:u.a.node,isHidden:u.a.bool};var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},fe=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,be=/^0o[0-7]+$/i,he=parseInt,ve="object"==typeof de&&de&&de.Object===Object&&de,ge="object"==typeof self&&self&&self.Object===Object&&self,Oe=ve||ge||Function("return this")(),ye=Object.prototype.toString,je=Math.max,xe=Math.min,we=function(){return Oe.Date.now()};function Ee(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Pe(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==ye.call(e)}(e))return NaN;if(Ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(fe,"");var n=me.test(e);return n||be.test(e)?he(e.slice(2),n?2:8):pe.test(e)?NaN:+e}var ze=function(e,t,n){var r,a,i,o,c,u,s=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=a;return r=a=void 0,s=t,o=e.apply(i,n)}function m(e){return s=e,c=setTimeout(h,t),l?p(e):o}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-s>=i}function h(){var e=we();if(b(e))return v(e);c=setTimeout(h,function(e){var n=t-(e-u);return d?xe(n,i-(e-s)):n}(e))}function v(e){return c=void 0,f&&r?p(e):(r=a=void 0,o)}function g(){var e=we(),n=b(e);if(r=arguments,a=this,u=e,n){if(void 0===c)return m(u);if(d)return c=setTimeout(h,t),p(u)}return void 0===c&&(c=setTimeout(h,t)),o}return t=Pe(t)||0,Ee(n)&&(l=!!n.leading,i=(d="maxWait"in n)?je(Pe(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=a=c=void 0},g.flush=function(){return void 0===c?o:v(we())},g},Ce=Object(r.forwardRef)((function(e,t){var n=Object(s.d)(t),i=Q(),o=i.activeIndex,c=i.isHorizontal,u=ee().currentStepIndex===o,l=Object(r.useCallback)(ze((function(){if(n.current){var e=n.current.children[0];e.style.maxHeight="".concat(e.scrollHeight,"px")}}),100),[n]);return Object(r.useEffect)((function(){if(u&&!1===c)return addEventListener("resize",l),l(),function(){removeEventListener("resize",l)}}),[u,c,e.children,l]),!1===c?a.a.createElement(y,f({ref:n,isActive:u},e),a.a.createElement(z,{isActive:u},e.children)):null}));Ce.displayName="Content";var Se=Object(r.forwardRef)((function(e,t){var n=e.isHorizontal,i=e.activeIndex,o=b(e,["isHorizontal","activeIndex"]),c=Object(r.useRef)(0),u={isHorizontal:n,activeIndex:i,currentIndexRef:c};return Object(r.useEffect)((function(){c.current=0})),a.a.createElement(Z.Provider,{value:u},a.a.createElement(S,f({ref:t,isHorizontal:n},o)))}));Se.Step=oe,Se.Label=le,Se.Content=Ce,Se.displayName="Stepper",Se.defaultProps={activeIndex:0,isHorizontal:!1};var He=Object(r.forwardRef)((function(e,t){var n=ne().currentIndexRef,i=Object(r.useRef)(n.current++).current;return a.a.createElement(re.Provider,{value:i},a.a.createElement(W,f({ref:t},e)))}));function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}He.displayName="Section";var ke=Object(r.createElement)("path",{fill:"currentColor",d:"M12.688 5.61a.5.5 0 01.69.718l-.066.062-5 4a.5.5 0 01-.542.054l-.082-.054-5-4a.5.5 0 01.55-.83l.074.05L8 9.359l4.688-3.75z"});function Ie(e){return Object(r.createElement)("svg",Re({width:16,height:16,viewBox:"0 0 16 16",focusable:"false",role:"presentation"},e),ke)}var _e=Object(r.forwardRef)((function(e,t){var n=ne(),i=n.level,o=n.isCompact,c=n.isCollapsible,u=n.getHeaderProps,l=n.getTriggerProps,d=n.expandedSections,f=e.onClick,p=e.onFocus,h=e.onBlur,g=e.onMouseOver,O=e.onMouseOut,y=e.children,j=b(e,["onClick","onFocus","onBlur","onMouseOver","onMouseOut","children"]),x=ae(),w=v(Object(r.useState)(!1),2),E=w[0],P=w[1],z=v(Object(r.useState)(!1),2),C=z[0],S=z[1],H=d.includes(x),R=l({type:"button",index:x}),k=R.onClick,I={isHovered:C,otherTriggerProps:b(R,["onClick"])};return a.a.createElement(ie.Provider,{value:I},a.a.createElement(U,u(m({ref:t,ariaLevel:i,isCompact:o,isFocused:E,isExpanded:H,isCollapsible:c,onClick:Object(s.b)(f,k),onFocus:Object(s.b)(p,(function(e){e.persist(),setTimeout((function(){var t="accordions.button"===e.target.getAttribute("data-garden-id"),n=e.target.getAttribute("data-garden-focus-visible");t&&n&&P(!0)}),0)})),onBlur:Object(s.b)(h,(function(){return P(!1)})),onMouseOver:Object(s.b)(g,(function(){return S(!0)})),onMouseOut:Object(s.b)(O,(function(){return S(!1)}))},j)),y,a.a.createElement(K,{isCompact:o,isHovered:C,isRotated:H,isCollapsible:c,onMouseOver:Object(s.b)(g,(function(){return S(!0)})),onMouseOut:Object(s.b)(O,(function(){return S(!1)}))},a.a.createElement(Ie,null))))}));_e.displayName="Header";var Le=Object(r.forwardRef)((function(e,t){var n=ae(),i=ne(),o=i.isCompact,c=i.isCollapsible,u=i.expandedSections.includes(n),s=function(){var e=Object(r.useContext)(ie);if(void 0===e)throw new Error("This component must be rendered within a Accordion.Header component");return e}(),l=s.isHovered,d=s.otherTriggerProps;return a.a.createElement(X,f({ref:t,isCompact:o,isHovered:l,isExpanded:u,isCollapsible:c},d,e))}));Le.displayName="Label";var Ne=Object(r.forwardRef)((function(e,t){var n=ne(),i=n.isCompact,o=n.isBare,c=n.getPanelProps,u=n.expandedSections,l=Object(s.d)(t),d=ae(),f=u.includes(d),p=Object(r.useCallback)(ze((function(){if(l.current){var e=l.current.children[0];e.style.maxHeight="".concat(e.scrollHeight,"px")}}),100),[l]);return a.a.useEffect((function(){return addEventListener("resize",p),p(),function(){removeEventListener("resize",p)}}),[f,p,e.children]),a.a.createElement(D,c(m({role:null,ref:l,index:d,isBare:o,isCompact:i,isExpanded:f},e)),a.a.createElement(J,{isExpanded:f},e.children))}));Ne.displayName="Panel";var Ae=Object(r.forwardRef)((function(e,t){var n=e.level,i=e.isBare,o=e.onChange,c=e.isCompact,u=e.isExpandable,s=e.isCollapsible,d=e.expandedSections,p=b(e,["level","isBare","onChange","isCompact","isExpandable","isCollapsible","expandedSections"]),m=Object(l.a)({collapsible:s,expandable:u,onChange:o,expandedSections:d}),h=m.expandedSections,v=m.getHeaderProps,g=m.getTriggerProps,O=m.getPanelProps,y=Object(r.useRef)(0);Object(r.useEffect)((function(){y.current=0}));var j={level:n,isBare:i,isCompact:c,isCollapsible:s,getPanelProps:O,getHeaderProps:v,getTriggerProps:g,currentIndexRef:y,expandedSections:h};return a.a.createElement(te.Provider,{value:j},a.a.createElement(M,f({ref:t},p)))}));Ae.Section=He,Ae.Header=_e,Ae.Label=Le,Ae.Panel=Ne,Ae.displayName="Accordion",Ae.defaultProps={isBare:!1,isCompact:!1,isCollapsible:!0,isExpandable:!1,expandedSections:void 0,onChange:function(){}}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-music-tsx-5ca4881eaedfc646b9ae.js.map