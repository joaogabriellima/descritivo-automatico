(this["webpackJsonpdescritivo-automatico"]=this["webpackJsonpdescritivo-automatico"]||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),c=a.n(o),r=(a(55),a(56),a(23)),s=a(95),l=a(65),u=a(99),d=a(102),m=a(100),j=a(103),b=a(101),x=a(35),p=a.n(x),h={box:{marginTop:"80px",display:"flex",flexDirection:"column",alignItems:"center"},boxTitle:{marginBottom:"20px"},namesInputTitle:{fontSize:"15px"},namesInput:{marginTop:"20px"},checkboxTitle:{fontSize:"15px"},dateInput:{width:140,margin:"20px"},submit:{margin:"25px"},listItem:{margin:"20px"}},f=a(8);function O(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!0),c=Object(r.a)(o,2),x=c[0],O=c[1],v=Object(n.useState)("2021-03-01"),g=Object(r.a)(v,2),Y=g[0],y=g[1],D=Object(n.useState)("2021-03-31"),I=Object(r.a)(D,2),S=I[0],k=I[1],T=Object(n.useState)([]),C=Object(r.a)(T,2),M=C[0],F=C[1];return Object(f.jsx)(s.a,{component:"main",maxWidth:"xs",children:Object(f.jsxs)("div",{style:h.box,children:[Object(f.jsx)(l.a,{component:"h1",variant:"h5",style:h.boxTitle,children:"Gera\xe7\xe3o autom\xe1tica de Descritivos"}),Object(f.jsxs)(u.a,{container:!0,spacing:2,children:[Object(f.jsxs)(u.a,{item:!0,xs:12,children:[Object(f.jsx)(l.a,{component:"h5",variant:"h5",style:h.checkboxTitle,children:"Insira os nomes separados por ponto e v\xedrgula (;)"}),Object(f.jsx)(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"Nomes",autoFocus:!0,placeholder:"exemplo; exemplo2; exemplo3",style:h.namesInput,onChange:function(e){i(e.target.value)}})]}),Object(f.jsxs)(u.a,{item:!0,xs:12,children:[Object(f.jsx)(l.a,{component:"h5",variant:"h5",style:h.checkboxTitle,children:"Selecione o per\xedodo do descritivo"}),Object(f.jsx)(d.a,{id:"startDate",label:"In\xedcio",type:"date",defaultValue:Y,style:h.dateInput,onChange:function(e){y(e.target.value)},InputLabelProps:{shrink:!0}}),Object(f.jsx)(d.a,{id:"endDate",label:"Fim",type:"date",defaultValue:S,style:h.dateInput,onChange:function(e){k(e.target.value)},InputLabelProps:{shrink:!0}})]}),Object(f.jsxs)(u.a,{item:!0,xs:12,children:[Object(f.jsx)(l.a,{component:"h5",variant:"h5",style:h.checkboxTitle,children:"Descritivo padr\xe3o?"}),Object(f.jsx)(m.a,{control:Object(f.jsx)(j.a,{checked:x,onChange:function(){O(!0)},name:"Sim"}),label:"Sim"}),Object(f.jsx)(m.a,{control:Object(f.jsx)(j.a,{checked:!x,onChange:function(){O(!1)},name:"N\xe3o"}),label:"N\xe3o"})]}),x?null:Object(f.jsx)(u.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,multiline:!0,rows:8,id:"firstName",label:"Texto do descritivo",autoFocus:!0})}),Object(f.jsx)(b.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=p()(Y,"YYYY-MM-DD").format("DD/MM/YYYY"),t=p()(S,"YYYY-MM-DD").format("DD/MM/YYYY");if(x){var n=a.split(";"),i=[];return n.forEach((function(a){var n="Boa tarde, ".concat(a,"! Segue anexo o descritivo referente ao per\xedodo de ").concat(e," a ").concat(t,". Estando de acordo, por gentileza, enviar a nota fiscal para pagamento no e-mail: financeiro@kuadro.com.br. Atte., Marina Ribeiro");i.push(n)})),void F(i)}},style:h.submit,disabled:!(""!==a&&""!==Y&&""!==S),children:"Gerar Descritivos"}),M.map((function(e,t){return Object(f.jsx)(u.a,{item:!0,xs:12,children:Object(f.jsx)(l.a,{component:"h5",variant:"h5",style:h.listItem,children:e})})}))]})]})})}var v=function(){return Object(f.jsx)(O,{})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.3e331389.chunk.js.map