(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{2016:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));s(180);var a=s(34),n=s.n(a),i=s(6),o=s.n(i),r=s(1131),d=s(341),p=s.n(d),c=s(1181),l=s(1180),f=s(1297);function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class h extends o.a.PureComponent{constructor(e){super(e),g(this,"renderPDFPage",e=>{if(this.pdfPagesRendered[e]||!this.state.pdfPagesLoaded[e])return;const t=this.refs["pdfCanvas"+e],s=t.getContext("2d"),a=this.state.pdfPages[e].getViewport(1);t.height=a.height,t.width=a.width;const n={canvasContext:s,viewport:a};this.state.pdfPages[e].render(n),this.pdfPagesRendered[e]=!0}),g(this,"updateStateFromProps",e=>{this.setState({pdf:null,pdfPages:{},pdfPagesLoaded:{},numPages:0,loading:!0,success:!1}),p.a.getDocument(e.fileUrl).then(this.onDocumentLoad,this.onDocumentLoadError)}),g(this,"onDocumentLoad",e=>{const t=e.numPages<=5?e.numPages:5;this.setState({pdf:e,numPages:t});for(let t=1;t<=e.numPages;t++)e.getPage(t).then(this.onPageLoad)}),g(this,"onDocumentLoadError",e=>{console.log("Unable to load PDF preview: "+e),this.setState({loading:!1,success:!1})}),g(this,"onPageLoad",e=>{const t=Object.assign({},this.state.pdfPages);t[e.pageIndex]=e;const s=Object.assign({},this.state.pdfPagesLoaded);s[e.pageIndex]=!0,this.setState({pdfPages:t,pdfPagesLoaded:s}),0===e.pageIndex&&this.setState({success:!0,loading:!1})}),this.pdfPagesRendered={},this.state={pdf:null,pdfPages:{},pdfPagesLoaded:{},numPages:0,loading:!0,success:!1}}componentDidMount(){this.updateStateFromProps(this.props)}UNSAFE_componentWillReceiveProps(e){this.props.fileUrl!==e.fileUrl&&(this.updateStateFromProps(e),this.pdfPagesRendered={})}componentDidUpdate(){if(this.state.success)for(let e=0;e<this.state.numPages;e++)this.renderPDFPage(e)}render(){if(this.state.loading)return o.a.createElement("div",{className:"view-image__loading"},o.a.createElement(l.a,null));if(!this.state.success)return o.a.createElement(f.a,{fileInfo:this.props.fileInfo,fileUrl:this.props.fileUrl});const e=[];for(let t=0;t<this.state.numPages;t++)e.push(o.a.createElement("canvas",{ref:"pdfCanvas"+t,key:"previewpdfcanvas"+t})),t<this.state.numPages-1&&this.state.numPages>1&&e.push(o.a.createElement("div",{key:"previewpdfspacer"+t,className:"pdf-preview-spacer"}));if(this.state.pdf.numPages>5){const t=this.props.fileInfo.link||Object(c.getFileDownloadUrl)(this.props.fileInfo.id);e.push(o.a.createElement("a",{key:"previewpdfmorepages",href:t,className:"pdf-max-pages"},o.a.createElement(r.a,{id:"pdf_preview.max_pages",defaultMessage:"Download to read more pages"})))}return o.a.createElement("div",{className:"post-code"},e)}}g(h,"propTypes",{fileInfo:n.a.object.isRequired,fileUrl:n.a.string.isRequired})}}]);
//# sourceMappingURL=27.c22ec6db1d4215534cbe.js.map