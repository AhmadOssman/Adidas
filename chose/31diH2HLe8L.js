(function(k){var h=window.AmazonUIPageJS||window.P,m=h._namespace||h.attributeErrors,b=m?m("DetailPageBTFSubNavDesktopAsset",""):h;b.guardFatal?b.guardFatal(k)(b,window):b.execute(function(){k(b,window)})})(function(k,h,m){k.when("ready").register("hit-btf-sub-nav-desktop-metrics-logger",function(){return{incrementMetricCount:function(b){if("undefined"!==typeof b){var g=h.ue;g&&"function"===typeof g.count&&g.count(b,(g.count(b)||0)+1)}}}});"use strict";k.when("A","ready").register("btf-sub-nav-desktop-utils",
function(b){function g(){e("#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab").removeClass("active");e("#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab").removeAttr("aria-current")}var e=b.$;return{processTargetIds:function(f){var d={};b.each(f,function(a,b){a:{if(a!==m)for(var f=0;f<a.length;f++)if(e(a[f]).length&&1<e(a[f]).height()){a=a[f];break a}a=!1}a?d[b]=a:e("#"+b).hide()});return d},activateTab:function(b){g();e("#"+b).addClass("active");e("#"+b).attr("aria-current","location")},deactivateTabs:g,
getTargetDivCoordinates:function(b){var d=[];e(b).length&&e(b).offset()&&(d.push(e(b).offset().top),"#owner_zone_btf_header"===b?d.push(e("#owner_zone_btf_footer").offset().top+e("#owner_zone_btf_footer").height()):d.push(e(b).offset().top+e(b).height()-10));return d},onScreen:function(b,d){var a=e(h);d=a.scrollTop()+d;var a=h.innerHeight?h.innerHeight:a.height(),g=d+a,n=b[0]-100;b=b[1];return b>d&&b<=g||b-n>a&&n<=d&&b>=g}}});k.when("A","btf-sub-nav-desktop-utils","ready").execute(function(b,g){function e(){k.register("btf-sub-nav-desktop-configs",
function(){function a(){h=[];for(var a in p)p.hasOwnProperty(a)&&h.push({tab:a,topOffset:d(p[a]).offset().top});h.sort(function(a,c){return a.topOffset-c.topOffset})}var e=b.state("btf-sub-nav-desktop-context"),f=[],h=[],m={},k=e["btf-sub-nav-desktop-leftAligned"],c=e["btf-sub-nav-desktop-lateActivation"],t={btfSubNavDesktopAboutThisItemTab:e["btf-sub-nav-desktop-about-this-item-tab"],btfSubNavDesktopSimilarTab:e["btf-sub-nav-desktop-similar-tab"],btfSubNavDesktopProductInfoTab:e["btf-sub-nav-desktop-product-info-tab"],
btfSubNavDesktopQuestionsTab:e["btf-sub-nav-desktop-questions-tab"],btfSubNavDesktopCustomerReviewsTab:e["btf-sub-nav-desktop-customer-reviews-tab"]},p=g.processTargetIds(t);b.objectIsEmpty(p)&&d("#btf-sub-nav-desktop-wrapper").hide();e=d("#btf-sub-nav-desktop-tabs").outerHeight()-2;return{SUBNAV_ELEMENT:"#btf-sub-nav-desktop-tabs",tabTargets:t,isLeftAligned:k,isLateActivation:c,btfSubNavJQElemHeight:e,tabsArray:["btfSubNavDesktopAboutThisItemTab","btfSubNavDesktopSimilarTab","btfSubNavDesktopProductInfoTab",
"btfSubNavDesktopQuestionsTab","btfSubNavDesktopCustomerReviewsTab"],persistentHeaderClass:"persistent-header",fixedAmazonNavJQElem:"#nav-logobar",fixedAmazonNavBodyClass:"fixed-navbar",animationDuration:500,atfCustomerRatingScrollDuration:800,navigateTopElements:["btfSubNavDesktopTopTab","btfSubNavDesktopAboutThisItemTab"],initialize:function(){p=g.processTargetIds(t);f=[];for(var c in p)p.hasOwnProperty(c)&&f.push(c);a();m={btfSubNavDesktopTopTab:"btfSubNavDesktopTopTab"};for(c=0;c<f.length;++c)m[f[c]]=
h[c].tab;if(0<h.length){c=d("\x3cdiv\x3e");var b=d("#btfSubNavDesktopTopTab");null!==b&&0<b.length&&d(c).append(b.clone(!0));for(b=0;b<h.length;b++){var e=d("#"+h[b].tab);null!==e&&0<e.length&&d(c).append(e.clone(!0))}d("#btf-sub-nav-desktop-tabs").html(c.html())}},getSubNavDesktopTabToActualTabMap:function(){return m},getTabsArray:function(){return f}}})}function f(){d("#btf-sub-nav-desktop-tabs").length&&(e(),b.off("a:pageUpdate",f))}var d=b.$;if(d("#btf-sub-nav-desktop-tabs").length)e();else b.on("a:pageUpdate",
f)});k.when("A","hit-btf-sub-nav-desktop-metrics-logger","btf-sub-nav-desktop-configs","btf-sub-nav-desktop-utils").execute(function(b,g,e,f){if(!e)return!1;var d=b.$,a={},k=e.btfSubNavJQElemHeight,n=0,v,r=null,w=!1;a.isSubNavImpressionsMetricEmitted=!1;a.isSubNavHiddenMetricEmitted=!1;a.isSubNavRenderable=!1;a.isLeftAligned=e.isLeftAligned;a.isLateActivation=e.isLateActivation;a.tabTargets=e.tabTargets;a.tabCoordinates={};a.jqSubNav=null;a.topOffset=k+n;a.animationDuration=e.animationDuration;a.THIRD_PARTY_JUMP_LINKS=
"#acrCustomerReviewLink #askATFLink #owner_zone_atf_jumplink #customerReviewsAttributeSeeAllRatings #seeMoreDetailsLink #HLCXComparisonJumplink_feature_div #climatePledgeFriendlyATF_feature_div".split(" ");a.showTab=function(){a.jqSubNav.css({top:"",position:""});a.jqSubNav.addClass(e.persistentHeaderClass)};a.hideTab=function(){a.jqSubNav.css({top:-100,position:"absolute"});a.jqSubNav.removeClass(e.persistentHeaderClass)};a.fixNarBarWidth=function(){if(d("#btfSubNavDesktop_feature_div").length){var c=
d("#btfSubNavDesktop_feature_div").width();a.jqSubNav.width(c)}};a.emitSubNavImpressionsMetric=function(){if(!a.isSubNavImpressionsMetricEmitted&&a.isSubNavRenderable){a.logMetricByTreatment("visible","");for(var c in a.tabs)a.tabs.hasOwnProperty(c)&&a.logMetricByTreatment(":visible",c);a.isSubNavImpressionsMetricEmitted=!0}};a.logMetricByTreatment=function(c,d){a.isLeftAligned&&!a.isLateActivation?g.incrementMetricCount("hit-btf-sub-nav-desktop:T1:"+d+c):a.isLeftAligned||a.isLateActivation?a.isLeftAligned&&
a.isLateActivation?g.incrementMetricCount("hit-btf-sub-nav-desktop:T3:"+d+c):g.incrementMetricCount("hit-btf-sub-nav-desktop:T4:"+d+c):g.incrementMetricCount("hit-btf-sub-nav-desktop:T2:"+d+c)};a.emitSubNavHiddenMetric=function(c){a.isSubNavHiddenMetricEmitted||(a.logMetricByTreatment(":hidden",c),a.isSubNavHiddenMetricEmitted=!0)};a.applyCenterTabStyling=function(){a.isLeftAligned||a.jqSubNav.css({"justify-content":"center"})};a.attachTwisterUpdateHandler=function(){b.on("a:pageUpdate ready",a.initialize)};
a.attachScreenResizeHandler=function(){b.on("resize",a.initialize);b.on("orientationChange",a.initialize)};a.refreshTabCoordinates=function(){b.each(a.tabs,function(c,d){a.tabCoordinates[d]=f.getTargetDivCoordinates(c)})};a.processTabChecks=function(){for(var c=!1,d=e.getTabsArray(),b=e.getSubNavDesktopTabToActualTabMap(),h=0;h<d.length;h++){var g=b[d[h]];if(a.tabCoordinates[g]&&f.onScreen(a.tabCoordinates[g],a.topOffset)){c=!0;f.activateTab(g);break}}c||f.deactivateTabs()};a.setTopOffset=function(){d("body").hasClass(e.fixedAmazonNavBodyClass)&&
d(e.fixedAmazonNavJQElem).length&&(n=d(e.fixedAmazonNavJQElem).outerHeight());a.topOffset=k+n};a.findFeatureDivHeights=function(c,b){var e=!0,h=!1,f=m;try{for(var g=c.children[Symbol.iterator](),k;!(e=(k=g.next()).done);e=!0){var l=k.value;if(l.matches("[data-feature-name]")){if(l.matches("div")&&l.id&&0<l.children.length&&l.matches("[data-feature-name]")){var n=(d(l).offset().top+d(l).height())/d(document).height();b.push({node:l,nodePageRatio:n})}0<l.children.length&&l.matches("[data-feature-name]")&&
a.findFeatureDivHeights(l,b)}}}catch(u){h=!0,f=u}finally{try{!e&&g.return&&g.return()}finally{if(h)throw f;}}};a.moveFeatureDivToPost35Percent=function(){var c=document.querySelector("#dp-container");if(c){var b=[];if(0<c.children.length&&Array.from(c.children).every(function(a){return!a.matches("[data-feature-name]")}))a.logMetricByTreatment(":missing-data-feature-name","");else{a.findFeatureDivHeights(c,b);b.sort(function(a,c){return a.nodePageRatio-c.nodePageRatio});var c=void 0,e=!0,h=!1,g=m;
try{for(var f=b[Symbol.iterator](),k;!(e=(k=f.next()).done);e=!0){var l=k.value,n=l.node;if(.35<l.nodePageRatio){c=n;break}}}catch(u){h=!0,g=u}finally{try{!e&&f.return&&f.return()}finally{if(h)throw g;}}c&&!c.isSameNode(v)&&"btfSubNavDesktop_feature_div"!==c.id&&(d("#btfSubNavDesktop_feature_div").insertAfter(d(c)),v=c)}}else a.logMetricByTreatment(":missing-dp-container","")};a.moveFeatureDivToTopOfBtf=function(){var a=void 0;0<d("#bottomRow").length?a=d("#bottomRow"):0<d("#ATFCriticalFeaturesDataContainer").length&&
(a=d("#ATFCriticalFeaturesDataContainer"));a!==m&&0<a.length&&d("#btfSubNavDesktop_feature_div").insertAfter(a)};a.scrollHandler=function(){a.isLateActivation&&a.moveFeatureDivToPost35Percent();if(3>e.getTabsArray().length)a.disableKeyboardFocusOnTabs(),a.emitSubNavHiddenMetric("less-than-3-tabs");else{a.setTopOffset();var c=d(h).scrollTop()+n,b=c+h.innerHeight,f=d(document).height(),g=d("#bottomRow"),k=d("#ATFCriticalFeaturesDataContainer"),q;if(a.isLateActivation)f*=.35;else if(0<g.length?q=g:0<
k.length&&(q=k),q!==m&&0<q.length)f=q.offset().top+q.innerHeight();else{a.emitSubNavHiddenMetric("no-triggering-element");return}c=(b-f)/(b-c)*100;a.refreshTabCoordinates();100<=c?(a.showTab(),a.jqSubNav.css({top:0,opacity:1}),a.processTabChecks(),a.emitSubNavImpressionsMetric()):90<=c&&100>c?(a.showTab(),a.jqSubNav.css({top:0,opacity:(c-90)/25}),a.processTabChecks(),a.emitSubNavImpressionsMetric()):(a.jqSubNav.css({opacity:0}),a.hideTab(),a.processTabChecks())}};a.clickHandler=function(c){c.preventDefault();
b.off("scroll",a.scrollHandler);a.jqSubNav.css({opacity:1});c=c.currentTarget.id;var e=a.tabs[c];a.logMetricByTreatment(":click",c);"btfSubNavDesktopTopTab"===c?(d("html,body").animate({scrollTop:0},a.animationDuration),b.on("scroll",a.scrollHandler),a.setKeyboardFocus("#"+a.getTopTabTargetId())):("btfSubNavDesktopAboutThisItemTab"===c?(a.animationHelper(e,0),b.on("scroll",a.scrollHandler)):(f.activateTab(c),a.animationHelper(e,a.topOffset),b.delay(function(){b.on("scroll",a.scrollHandler);a.showTab()},
a.animationDuration+300)),a.setKeyboardFocus(e))};a.animationHelper=function(c,b){d(c).offset()&&d("html,body").stop(!0,!1).animate({scrollTop:d(c).offset().top-b},{duration:a.animationDuration,step:function(a,e){a=d(c).offset().top-b;e.end!==a&&(e.end=a)},complete:function(){d("html, body").animate({scrollTop:d(c).offset().top-b},{duration:0})}})};a.handleThirdPartyJumpLinks=function(){b.off("scroll",a.scrollHandler);b.off("a:pageUpdate",a.initialize);b.delay(function(){b.on("scroll",a.scrollHandler);
b.on("a:pageUpdate",a.initialize)},e.atfCustomerRatingScrollDuration)};a.detachThirdPartyJumpLinksHandlers=function(){a.THIRD_PARTY_JUMP_LINKS.forEach(function(c){d(c).length&&d(c).unbind("click",a.handleThirdPartyJumpLinks)})};a.attachThirdPartyJumpLinksHandlers=function(){a.THIRD_PARTY_JUMP_LINKS.forEach(function(c){d(c).length&&d(c).click(a.handleThirdPartyJumpLinks)})};a.detachHandlers=function(){b.off("scroll",a.scrollHandler);a.detachThirdPartyJumpLinksHandlers();d("#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab").unbind("click",
a.clickHandler)};a.attachHandlers=function(){b.on("scroll",a.scrollHandler);a.attachThirdPartyJumpLinksHandlers();d("#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab").click(a.clickHandler)};a.setHyperlinkDestinations=function(a){d.each(a,function(a,c){d("#"+a).attr("href",c)})};a.setKeyboardFocus=function(a){0!==d(a).length&&(d(a).attr("tabindex","-1"),d(a)[0].focus({preventScroll:!0}),d(a).removeAttr("tabindex"))};a.getTopTabTargetId=function(){return 0<d("#nav-top").length?"nav-top":0<d("#navbar-main").length?
"navbar-main":"nav-logo"};a.disableKeyboardFocusOnTabs=function(){d("#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab").attr("tabindex","-1")};a.removeHiddenClassAndHideTabs=function(){a.jqSubNav.hasClass("aok-hidden")&&a.hideTab();a.jqSubNav.removeClass("aok-hidden")};a.initialize=function(){e.initialize();a.jqSubNav=d(e.SUBNAV_ELEMENT);a.tabs=f.processTargetIds(a.tabTargets);b.objectIsEmpty(a.tabs)?(a.detachHandlers(),d("#btf-sub-nav-desktop-tabs").hide(),a.emitSubNavHiddenMetric("empty-tabs-list")):
(a.setHyperlinkDestinations(a.tabs),a.applyCenterTabStyling(),a.isSubNavRenderable=!0,a.setTopOffset(),a.fixNarBarWidth(),a.scrollHandler(),a.refreshTabCoordinates(),a.detachHandlers(),a.attachHandlers(),a.removeHiddenClassAndHideTabs(),document.removeEventListener("focusin",a.focusHandler),document.addEventListener("focusin",a.focusHandler),a.isLateActivation||w||(a.moveFeatureDivToTopOfBtf(),w=!0),d("#btf-sub-nav-desktop-tabs").is("[aria-label]")||d("#btf-sub-nav-desktop-tabs").attr("aria-label",
"Navigate within the product detail page"))};a.focusHandler=function(c){if(c.target&&c.target.classList&&c.target.classList.contains("sub-nav-desktop-tab")){r||(r=d(document).height());c=d("#bottomRow");var b=d("#ATFCriticalFeaturesDataContainer"),f;if(a.isLateActivation)f=.35*r;else if(0<c.length?f=c:0<b.length&&(f=b),f!==m&&0<f.length)f=f.offset().top+f.innerHeight();else return;a.jqSubNav.hasClass(e.persistentHeaderClass)||h.scroll({top:Math.ceil(f)})}else r=null};a.initialize();a.attachTwisterUpdateHandler();
a.attachScreenResizeHandler()})});