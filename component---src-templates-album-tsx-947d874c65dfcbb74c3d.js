(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CjsV:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("HMLE"),c=n("gB52"),i=n.n(c),u=n("WsA1"),m=n.n(u),o=n("DW+4"),s=r.a.memo((function(e){var t=e.track,n=Object(o.c)(),c=n.currentTrack,u=n.isPlaying,s=n.moveToTrack,d=n.pause,f=n.play,p=(null==c?void 0:c.id)===t.id,h=p&&u,g=Object(a.useCallback)((function(){h?d():(p||s(t.id),f())}),[p,h,d,f,t.id]);return r.a.createElement(l.c,{isPrimary:!0,onClick:g,size:"small"},h?r.a.createElement(m.a,null):r.a.createElement(i.a,null))}));t.a=s},WsA1:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,a.createElement("g",{fill:"currentColor"},[a.createElement("rect",{width:"3",height:"10",x:"2",y:"1",rx:"1",ry:"1",key:0}),a.createElement("rect",{width:"3",height:"10",x:"7",y:"1",rx:"1",ry:"1",key:1})]))}r.defaultProps={width:"12",height:"12",focusable:"false",viewBox:"0 0 12 12"},e.exports=r,r.default=r},eI9q:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("Jyyn"),c=n("vOnD"),i=n("7ZOs"),u=n("CjsV"),m=c.d.img.withConfig({displayName:"Album__StyledAlbumImage",componentId:"sc-160fmhl-0"})(["height:auto;"]),o=c.d.li.withConfig({displayName:"Album__StyledMovementListItem",componentId:"sc-160fmhl-1"})(["align-items:center;display:flex;height:32px;margin:4px;> button{margin-left:8px;}"]),s=r.a.memo((function(e){var t=e.index,n=e.track;return r.a.createElement(o,null,t,". ",n.work.name,r.a.createElement(u.a,{track:n}))})),d=r.a.memo((function(e){var t=e.pageContext.album,n=Object(a.useMemo)((function(){return t.description.split("\n")}),[t.description]),c=Object(a.useMemo)((function(){return t.name+" Album Cover"}),[t]);return r.a.createElement(i.a,null,r.a.createElement(m,Object.assign({alt:c},t.imageFile.childImageSharp.fixed)),r.a.createElement(l.e,null,t.name),n.map((function(e,t){return r.a.createElement(l.c,{key:t},e)})),r.a.createElement(l.a,null,"Excerpts"),r.a.createElement("ul",null,t.tracks.map((function(e,t){return r.a.createElement(s,{key:e.id,index:t+1,track:e})}))))}));t.default=d},gB52:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,a.createElement("path",{fill:"currentColor",d:"M4 11.79c-.13 0-.26-.03-.38-.08a.977.977 0 01-.62-.92V1.21A1 1 0 014.71.5l4.44 4.44c.58.58.58 1.54 0 2.12L4.71 11.5c-.19.19-.45.29-.71.29z"}))}r.defaultProps={width:"12",height:"12",focusable:"false",viewBox:"0 0 12 12"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-templates-album-tsx-947d874c65dfcbb74c3d.js.map