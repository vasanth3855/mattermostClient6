(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{2003:function(e,t,a){"use strict";a.r(t);var r=a(323),n=a(11),s=a(1151),o=(a(64),a(181),a(103),a(36),a(610),a(34)),i=a.n(o),c=a(6),l=a.n(c),p=a(1131),u=a(338),m=a.n(u),d=a(1154),h=a(87),b=a(1138);function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class f extends l.a.Component{static get propTypes(){return{location:i.a.object.isRequired,actions:i.a.shape({getOAuthAppInfo:i.a.func.isRequired,allowOAuth2:i.a.func.isRequired}).isRequired}}constructor(e){super(e),w(this,"handleAllow",()=>{const e=new URLSearchParams(this.props.location.search),t={responseType:e.get("response_type"),clientId:e.get("client_id"),redirectUri:e.get("redirect_uri"),state:e.get("state"),scope:e.get("store")};this.props.actions.allowOAuth2(t).then(({data:e,error:t})=>{e&&e.redirect?window.location.href=e.redirect:t&&this.setState({error:t.message})})}),w(this,"handleDeny",()=>{const e=new URLSearchParams(this.props.location.search).get("redirect_uri");e.startsWith("https://")||e.startsWith("http://")?window.location.href=e+"?error=access_denied":h.a.replace("/error")}),this.state={}}componentDidMount(){const e=document.getElementById("antiClickjack");e&&e.parentNode.removeChild(e);const t=new URLSearchParams(this.props.location.search).get("client_id");/^[a-z0-9]+$/.test(t)&&this.props.actions.getOAuthAppInfo(t).then(({data:e})=>{e&&this.setState({app:e})})}render(){const e=this.state.app;if(!e)return null;let t,a;return t=e.icon_url?e.icon_url:m.a,this.state.error&&(a=l.a.createElement("div",{className:"prompt__error form-group"},l.a.createElement(d.a,{error:this.state.error}))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"prompt"},l.a.createElement("div",{className:"prompt__heading"},l.a.createElement("div",{className:"prompt__app-icon"},l.a.createElement("img",{alt:"prompt icon",src:t,width:"50",height:"50"})),l.a.createElement("div",{className:"text"},l.a.createElement(b.b,{id:"authorize.title",defaultMessage:"Authorize **{appName}** to Connect to Your **Mattermost** User Account",values:{appName:e.name}}))),l.a.createElement("p",null,l.a.createElement(b.b,{id:"authorize.app",defaultMessage:"The app **{appName}** would like the ability to access and modify your basic information.",values:{appName:e.name}})),l.a.createElement("h2",{className:"prompt__allow"},l.a.createElement(b.b,{id:"authorize.access",defaultMessage:"Allow **{appName}** access?",values:{appName:e.name}})),l.a.createElement("div",{className:"prompt__buttons"},l.a.createElement("button",{type:"submit",className:"btn btn-link authorize-btn",onClick:this.handleDeny},l.a.createElement(p.a,{id:"authorize.deny",defaultMessage:"Deny"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary authorize-btn",onClick:this.handleAllow},l.a.createElement(p.a,{id:"authorize.allow",defaultMessage:"Allow"}))),a))}}t.default=Object(r.connect)(null,(function(e){return{actions:Object(n.bindActionCreators)({getOAuthAppInfo:s.o,allowOAuth2:s.c},e)}}))(f)}}]);
//# sourceMappingURL=23.e5534a5bfe5e675bbd7d.js.map