__NUXT_JSONP__("/getting-started/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{document:{slug:"upgrading",description:"Upgrading NocoDB : Docker, Node, Heroku and Homebrew!",title:L,position:20,category:"Getting started",menuTitle:L,link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:n,depth:A,text:M},{id:N,depth:v,text:O},{id:P,depth:v,text:Q},{id:R,depth:v,text:S},{id:T,depth:v,text:U},{id:V,depth:A,text:W},{id:X,depth:A,text:Y},{id:Z,depth:v,text:_},{id:$,depth:v,text:aa},{id:ab,depth:A,text:ac}],body:{type:"root",children:[{type:b,tag:B,props:{id:n},children:[{type:b,tag:f,props:{href:"#docker",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:M}]},{type:a,value:d},{type:b,tag:w,props:{id:N},children:[{type:b,tag:f,props:{href:"#find-stop--delete-nocodb-docker-container",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:O}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# find NocoDB container ID"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:"ps"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# stop NocoDB container"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" stop "},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:ad},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# delete NocoDB container"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:"rm"}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:ad},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:w,props:{id:P},children:[{type:b,tag:f,props:{href:"#find--remove-nocodb-docker-image",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Q}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# find NocoDB image"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" images\n"},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# delete NocoDB image"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" rmi "},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:"YOUR_IMAGE_ID"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:w,props:{id:R},children:[{type:b,tag:f,props:{href:"#pull-the-latest-nocodb-image-with-same-environment-variables",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:S}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" run -d -p "},{type:b,tag:c,props:{className:[e,"number"]},children:[{type:a,value:"8080"}]},{type:a,value:":8080 "},{type:b,tag:c,props:{className:[e,C]},children:[{type:a,value:D}]},{type:a,value:ae},{type:b,tag:c,props:{className:[e,af,ag]},children:[{type:a,value:"NC_DB"}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[e,ai]},children:[{type:a,value:"\"\u003CYOUR_NC_DB_URL\u003E\""}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,C]},children:[{type:a,value:D}]},{type:a,value:ae},{type:b,tag:c,props:{className:[e,af,ag]},children:[{type:a,value:"NC_AUTH_JWT_SECRET"}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[e,ai]},children:[{type:a,value:"\"\u003CYOUR_NC_AUTH_JWT_SECRET_IF_GIVEN\u003E\""}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,C]},children:[{type:a,value:D}]},{type:a,value:"\n    nocodb\u002Fnocodb:latest\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Updating nocodb docker container is similar to updating "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.whitesourcesoftware.com\u002Ffree-developer-tools\u002Fblog\u002Fupdate-docker-images\u002F",rel:[E,F,G],target:H},children:[{type:a,value:"any other docker containers"}]},{type:a,value:aj}]},{type:a,value:d},{type:b,tag:w,props:{id:T},children:[{type:b,tag:f,props:{href:"#example-docker-upgrade",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:U}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:I,props:{alt:"Screen Shot 2021-09-16 at 09 23 07",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png"},children:[]}]},{type:a,value:d},{type:b,tag:B,props:{id:V},children:[{type:b,tag:f,props:{href:"#node",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:W}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Updating docker container is similar to updating a npm package."}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"From your root folder"}]},{type:a,value:d},{type:b,tag:J,props:{id:"uninstall-nocodb-package"},children:[{type:b,tag:f,props:{href:"#uninstall-nocodb-package",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Uninstall NocoDB package"}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:ak}]},{type:a,value:" uninstall nocodb\n"}]}]}]},{type:a,value:d},{type:b,tag:J,props:{id:"install-nocodb-package"},children:[{type:b,tag:f,props:{href:"#install-nocodb-package",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Install NocoDB package"}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:ak}]},{type:a,value:x},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:"install"}]},{type:a,value:" --save nocodb\n"}]}]}]},{type:a,value:d},{type:b,tag:B,props:{id:X},children:[{type:b,tag:f,props:{href:"#heroku",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Y}]},{type:a,value:d},{type:b,tag:w,props:{id:Z},children:[{type:b,tag:f,props:{href:"#using-the-heroku-cli-login",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:_}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"heroku container:login\n"},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" pull nocodb\u002Fnocodb:latest\n"},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" tag nocodb\u002Fnocodb:latest registry.heroku.com\u002F"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:"\u002Fweb\n"},{type:b,tag:c,props:{className:[e,h]},children:[{type:a,value:n}]},{type:a,value:" push registry.heroku.com\u002F"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:"\u002Fweb\nheroku container:release -a "},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:y}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:z}]},{type:a,value:" web\n"}]}]}]},{type:a,value:d},{type:b,tag:J,props:{id:"on-apple-m1-chipset"},children:[{type:b,tag:f,props:{href:"#on-apple-m1-chipset",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"On Apple M1 Chipset"}]},{type:a,value:d},{type:b,tag:"blockquote",props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Please make sure you change Docker's default architecture to "},{type:b,tag:o,props:{},children:[{type:a,value:"linux\u002Famd64"}]},{type:a,value:" by running the following command "},{type:b,tag:"em",props:{},children:[{type:a,value:"before"}]},{type:a,value:" executing the aforementioned steps"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"export DOCKER_DEFAULT_PLATFORM=linux\u002Famd64"}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"More details can be found "},{type:b,tag:f,props:{href:"https:\u002F\u002Fmedium.com\u002Fgeekculture\u002Ffrom-apple-silicon-to-heroku-docker-registry-without-swearing-36a2f59b30a3",rel:[E,F,G],target:H},children:[{type:a,value:"here"}]},{type:a,value:aj}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:w,props:{id:$},children:[{type:b,tag:f,props:{href:"#using-github",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aa}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Fork the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-seed-heroku",rel:[E,F,G],target:H},children:[{type:a,value:"nocodb-seed-heroku repository"}]},{type:a,value:" to your GitHub account.\nLogin to Heroku, go to your NocoDB app, and head to the \"Deploy\" tab.\nSelect \"GitHub\" in the \"Deployment method\" section."}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"In the \"Connect to GitHub\" section, search for your forked nocodb-seed-heroku repo. Connect to it:"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:I,props:{alt:al,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479577-e8bdc1f0-99d1-4072-8d95-4879cc54ddb2.png"},children:[]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"In the \"Automatic deploys\" section, select \"Enable Automatic Deploys\":"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:I,props:{alt:al,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479705-b5280199-aa31-40db-a5aa-7586eb918c01.png"},children:[]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Head back to your forked nocodb-seed-heroku repo on your GitHub account. Edit one of your files and make a simple modification (example, add some random characters to the readme.md) and commit the change directly to the main branch."}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"This will trigger the Heroku deployment. Your app should now be updated to the latest release of NocoDB."}]},{type:a,value:d},{type:b,tag:B,props:{id:ab},children:[{type:b,tag:f,props:{href:"#homebrew",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ac}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Run following commands to upgrade Homebrew Nocodb version."}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# Update the local homebrew formulas"}]},{type:a,value:"\nbrew update\n"},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"# Upgrade nocodb package"}]},{type:a,value:"\nbrew upgrade nocodb\n"}]}]}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fupgrading",extension:".md",createdAt:am,updatedAt:am,to:"\u002Fgetting-started\u002Fupgrading"},prev:{slug:"installation",title:"Installation",to:"\u002Fgetting-started\u002Finstallation"},next:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"}}],fetch:{},mutations:[]}}("text","element","span","\n","token","a","p","function","operator","true",-1,"icon","icon-link","docker","code","div","nuxt-content-highlight","pre","language-bash","line-numbers","comment",3,"h3"," ","\u003C","\u003E",2,"h2","punctuation","\\","nofollow","noopener","noreferrer","_blank","img","h4","HEROKU_APP_NAME","Upgrading","Docker","find-stop--delete-nocodb-docker-container","Find, Stop & Delete NocoDB Docker Container","find--remove-nocodb-docker-image","Find & Remove NocoDB Docker Image","pull-the-latest-nocodb-image-with-same-environment-variables","Pull the latest NocoDB image with same environment variables","example-docker-upgrade","Example: Docker Upgrade","node","Node","heroku","Heroku","using-the-heroku-cli-login","Using the Heroku CLI login","using-github","Using GitHub","homebrew","Homebrew","YOUR_CONTAINER_ID","\n    -e ","assign-left","variable","=","string",".","npm","image","2022-07-01T13:08:07.685Z")));