"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[920],{5920:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(1087),o=n(803),a=n(3366),r=n(7462),s=n(2791),d=n(8182),u=n(4419),c=n(5513),m=n(277),p=n(5878),l=n(1217);function f(e){return(0,l.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);var x=n(184),h=["children","className","component","image","src","style"],v=(0,m.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,i=n.isMediaComponent,o=n.isImageComponent;return[t.root,i&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],b=["picture","img"],Z=s.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCardMedia"}),i=n.children,o=n.className,s=n.component,m=void 0===s?"div":s,p=n.image,l=n.src,Z=n.style,k=(0,a.Z)(n,h),C=-1!==g.indexOf(m),M=!C&&p?(0,r.Z)({backgroundImage:'url("'.concat(p,'")')},Z):Z,W=(0,r.Z)({},n,{component:m,isMediaComponent:C,isImageComponent:-1!==b.indexOf(m)}),w=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,u.Z)(n,f,t)}(W);return(0,x.jsx)(v,(0,r.Z)({className:(0,d.Z)(w.root,o),as:m,role:!C&&p?"img":void 0,ref:t,style:M,ownerState:W,src:C?p||l:void 0},k,{children:i}))})),k=n(42),C=(0,n(3814).Z)();function M(){return(0,x.jsxs)(o.Z,{sx:{mt:"1rem",maxWidth:"1000px"},children:[(0,x.jsx)(C,{children:(0,x.jsx)(Z,{component:"img",sx:{height:"100%"},image:k,alt:"phonebook.jpg"})}),(0,x.jsx)(i.rU,{to:"/"})]})}},803:function(e,t,n){n.d(t,{Z:function(){return W}});var i=n(4942),o=n(3366),a=n(7462),r=n(2791),s=n(8182),d=n(7312),u=n(1217),c=n(4419),m=n(7078),p=(0,n(4046).ZP)(),l=n(5080),f=n(184),x=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,l.Z)(),v=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),g=function(e){return(0,m.Z)({props:e,name:"MuiContainer",defaultTheme:h})},b=function(e,t){var n=e.classes,i=e.fixed,o=e.disableGutters,a=e.maxWidth,r={root:["root",a&&"maxWidth".concat((0,d.Z)(String(a))),i&&"fixed",o&&"disableGutters"]};return(0,c.Z)(r,(function(e){return(0,u.Z)(t,e)}),n)};var Z=n(9853),k=n(277),C=n(5513),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,d=e.useThemeProps,u=void 0===d?g:d,c=e.componentName,m=void 0===c?"MuiContainer":c,p=n((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,i.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var i=n,o=t.breakpoints.values[i];return 0!==o&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},"xs"===n.maxWidth&&(0,i.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,i.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),l=r.forwardRef((function(e,t){var n=u(e),i=n.className,r=n.component,d=void 0===r?"div":r,c=n.disableGutters,l=void 0!==c&&c,h=n.fixed,v=void 0!==h&&h,g=n.maxWidth,Z=void 0===g?"lg":g,k=(0,o.Z)(n,x),C=(0,a.Z)({},n,{component:d,disableGutters:l,fixed:v,maxWidth:Z}),M=b(C,m);return(0,f.jsx)(p,(0,a.Z)({as:d,ownerState:C,className:(0,s.Z)(M.root,i),ref:t},k))}));return l}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiContainer"})}}),W=M},42:function(e,t,n){e.exports=n.p+"static/media/picture.1106490995533b352f06.png"}}]);
//# sourceMappingURL=920.34132970.chunk.js.map