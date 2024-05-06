"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4127],{48855:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=n(74848),r=n(28453);const l={title:"Form",description:"Learn how to create, import, and manage forms in NocoDB.",tags:["Views","Form view"],keywords:["NocoDB form","form view","form builder","form view builder","form view actions","form view operations"]},t=void 0,o={id:"views/view-types/form",title:"Form",description:"Learn how to create, import, and manage forms in NocoDB.",source:"@site/docs/090.views/040.view-types/030.form.md",sourceDirName:"090.views/040.view-types",slug:"/views/view-types/form",permalink:"/views/view-types/form",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/090.views/040.view-types/030.form.md",tags:[{label:"Views",permalink:"/tags/views"},{label:"Form view",permalink:"/tags/form-view"}],version:"current",sidebarPosition:30,frontMatter:{title:"Form",description:"Learn how to create, import, and manage forms in NocoDB.",tags:["Views","Form view"],keywords:["NocoDB form","form view","form builder","form view builder","form view actions","form view operations"]},sidebar:"tutorialSidebar",previous:{title:"Gallery",permalink:"/views/view-types/gallery"},next:{title:"Kanban",permalink:"/views/view-types/kanban"}},d={},a=[{value:"Form View Builder",id:"form-view-builder",level:2},{value:"Form View Actions",id:"form-view-actions",level:2},{value:"Form View Operations",id:"form-view-operations",level:2},{value:"Add Form Title &amp; Description",id:"add-form-title--description",level:3},{value:"Add/Remove Fields",id:"addremove-fields",level:3},{value:"Form Appearance Settings",id:"form-appearance-settings",level:3},{value:"Change Background Color",id:"change-background-color",level:4},{value:"Hide Branding",id:"hide-branding",level:4},{value:"Hide Form Banner",id:"hide-form-banner",level:4},{value:"Rearrange Fields Within the Form",id:"rearrange-fields-within-the-form",level:3},{value:"Add a New Field to the Table",id:"add-a-new-field-to-the-table",level:3},{value:"Post Form Submission Settings",id:"post-form-submission-settings",level:3},{value:"Field configuration",id:"field-configuration",level:2},{value:"Field Type Specific Settings",id:"field-type-specific-settings",level:3},{value:"Limit Options",id:"limit-options",level:4},{value:"Options Layout",id:"options-layout",level:4},{value:"Prefill Form Fields",id:"prefill-form-fields",level:2},{value:"Pre-Filling Form Fields",id:"pre-filling-form-fields",level:2},{value:"Prefill modes",id:"prefill-modes",level:3},{value:"Survey Form View",id:"survey-form-view",level:2},{value:"Attaching a file from mobile device",id:"attaching-a-file-from-mobile-device",level:2},{value:"Related articles",id:"related-articles",level:2}];function h(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Form View allows you to arrange fields in a form to input data."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"1010-2 Form",src:n(66674).A+"",width:"1664",height:"1626"})}),"\n",(0,s.jsx)(i.h2,{id:"form-view-builder",children:"Form View Builder"}),"\n",(0,s.jsx)(i.p,{children:"Form view builder layout can be divided into 4 sections:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Form Area"})," - This is the area where fields added to the form are listed. This area also acts as a preview of the form."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Form Fields"})," - This area lists all the fields available in the table. You can drag and drop fields for re-ordering and toggle the ",(0,s.jsx)(i.code,{children:"hide"})," switch to remove fields from the form."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Appearance Settings"})," - This is the area where you can configure the form view appearance settings like Background Color, Banner & Branding."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Post Form Submission Settings"})," - This is the area where you can configure the form view to perform various actions after a form is submitted."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Form Builder",src:n(2930).A+"",width:"2876",height:"1622"})}),"\n",(0,s.jsx)(i.h2,{id:"form-view-actions",children:"Form View Actions"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/create-view/#create-new-view",children:"Create a New Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/actions-on-view#rename-view",children:"Rename an Existing Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/actions-on-view#duplicate-view",children:"Duplicate a Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/actions-on-view#delete-view",children:"Remove a Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/share-view",children:"Share a Form View"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/views/views-overview#view-permission-types",children:"Lock Form View for Edits"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"form-view-operations",children:"Form View Operations"}),"\n",(0,s.jsx)(i.h3,{id:"add-form-title--description",children:"Add Form Title & Description"}),"\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.strong,{children:"Form View"})," area, click on in input boxes provided for ",(0,s.jsx)(i.strong,{children:"Title"})," & ",(0,s.jsx)(i.strong,{children:"Description"})," to add/update title & description to the form."]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Formatting options are supported for the description field. You can also use Markdown to format the text."})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Form Title &amp; Description",src:n(68781).A+"",width:"2874",height:"1430"})}),"\n",(0,s.jsx)(i.h3,{id:"addremove-fields",children:"Add/Remove Fields"}),"\n",(0,s.jsx)(i.p,{children:"To add/remove a field"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Use toggle switch next to the field name in the ",(0,s.jsx)(i.strong,{children:"Form Fields"})," to add/remove a field from the form."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"form-appearance-settings",children:"Form Appearance Settings"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Form appearance",src:n(13842).A+"",width:"2522",height:"1318"})}),"\n",(0,s.jsx)(i.h4,{id:"change-background-color",children:"Change Background Color"}),"\n",(0,s.jsxs)(i.p,{children:["To change the background color of the form, select the required color from the color picker in the ",(0,s.jsx)(i.strong,{children:"Appearance Settings"})," panel."]}),"\n",(0,s.jsx)(i.h4,{id:"hide-branding",children:"Hide Branding"}),"\n",(0,s.jsxs)(i.p,{children:["To hide NocoDB branding from the form, toggle the ",(0,s.jsx)(i.code,{children:"Hide NocoDB Branding"})," switch in the ",(0,s.jsx)(i.strong,{children:"Appearance Settings"})," panel."]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"This feature is available only in the paid plans."})}),"\n",(0,s.jsx)(i.h4,{id:"hide-form-banner",children:"Hide Form Banner"}),"\n",(0,s.jsxs)(i.p,{children:["To hide the form banner, toggle the ",(0,s.jsx)(i.code,{children:"Hide Banner"})," switch in the ",(0,s.jsx)(i.strong,{children:"Appearance Settings"})," panel."]}),"\n",(0,s.jsx)(i.h3,{id:"rearrange-fields-within-the-form",children:"Rearrange Fields Within the Form"}),"\n",(0,s.jsxs)(i.p,{children:["To rearrange fields within the form, drag and drop the field to the required position. This can be done in both the ",(0,s.jsx)(i.strong,{children:"Form Area"})," and ",(0,s.jsx)(i.strong,{children:"Form Fields"})," panel."]}),"\n",(0,s.jsx)(i.h3,{id:"add-a-new-field-to-the-table",children:"Add a New Field to the Table"}),"\n",(0,s.jsx)(i.p,{children:"To add a new field to the table,"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Click on the ",(0,s.jsx)(i.code,{children:"+ Add field"})," in the ",(0,s.jsx)(i.strong,{children:"Form Fields"})," panel"]}),"\n",(0,s.jsx)(i.li,{children:"Select the field name & type from the dropdown."}),"\n",(0,s.jsxs)(i.li,{children:["Click on ",(0,s.jsx)(i.code,{children:"Save Field"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Field",src:n(64445).A+"",width:"2878",height:"1210"})}),"\n",(0,s.jsx)(i.h3,{id:"post-form-submission-settings",children:"Post Form Submission Settings"}),"\n",(0,s.jsxs)(i.p,{children:["NocoDB allows you to configure the form view to perform various actions after a form is submitted. These actions can be configured in the ",(0,s.jsx)(i.strong,{children:"Post Form Submission Settings"})," panel."]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsxs)(i.strong,{children:["Show ",(0,s.jsx)(i.code,{children:"Submit Another Form"})," Button"]}),": This option when enabled, will display a ",(0,s.jsx)(i.code,{children:"Submit Another Form"})," button after the form is submitted."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Show a Blank form"}),": This option when enabled, will display a new blank form 5 seconds after the form is submitted."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Email me"}),": Enable this option to receive an Email after the form is submitted."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"After Submit Message"}),": You can configure a message to display on successful submission of the form."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Form View Settings",src:n(21987).A+"",width:"2872",height:"1518"})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Formatting options are supported for the ",(0,s.jsx)(i.code,{children:"After Submit Message"})," field. You can also use Markdown to format the text."]})}),"\n",(0,s.jsx)(i.h2,{id:"field-configuration",children:"Field configuration"}),"\n",(0,s.jsxs)(i.p,{children:["To change the field label displayed on the form & add help-text, click on the required field in the ",(0,s.jsx)(i.strong,{children:"Form Area"})," and on the right side configuration panel, configure"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Label"})," ",(0,s.jsx)(i.code,{children:"Optional"})," : Defaults to the field name. This doesn't affect the field name in the table."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Help Text"})," ",(0,s.jsx)(i.code,{children:"Optional"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Required"})," : Toggle to mark the field as required"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Field Label &amp; Help Text",src:n(3127).A+"",width:"2876",height:"1428"})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Formatting options are supported for the ",(0,s.jsx)(i.code,{children:"Help Text"})," field. You can also use Markdown to format the text."]})}),"\n",(0,s.jsx)(i.h3,{id:"field-type-specific-settings",children:"Field Type Specific Settings"}),"\n",(0,s.jsxs)(i.p,{children:["For select based field types (",(0,s.jsx)(i.code,{children:"Single-Select"}),", ",(0,s.jsx)(i.code,{children:"Multi-Select"}),", ",(0,s.jsx)(i.code,{children:"User"}),"), you can configure the following additional settings:"]}),"\n",(0,s.jsx)(i.h4,{id:"limit-options",children:"Limit Options"}),"\n",(0,s.jsx)(i.p,{children:"Limit the number of options displayed in the dropdown or list of shared form. This is useful when you have a large number of options & want to limit the number of options displayed in the dropdown or list for the user to select from."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Use ",(0,s.jsx)(i.code,{children:"Hide"})," button next to the option to hide the option from the dropdown or list."]}),"\n",(0,s.jsxs)(i.li,{children:["Use ",(0,s.jsx)(i.code,{children:"Reorder"})," button associated with a field to reorder the options."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Limit options",src:n(49170).A+"",width:"2296",height:"1626"})}),"\n",(0,s.jsx)(i.h4,{id:"options-layout",children:"Options Layout"}),"\n",(0,s.jsxs)(i.p,{children:["For select based field types, you can configure the options layout to be displayed as a ",(0,s.jsx)(i.code,{children:"Dropdown"})," or an inline expanded ",(0,s.jsx)(i.code,{children:"List"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Options Layout",src:n(13445).A+"",width:"2296",height:"1626"})}),"\n",(0,s.jsx)(i.h2,{id:"prefill-form-fields",children:"Prefill Form Fields"}),"\n",(0,s.jsx)(i.p,{children:"Here's a more professional rephrasing of the given content:"}),"\n",(0,s.jsx)(i.h2,{id:"pre-filling-form-fields",children:"Pre-Filling Form Fields"}),"\n",(0,s.jsx)(i.p,{children:"NocoDB offers a convenient feature that allows pre-filling form fields with specific values by setting URL parameters. This functionality enables the creation of custom URLs with desired field values, streamlining data entry and enhancing user experience."}),"\n",(0,s.jsxs)(i.p,{children:["To construct a pre-filled form URL manually, ensure that the URL parameters are appropriately encoded in the following format: ",(0,s.jsx)(i.code,{children:"?key1=value1&key2=value2"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["For instance, the URL ",(0,s.jsx)(i.code,{children:"https://wh8s5w.noco.to/#/nc/form/66da06-f074-47af-ace7-fde46df55?Status=Qualification&Priority=Very+high"})," pre-fills the ",(0,s.jsx)(i.code,{children:"Status"})," field with ",(0,s.jsx)(i.code,{children:"Qualification"})," and the ",(0,s.jsx)(i.code,{children:"Priority"})," field with ",(0,s.jsx)(i.code,{children:"Very high"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"NocoDB provides an intuitive alternative approach to generate pre-filled URLs through the form builder."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Open the form builder and pre-fill the required form fields with the desired values."}),"\n",(0,s.jsxs)(i.li,{children:["Click on the ",(0,s.jsx)(i.code,{children:"Share"})," button located in the top right corner."]}),"\n",(0,s.jsxs)(i.li,{children:["Toggle the ",(0,s.jsx)(i.code,{children:"Enable Public Viewing"})," button to enable sharing."]}),"\n",(0,s.jsxs)(i.li,{children:["Toggle the ",(0,s.jsx)(i.code,{children:"Enable Prefill"})," button to enable pre-filling."]}),"\n",(0,s.jsxs)(i.li,{children:["Click on the ",(0,s.jsx)(i.code,{children:"Copy Link"})," button to copy the pre-filled URL."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Prefill",src:n(7678).A+"",width:"2877",height:"1626"}),"\n",(0,s.jsx)(i.img,{alt:"Prefill share",src:n(7700).A+"",width:"2874",height:"1622"})]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Prefilled fields override the default values if any were set for this field in the table"}),"\n",(0,s.jsx)(i.li,{children:"Maximum length of the URL is 8000 characters."}),"\n"]})}),"\n",(0,s.jsx)(i.h3,{id:"prefill-modes",children:"Prefill modes"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Default"}),": Standard mode. This mode will prefill the form fields with the values set in the shared form URL. Users can edit the prefilled fields in the form. In the image below, the ",(0,s.jsx)(i.code,{children:"Number"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1234"}),", ",(0,s.jsx)(i.code,{children:"Currency"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1000"})," and ",(0,s.jsx)(i.code,{children:"Year"})," field is prefilled with value ",(0,s.jsx)(i.code,{children:"2023"}),"."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Prefill default",src:n(53138).A+"",width:"1922",height:"1672"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Hide prefilled fields"}),": This mode will prefill the form fields with the values set in the shared form URL but will hide the prefilled fields in the form from the user. In the image below, the ",(0,s.jsx)(i.code,{children:"Number"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1234"}),", ",(0,s.jsx)(i.code,{children:"Currency"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1000"})," and ",(0,s.jsx)(i.code,{children:"Year"})," field is prefilled with value ",(0,s.jsx)(i.code,{children:"2023"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Prefill hide",src:n(50649).A+"",width:"1916",height:"1670"})}),"\n",(0,s.jsxs)(i.ol,{start:"3",children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Lock prefilled fields as read-only"}),": This mode will prefill the form fields with the values set in the shared form URL and will lock the prefilled fields as read-only. In the image below, the ",(0,s.jsx)(i.code,{children:"Number"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1234"}),", ",(0,s.jsx)(i.code,{children:"Currency"})," field is prefilled with the value ",(0,s.jsx)(i.code,{children:"1000"})," and ",(0,s.jsx)(i.code,{children:"Year"})," field is prefilled with value ",(0,s.jsx)(i.code,{children:"2023"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Prefill lock",src:n(29224).A+"",width:"1916",height:"1672"})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"In any of the modes, the user can still change the prefilled fields by editing the URL."})}),"\n",(0,s.jsx)(i.h2,{id:"survey-form-view",children:"Survey Form View"}),"\n",(0,s.jsxs)(i.p,{children:["NocoDB supports a special type of form view called ",(0,s.jsx)(i.code,{children:"Survey Form View"}),". This view is ideal for creating surveys & questionnaires. This view can be enabled by toggling the ",(0,s.jsx)(i.code,{children:"Survey Mode"})," switch when creating ",(0,s.jsx)(i.a,{href:"/views/share-view#share-form-view-options",children:"shared form view"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"When enabled,"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Form input fields will be displayed one at a time."}),"\n",(0,s.jsxs)(i.li,{children:["Users can navigate between fields using the ",(0,s.jsx)(i.code,{children:"<"})," & ",(0,s.jsx)(i.code,{children:">"})," buttons."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Survey Form View",src:n(13207).A+"",width:"2306",height:"1338"})}),"\n",(0,s.jsx)(i.h2,{id:"attaching-a-file-from-mobile-device",children:"Attaching a file from mobile device"}),"\n",(0,s.jsx)(i.p,{children:"To attach a file from mobile device,"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Click on the ",(0,s.jsx)(i.code,{children:"Add File(s)"})," button in attach field"]}),"\n",(0,s.jsxs)(i.li,{children:["Sample options could be (varies from device to device)","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Camera : use this if you wish to take a picture"}),"\n",(0,s.jsx)(i.li,{children:"Files : use this if you wish to attach a file from your device"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Attach file from mobile",src:n(52407).A+"",width:"1888",height:"1618"})}),"\n",(0,s.jsx)(i.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/views/view-types/grid",children:"Form View"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/views/view-types/gallery",children:"Gallery View"}),(0,s.jsx)(i.br,{}),"\n",(0,s.jsx)(i.a,{href:"/views/view-types/kanban",children:"Kanban View"})]})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},64445:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/add-new-field-d2d94c725b47a5a8565a15d37ec1d0c4.png"},13842:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/appearance-8f7a87d537b49d4d28794089718971c0.png"},3127:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/field-config-39fbca7c5656ace4a014b1437308d4c3.png"},66674:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/form-view-ebef78e4bffc9662b2f1fdfac4458196.png"},2930:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/layout-36da7fbc2d06fa869b22f04d4e20918a.png"},49170:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/limit-options-c41b99cdae412917f6fd48156f48f880.png"},13445:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/options-layout-11a45723db22a1ae869db26da57a2092.png"},21987:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/post-submit-settings-62f084557ef551d02e3049f402c2093a.png"},53138:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/prefill-default-ff686787a49b464b5f24f08f1da3ca9d.png"},50649:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/prefill-hide-3f63ac4d619430394a2c765bb60abf1c.png"},29224:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/prefill-lock-2edc62a53de19c2bf84505a331daadc0.png"},7700:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/prefill-share-6dd38a6ef43e156800b9142b5568462a.png"},7678:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/prefill-834ff8004213f5f7bd3d9992a8c90b0e.png"},13207:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/survey-form-fb3834798bf3af1dd9d8ebda96f3c2c4.png"},68781:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/title-description-898700c42dbad8728f24b758e45049d2.png"},52407:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/mobile-upload-b39f5b384590f329a7b72405adb706f2.png"},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>o});var s=n(96540);const r={},l=s.createContext(r);function t(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);