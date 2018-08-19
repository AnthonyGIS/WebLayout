(function(window){var svgSprite='<svg><symbol id="icon-detail-a" viewBox="0 0 1029 1024"><path d="M745.472 0 94.208 0C40.96 0 0 40.96 0 94.208l0 839.68C0 983.04 40.96 1024 94.208 1024l839.68 0c53.248 0 94.208-40.96 94.208-94.208L1028.096 184.32C1024 135.168 794.624 0 745.472 0zM233.472 184.32l278.528 0c24.576 0 45.056 20.48 45.056 45.056 0 24.576-20.48 45.056-45.056 45.056L233.472 274.432c-24.576 0-45.056-20.48-45.056-45.056C184.32 208.896 208.896 184.32 233.472 184.32zM790.528 839.68 233.472 839.68c-24.576 0-45.056-20.48-45.056-45.056 0-24.576 20.48-45.056 45.056-45.056l557.056 0c24.576 0 45.056 20.48 45.056 45.056C839.68 815.104 815.104 839.68 790.528 839.68zM790.528 651.264 233.472 651.264c-24.576 0-45.056-20.48-45.056-45.056s20.48-45.056 45.056-45.056l557.056 0c24.576 0 45.056 20.48 45.056 45.056S815.104 651.264 790.528 651.264zM790.528 466.944 233.472 466.944c-24.576 0-45.056-20.48-45.056-45.056 0-24.576 20.48-45.056 45.056-45.056l557.056 0c24.576 0 45.056 20.48 45.056 45.056C839.68 446.464 815.104 466.944 790.528 466.944z"  ></path></symbol><symbol id="icon-fsf_yasuobao" viewBox="0 0 1024 1024"><path d="M853.23 2H399v113h141v113H399v114h141v113H399v100h141v182.438C540 760.916 522.539 781 499.063 781H300.729C277.25 781 256 760.916 256 737.438V455h143V342H256V228h143V115H256V2h-82.771C79.348 2 2 76.89 2 170.771v680.002C2 944.652 79.348 1022 173.229 1022H853.23c93.88 0 168.77-77.348 168.77-171.227V170.771C1022 76.89 947.11 2 853.23 2z"  ></path><path d="M314 612h170v113H314z"  ></path></symbol><symbol id="icon-weixuanzhong" viewBox="0 0 1024 1024"><path d="M938.656 1024H85.344A85.344 85.344 0 0 1 0 938.656V85.344A85.344 85.344 0 0 1 85.344 0h853.312A85.344 85.344 0 0 1 1024 85.344v853.312A85.344 85.344 0 0 1 938.656 1024zM960 128a64 64 0 0 0-64-64H128a64 64 0 0 0-64 64v768a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V128z"  ></path></symbol><symbol id="icon-quanxuan" viewBox="0 0 1024 1024"><path d="M397.824 762.514286l2.413714 2.486857 422.765715-422.765714a38.765714 38.765714 0 0 0-27.574858-66.56 39.497143 39.497143 0 0 0-27.867428 11.117714L400.237714 654.043429l-162.450285-162.377143c-7.094857-7.094857-17.188571-11.264-27.794286-11.264s-20.772571 4.169143-27.721143 11.190857a38.619429 38.619429 0 0 0-11.483429 27.794286c0 10.459429 4.022857 20.260571 11.483429 27.648l215.552 215.478857z"  ></path><path d="M948.150857 0H75.776C34.011429 0 0 34.011429 0 75.849143v872.301714C0 989.915429 34.011429 1024 75.776 1024h872.374857c41.837714 0 75.849143-34.084571 75.849143-75.849143V75.849143C1024 34.011429 989.988571 0 948.150857 0m-2.56 79.36l-1.024 866.230857-866.157714-0.877714V78.409143l867.181714 0.950857z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)