(this.webpackJsonpurhobo_app=this.webpackJsonpurhobo_app||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(10),r=a.n(l),s=(a(38),a(39),a(40),a(14)),c=a(11),i=a(28),u=a(6),h=a(31),d=a(30),m=a(70),g=a(71),p=a(72),C=a(77),v=a(73),f=a(74),b=a(75),E=a(76),y=a(29),S=a.n(y),k=a(12),w=a.n(k),T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChanged=function(t,a){var n=t.target,o=n.name,l=n.value,r=Object(s.a)(e.state.inputList);r[a][o]=l,e.setState({list:r},(function(){console.log(r)}))},e.state={categories:[],title:"",composer:"",value:"",verses:[],uchb:0,audio:"",category:"",display:!1,_display:!1,cat:!0,btn1:!0,btn2:!1,catName:"",catDesc:"",shortCode:"",fetched:[],inputList:[{verse:""}]},e.fetchCategories=e.fetchCategories.bind(Object(u.a)(e)),e.onVersesValueChanged=e.onVersesValueChanged.bind(Object(u.a)(e)),e.onTitleValueChanged=e.onTitleValueChanged.bind(Object(u.a)(e)),e.onComposerValueChanged=e.onComposerValueChanged.bind(Object(u.a)(e)),e.onUchbValueChanged=e.onUchbValueChanged.bind(Object(u.a)(e)),e.onCategoriesChanged=e.onCategoriesChanged.bind(Object(u.a)(e)),e.sendToServer=e.sendToServer.bind(Object(u.a)(e)),e.onCatNameChanged=e.onCatNameChanged.bind(Object(u.a)(e)),e.onCatDescChanged=e.onCatDescChanged.bind(Object(u.a)(e)),e.onShortCodeChanged=e.onShortCodeChanged.bind(Object(u.a)(e)),e.sendToCatServer=e.sendToCatServer.bind(Object(u.a)(e)),e.fetchLibrary=e.fetchLibrary.bind(Object(u.a)(e)),e.getCategoryNameFromId=e.getCategoryNameFromId.bind(Object(u.a)(e)),e.onChanged=e.onChanged.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"onTitleValueChanged",value:function(e){console.log(e.target.value),this.setState({title:e.target.value})}},{key:"onComposerValueChanged",value:function(e){console.log(e.target.value),this.setState({composer:e.target.value})}},{key:"onUchbValueChanged",value:function(e){console.log(e.target.value),this.setState({uchb:e.target.value})}},{key:"onVersesValueChanged",value:function(e){var t=this,a=[];a.push(e.target.value),this.setState({verses:a},(function(){console.log(t.state.verses)}))}},{key:"onCategoriesChanged",value:function(e){console.log(e.target.value),this.setState({category:e.target.value})}},{key:"onCatNameChanged",value:function(e){console.log(e.target.value),this.setState({catName:e.target.value})}},{key:"onCatDescChanged",value:function(e){console.log(e.target.value),this.setState({catDesc:e.target.value})}},{key:"onShortCodeChanged",value:function(e){console.log(e.target.value),this.setState({shortCode:e.target.value})}},{key:"fetchCategories",value:function(){var e=this,t=new Headers;t.append("X-Parse-Application-Id","wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb"),t.append("X-Parse-REST-API-Key","qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr");fetch("https://parseapi.back4app.com/classes/category",{method:"GET",headers:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(t){var a=JSON.parse(t);e.setState({categories:a.results},(function(){console.log(e.state.categories)}))})).catch((function(e){return console.log("error",e)}))}},{key:"fetchLibrary",value:function(){var e=this;w.a.get("https://parseapi.back4app.com/classes/library",{headers:{"X-Parse-Application-Id":"wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb","X-Parse-REST-API-Key":"qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"}}).then((function(t){console.log(t.data.results),t&&e.setState({fetched:t.data.results})}))}},{key:"sendToServer",value:function(){var e=this;w.a.post("https://parseapi.back4app.com/classes/library",{verses:this.state.list,title:this.state.title,category:this.state.category,composer:this.state.composer,uchb:this.state.uchb,audio:this.state.audio},{headers:{"X-Parse-Application-Id":"wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb","X-Parse-REST-API-Key":"qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"}}).then((function(t){t&&(e.fetchLibrary(),e.setState({display:!0,verses:[],title:"",category:"",composer:"",uchb:"",audio:""}))}))}},{key:"sendToCatServer",value:function(){var e=this;w.a.post("https://parseapi.back4app.com/classes/category",{category:this.state.catName,short_code:this.state.shortCode,description:this.state.catDesc},{headers:{"X-Parse-Application-Id":"wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb","X-Parse-REST-API-Key":"qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"}}).then((function(t){t&&e.setState({_display:!0,catName:"",catDesc:"",shortCode:""})}))}},{key:"getCategoryNameFromId",value:function(e){return console.log(e),S.a.findIndex(this.state.categories,{objectId:e})}},{key:"componentDidMount",value:function(){this.fetchCategories(),this.fetchLibrary()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(m.a,null,o.a.createElement(g.a,{md:4,style:{backgroundColor:"#e222e2",height:"100vh",position:"fixed"}},o.a.createElement("div",{className:"p-4",style:{color:"white",fontWeight:"bolder",fontSize:"2em"}},"Urhobo Catholic Hymnal"),o.a.createElement("div",{style:{width:"100%",marginTop:"200px"}},o.a.createElement("div",null,o.a.createElement(p.a,{disabled:this.state.btn1,style:{width:"100%"},onClick:function(){e.setState({cat:!e.state.cat,btn1:!0,btn2:!1})}},"Hymns")),o.a.createElement("div",null,o.a.createElement(p.a,{disabled:this.state.btn2,style:{width:"100%"},onClick:function(){e.setState({cat:!e.state.cat,btn1:!1,btn2:!0})}},"Categories")))),o.a.createElement(g.a,{md:8,style:{position:"absolute",right:"0"}},this.state.cat?o.a.createElement("div",null,o.a.createElement("div",{className:"p-4",style:{height:"60px",textAlign:"left",fontSize:"1.5em"}},"Hymns"),this.state.display&&o.a.createElement(C.a,{className:"success"},"Data uploaded successfully to the server"),o.a.createElement(v.a,{style:{marginTop:"30px"}},o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"text",name:"title",id:"title",placeholder:"Song Title",value:this.state.title,onChange:this.onTitleValueChanged})),o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"text",name:"composer",id:"composer",placeholder:"Composer",value:this.state.composer,onChange:this.onComposerValueChanged})),o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"number",name:"email",id:"uchb",placeholder:"UCHB number",value:this.state.uchb,onChange:this.onUchbValueChanged})),o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"select",name:"select",id:"exampleSelect",onChange:this.onCategoriesChanged},o.a.createElement("option",{value:""},"Choose category"),this.state.categories.map((function(e){return o.a.createElement("option",{value:e.objectId}," ",e.category," ")})))),this.state.inputList.map((function(t,a){return o.a.createElement("div",{className:"row mt-3",key:a},o.a.createElement(g.a,{sm:10},o.a.createElement(b.a,{type:"textarea",name:"verse",id:"text",placeholder:"Verses",onChange:function(t){return e.onChanged(t,a)}})),o.a.createElement(g.a,{sm:2},o.a.createElement(p.a,{title:"Add more verses",onClick:function(){e.setState({inputList:[].concat(Object(s.a)(e.state.inputList),[{verse:""}])})}},o.a.createElement("i",{className:"fa fa-plus"}))))})),o.a.createElement(p.a,{onClick:this.sendToServer,style:{float:"right"}},"Submit")),o.a.createElement("div",null,o.a.createElement(E.a,{hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"UCHB"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Composer"),o.a.createElement("th",null,"Category"))),o.a.createElement("tbody",null,this.state.fetched.map((function(t){return o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},t.uchb),o.a.createElement("td",null,t.title),o.a.createElement("td",null,t.composer),o.a.createElement("td",null,e.state.categories[e.getCategoryNameFromId(t.category)].category))})))))):o.a.createElement("div",null,o.a.createElement("div",{className:"p-4",style:{height:"60px",textAlign:"left",fontSize:"1.5em"}},"Categories"),this.state._display&&o.a.createElement(C.a,{className:"success"},"Data uploaded category successfully to the server"),o.a.createElement(v.a,{style:{marginTop:"50px"}},o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"text",placeholder:"Category Title",value:this.state.catName,onChange:this.onCatNameChanged})),o.a.createElement(f.a,null,o.a.createElement(b.a,{type:"text",placeholder:"Category Short Code E.g (ENT) for Entrance",value:this.state.shortCode,onChange:this.onShortCodeChanged})),o.a.createElement(f.a,{row:!0},o.a.createElement(g.a,{sm:12},o.a.createElement(b.a,{type:"textarea",id:"text",placeholder:"Category Description",value:this.state.catDesc,onChange:this.onCatDescChanged}))),o.a.createElement(p.a,{onClick:this.sendToCatServer},"Submit")),o.a.createElement("div",null,o.a.createElement(E.a,{hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Short Code"),o.a.createElement("th",null,"Category"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,this.state.categories.map((function(e){return o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},e.short_code),o.a.createElement("td",null,e.category),o.a.createElement("td",null,e.description))})))))))))}}]),a}(o.a.Component);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.882de1c0.chunk.js.map