(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1158:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t(148);var r=t(34),s=t.n(r),i=t(6),n=t.n(i),o=t(1131),l=t(1129);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class u extends n.a.PureComponent{render(){return n.a.createElement("div",{id:"back_button",className:"signup-header"},n.a.createElement(l.a,{onClick:this.props.onClick,to:this.props.url},n.a.createElement(o.a,{id:"generic_icons.back",defaultMessage:"Back Icon"},e=>n.a.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:e.toString()})),n.a.createElement(o.a,{id:"web.header.back",defaultMessage:"Back"})))}}c(u,"propTypes",{url:s.a.string,onClick:s.a.func}),c(u,"defaultProps",{url:"/"})},1164:function(e,a,t){e.exports=t.p+"files/87b80d01a017833f1357800bfca49cea.png"},2006:function(e,a,t){"use strict";t.r(a);var r=t(11),s=t(323),i=t(22),n=t(15),o=t(9),l=t(44),c=(t(56),t(181),t(36),t(610),t(34)),u=t.n(c),d=t(6),p=t.n(d),m=t(1131),E=t(325),f=t(87),g=t(0),h=t(1164),b=t.n(h),v=t(1158),_=t(1143),I=t(1144);function y(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class S extends p.a.PureComponent{constructor(e){super(e),y(this,"verifyEmail",async()=>{const{actions:{verifyUserEmail:e}}=this.props,a=await e(new URLSearchParams(this.props.location.search).get("token"));a&&a.data?this.handleSuccess():a&&a.error&&this.handleError(g.P.FAILED_EMAIL_VERIFICATION)}),this.state={verifyStatus:"pending",serverError:""}}componentDidMount(){this.verifyEmail()}handleRedirect(){this.props.isLoggedIn?I.f():f.a.push("/login?extra=verified&email="+encodeURIComponent(new URLSearchParams(this.props.location.search).get("email")))}handleSuccess(){this.setState({verifyStatus:"success"}),this.props.actions.clearErrors(),this.props.isLoggedIn?(this.props.actions.logError({message:g.h.EMAIL_VERIFIED,type:g.i.SUCCESS},!0),Object(E.d)("settings","verify_email"),this.props.actions.getMe().then(({data:e,error:a})=>{e?this.handleRedirect():a&&this.handleError(g.P.FAILED_USER_STATE_GET)})):this.handleRedirect()}handleError(e){let a="";e===g.P.FAILED_EMAIL_VERIFICATION?a=p.a.createElement(m.a,{id:"signup_user_completed.invalid_invite",defaultMessage:"The invite link was invalid. Please speak with your Administrator to receive an invitation."}):e===g.P.FAILED_USER_STATE_GET&&(a=p.a.createElement(m.a,{id:"signup_user_completed.failed_update_user_state",defaultMessage:"Please clear your cache and try to log in."})),this.setState({verifyStatus:"failure",serverError:a})}render(){if("failure"!==this.state.verifyStatus)return p.a.createElement(_.a,null);let e=null;return this.state.serverError&&(e=p.a.createElement("div",{className:"form-group has-error"},p.a.createElement("label",{className:"control-label"},this.state.serverError))),p.a.createElement("div",null,p.a.createElement(v.a,null),p.a.createElement("div",{className:"col-sm-12"},p.a.createElement("div",{className:"signup-team__container"},p.a.createElement("img",{alt:"signup team logo",className:"signup-team-logo",src:b.a}),p.a.createElement("div",{className:"signup__content"},p.a.createElement("h1",null,this.props.siteName),p.a.createElement("h4",{className:"color--light"},p.a.createElement(m.a,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"})),e))))}}y(S,"propTypes",{location:u.a.object.isRequired,siteName:u.a.string,actions:u.a.shape({verifyUserEmail:u.a.func.isRequired,getMe:u.a.func.isRequired,logError:u.a.func.isRequired,clearErrors:u.a.func.isRequired}).isRequired,user:u.a.shape({email_verified:u.a.bool}),isLoggedIn:u.a.bool.isRequired}),S.defaultProps={location:{}};a.default=Object(s.connect)((function(e){const a=Object(n.getConfig)(e).SiteName;return{isLoggedIn:Boolean(Object(o.getCurrentUserId)(e)),siteName:a,user:Object(o.getCurrentUser)(e)}}),(function(e){return{actions:Object(r.bindActionCreators)({verifyUserEmail:i.verifyUserEmail,getMe:i.getMe,logError:l.logError,clearErrors:l.clearErrors},e)}}))(S)}}]);
//# sourceMappingURL=16.b8408da9d28bd9e94197.js.map