__NUXT_JSONP__("/getting-started/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{document:{slug:"upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!",title:G,position:20,category:"Getting started",menuTitle:G,link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:l,depth:y,text:H},{id:I,depth:w,text:J},{id:K,depth:w,text:L},{id:M,depth:w,text:N},{id:O,depth:w,text:P},{id:Q,depth:y,text:R},{id:S,depth:y,text:T}],body:{type:"root",children:[{type:b,tag:o,props:{},children:[{type:a,value:"By default, if "},{type:b,tag:m,props:{},children:[{type:a,value:z}]},{type:a,value:" is not specified upon\n"},{type:b,tag:f,props:{href:".\u002Finstallation",target:A},children:[{type:a,value:"installation"}]},{type:a,value:", then SQLite will be used to store metadata. We suggest users to separate the metadata and user data in different databases as pictured in our "},{type:b,tag:f,props:{href:"..\u002Fengineering\u002Farchitecture",target:A},children:[{type:a,value:"architecture"}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:B,props:{id:l},children:[{type:b,tag:f,props:{href:"#docker",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:H}]},{type:a,value:e},{type:b,tag:x,props:{id:I},children:[{type:b,tag:f,props:{href:"#find-stop--delete-nocodb-docker-container",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:J}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# find NocoDB container ID"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"ps"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# stop NocoDB container"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:" stop "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:C}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# delete NocoDB container"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"rm"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:C}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Note: Deleting your docker container without setting "},{type:b,tag:m,props:{},children:[{type:a,value:z}]},{type:a,value:" or mounting to a persistent volume for a default SQLite database will result in losing your data. See examples below."}]},{type:a,value:e},{type:b,tag:x,props:{id:K},children:[{type:b,tag:f,props:{href:"#find--remove-nocodb-docker-image",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# find NocoDB image"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:" images\n"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# delete NocoDB image"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:" rmi "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:C}]},{type:a,value:"YOUR_IMAGE_ID"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:D}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:x,props:{id:M},children:[{type:b,tag:f,props:{href:"#pull-the-latest-nocodb-image-with-same-environment-variables",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:" run -d -p "},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"8080"}]},{type:a,value:":8080 "},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:"\"\u003CYOUR_NC_DB_URL\u003E\""}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,X,Y]},children:[{type:a,value:"NC_AUTH_JWT_SECRET"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:a,value:"\"\u003CYOUR_NC_AUTH_JWT_SECRET_IF_GIVEN\u003E\""}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:a,value:"\n    nocodb\u002Fnocodb:latest\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Updating nocodb docker container is similar to updating "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.whitesourcesoftware.com\u002Ffree-developer-tools\u002Fblog\u002Fupdate-docker-images\u002F",rel:["nofollow","noopener","noreferrer"],target:A},children:[{type:a,value:"any other docker containers"}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:x,props:{id:O},children:[{type:b,tag:f,props:{href:"#example-docker-upgrade",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:"img",props:{alt:"Screen Shot 2021-09-16 at 09 23 07",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png"},children:[]}]},{type:a,value:e},{type:b,tag:B,props:{id:Q},children:[{type:b,tag:f,props:{href:"#node",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Updating docker container is similar to updating a npm package."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"From your root folder"}]},{type:a,value:e},{type:b,tag:$,props:{id:"uninstall-nocodb-package"},children:[{type:b,tag:f,props:{href:"#uninstall-nocodb-package",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Uninstall NocoDB package"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:" uninstall nocodb\n"}]}]}]},{type:a,value:e},{type:b,tag:$,props:{id:"install-nocodb-package"},children:[{type:b,tag:f,props:{href:"#install-nocodb-package",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:"Install NocoDB package"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"install"}]},{type:a,value:" --save nocodb\n"}]}]}]},{type:a,value:e},{type:b,tag:B,props:{id:S},children:[{type:b,tag:f,props:{href:"#homebrew",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Run following commands to upgrade Homebrew Nocodb version."}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# Update the local homebrew formulas"}]},{type:a,value:"\nbrew update\n"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"# Upgrade nocodb package"}]},{type:a,value:"\nbrew upgrade nocodb\n"}]}]}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fupgrading",extension:".md",createdAt:ab,updatedAt:ab,to:"\u002Fgetting-started\u002Fupgrading"},prev:{slug:"environment-variables",title:"Environment Variables",to:"\u002Fgetting-started\u002Fenvironment-variables"},next:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","a","function","true",-1,"icon","icon-link","docker","code","operator","p","comment","div","nuxt-content-highlight","pre","language-bash","line-numbers"," ",3,"h3",2,"NC_DB","_blank","h2","\u003C","\u003E","punctuation","\\","Upgrading","Docker","find-stop--delete-nocodb-docker-container","Find, Stop & Delete NocoDB Docker Container","find--remove-nocodb-docker-image","Find & Remove NocoDB Docker Image","pull-the-latest-nocodb-image-with-same-environment-variables","Pull the latest NocoDB image with same environment variables","example-docker-upgrade","Example: Docker Upgrade","node","Node","homebrew","Homebrew",".","YOUR_CONTAINER_ID","\n    -e ","assign-left","variable","=","string","h4","npm","2023-02-16T12:46:49.545Z")));