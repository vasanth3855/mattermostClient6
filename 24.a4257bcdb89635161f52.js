(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2e3:function(e,t,n){"use strict";n.r(t);var r,a,o,i=n(323),c=n(15),l=n(34),s=n.n(l),p=n(6),m=n.n(p),f=n(1131);class d extends m.a.PureComponent{componentDidMount(){document.body.classList.add("sticky"),document.getElementById("root").classList.add("container-fluid")}componentWillUnmount(){document.body.classList.remove("sticky"),document.getElementById("root").classList.remove("container-fluid")}render(){const e=[];return this.props.config.AboutLink&&e.push(m.a.createElement("a",{key:"about_link",id:"about_link",className:"footer-link",target:"_blank",rel:"noopener noreferrer",href:this.props.config.AboutLink},m.a.createElement(f.a,{id:"web.footer.about"}))),this.props.config.PrivacyPolicyLink&&e.push(m.a.createElement("a",{key:"privacy_link",id:"privacy_link",className:"footer-link",target:"_blank",rel:"noopener noreferrer",href:this.props.config.PrivacyPolicyLink},m.a.createElement(f.a,{id:"web.footer.privacy"}))),this.props.config.TermsOfServiceLink&&e.push(m.a.createElement("a",{key:"terms_link",id:"terms_link",className:"footer-link",target:"_blank",rel:"noopener noreferrer",href:this.props.config.TermsOfServiceLink},m.a.createElement(f.a,{id:"web.footer.terms"}))),this.props.config.HelpLink&&e.push(m.a.createElement("a",{key:"help_link",id:"help_link",className:"footer-link",target:"_blank",rel:"noopener noreferrer",href:this.props.config.HelpLink},m.a.createElement(f.a,{id:"web.footer.help"}))),m.a.createElement("div",{className:"inner-wrap"},m.a.createElement("div",{className:"row content"},this.props.children),m.a.createElement("div",{className:"row footer"},m.a.createElement("div",{id:"footer_section",className:"footer-pane col-xs-12"},m.a.createElement("div",{className:"col-xs-12"},m.a.createElement("span",{id:"company_name",className:"pull-right footer-site-name"},"Mattermost")),m.a.createElement("div",{className:"col-xs-12"},m.a.createElement("span",{id:"copyright",className:"pull-right footer-link copyright"},"© 2015-".concat((new Date).getFullYear()," Mattermost, Inc.")),m.a.createElement("span",{className:"pull-right"},e)))))}}r=d,a="propTypes",o={children:s.a.object,config:s.a.object},a in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o;t.default=Object(i.connect)((function(e){return{config:Object(c.getConfig)(e)}}))(d)}}]);
//# sourceMappingURL=24.a4257bcdb89635161f52.js.map