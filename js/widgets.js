/**
 --- WIDGETS CONTAINS ---
 1. placeholder
 2. responsiveTabs
 3. debouncedresize
 4. equalHeight
 */

/**--- 1. placeholder ---*/
/*Placeholder. https://github.com/mathiasbynens/jquery-placeholder, http://mths.be/placeholder v2.0.8*/
(function(m,g,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function h(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==n()&&this.select()}function l(){var b,a=d(this),c= this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",h);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")} function n(){try{return g.activeElement}catch(b){}}var f="[object OperaMini]"==Object.prototype.toString.call(m.operamini),k="placeholder"in g.createElement("input")&&!f,f="placeholder"in g.createElement("textarea")&&!f,e=d.fn,p=d.valHooks,q=d.propHooks;k&&f?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":l}).data("placeholder-enabled", !0).trigger("blur.placeholder");return this},e.input=k,e.textarea=f,e={get:function(b){var a=d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=n()&&l.call(b)):c.hasClass("placeholder")?h.call(b,!0,a)||(b.value=a):b.value=a;return c}},k||(p.input=e,q.value=e),f||(p.textarea= e, q.value=e),d(function(){d(g).delegate("form","submit.placeholder",function(){var b=d(".placeholder",this).each(h);setTimeout(function(){b.each(l)},10)})}),d(m).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
/**--- 1. placeholder end ---*/

/**--- 2. responsiveTabs ---*/
/*!
 *  Project: jquery.responsiveTabs.js
 *  Description: A plugin that creates responsive tabs, optimized for all devices
 *  Author: Jelle Kralt (jelle@jellekralt.nl)
 *  Version: 1.5.1
 *  License: MIT
 */
!function(t,s,a){function e(s,a){this.element=s,this.$element=t(s),this.tabs=[],this.state="",this.rotateInterval=0,this.$queue=t({}),this.options=t.extend({},o,a),this.init()}var o={active:null,event:"click",disabled:[],collapsible:"accordion",startCollapsed:!1,rotate:!1,setHash:!1,animation:"default",animationQueue:!1,duration:500,scrollToAccordion:!1,scrollToAccordionOffset:0,accordionTabElement:"<div></div>",activate:function(){},deactivate:function(){},load:function(){},activateState:function(){},classes:{stateDefault:"r-tabs-state-default",stateActive:"r-tabs-state-active",stateDisabled:"r-tabs-state-disabled",stateExcluded:"r-tabs-state-excluded",container:"r-tabs",ul:"r-tabs-nav",tab:"r-tabs-tab",anchor:"r-tabs-anchor",panel:"r-tabs-panel",accordionTitle:"r-tabs-accordion-title"}};e.prototype.init=function(){var a=this;this.tabs=this._loadElements(),this._loadClasses(),this._loadEvents(),t(s).on("resize",function(t){a._setState(t)}),t(s).on("hashchange",function(t){var e=a._getTabRefBySelector(s.location.hash),o=a._getTab(e);e>=0&&!o._ignoreHashChange&&!o.disabled&&a._openTab(t,a._getTab(e),!0)}),this.options.rotate!==!1&&this.startRotation(),this.$element.bind("tabs-activate",function(t,s){a.options.activate.call(this,t,s)}),this.$element.bind("tabs-deactivate",function(t,s){a.options.deactivate.call(this,t,s)}),this.$element.bind("tabs-activate-state",function(t,s){a.options.activateState.call(this,t,s)}),this.$element.bind("tabs-load",function(t){var s;a._setState(t),a.options.startCollapsed===!0||"accordion"===a.options.startCollapsed&&"accordion"===a.state||(s=a._getStartTab(),a._openTab(t,s),a.options.load.call(this,t,s))}),this.$element.trigger("tabs-load")},e.prototype._loadElements=function(){var s=this,a=this.$element.children("ul"),e=[],o=0;return this.$element.addClass(s.options.classes.container),a.addClass(s.options.classes.ul),t("li",a).each(function(){var a,i,n,l,r,c=t(this),h=c.hasClass(s.options.classes.stateExcluded);if(!h){a=t("a",c),r=a.attr("href"),i=t(r),n=t(s.options.accordionTabElement).insertBefore(i),l=t("<a></a>").attr("href",r).html(a.html()).appendTo(n);var p={_ignoreHashChange:!1,id:o,disabled:-1!==t.inArray(o,s.options.disabled),tab:t(this),anchor:t("a",c),panel:i,selector:r,accordionTab:n,accordionAnchor:l,active:!1};o++,e.push(p)}}),e},e.prototype._loadClasses=function(){for(var t=0;t<this.tabs.length;t++)this.tabs[t].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab),this.tabs[t].anchor.addClass(this.options.classes.anchor),this.tabs[t].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel),this.tabs[t].accordionTab.addClass(this.options.classes.accordionTitle),this.tabs[t].accordionAnchor.addClass(this.options.classes.anchor),this.tabs[t].disabled&&(this.tabs[t].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled),this.tabs[t].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled))},e.prototype._loadEvents=function(){for(var t=this,a=function(a){var e=t._getCurrentTab(),o=a.data.tab;a.preventDefault(),o.disabled||(t.options.setHash&&(history.pushState?history.pushState(null,null,o.selector):s.location.hash=o.selector),a.data.tab._ignoreHashChange=!0,(e!==o||t._isCollapisble())&&(t._closeTab(a,e),e===o&&t._isCollapisble()||t._openTab(a,o,!1,!0)))},e=0;e<this.tabs.length;e++)this.tabs[e].anchor.on(t.options.event,{tab:t.tabs[e]},a),this.tabs[e].accordionAnchor.on(t.options.event,{tab:t.tabs[e]},a)},e.prototype._getStartTab=function(){var t,a=this._getTabRefBySelector(s.location.hash);return t=a>=0&&!this._getTab(a).disabled?this._getTab(a):this.options.active>0&&!this._getTab(this.options.active).disabled?this._getTab(this.options.active):this._getTab(0)},e.prototype._setState=function(s){var e,o=t("ul",this.$element),i=this.state,n="string"==typeof this.options.startCollapsed;o.is(":visible")?this.state="tabs":this.state="accordion",this.state!==i&&(this.$element.trigger("tabs-activate-state",{oldState:i,newState:this.state}),i&&n&&this.options.startCollapsed!==this.state&&this._getCurrentTab()===a&&(e=this._getStartTab(s),this._openTab(s,e)))},e.prototype._openTab=function(s,a,e,o){var i,n=this;e&&this._closeTab(s,this._getCurrentTab()),o&&this.rotateInterval>0&&this.stopRotation(),a.active=!0,a.tab.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),a.accordionTab.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),n._doTransition(a.panel,n.options.animation,"open",function(){a.panel.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),"accordion"!==n.getState()||!n.options.scrollToAccordion||n._isInView(a.accordionTab)&&"default"===n.options.animation||(i=a.accordionTab.offset().top-n.options.scrollToAccordionOffset,"default"!==n.options.animation&&n.options.duration>0?t("html, body").animate({scrollTop:i},n.options.duration):t("html, body").scrollTop(i))}),this.$element.trigger("tabs-activate",a)},e.prototype._closeTab=function(t,s){var e,o=this,i="string"==typeof o.options.animationQueue;s!==a&&(e=i&&o.getState()===o.options.animationQueue?!0:i?!1:o.options.animationQueue,s.active=!1,s.tab.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault),o._doTransition(s.panel,o.options.animation,"close",function(){s.accordionTab.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault),s.panel.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault)},!e),this.$element.trigger("tabs-deactivate",s))},e.prototype._doTransition=function(t,s,a,e,o){var i,n=this;switch(s){case"slide":i="open"===a?"slideDown":"slideUp";break;case"fade":i="open"===a?"fadeIn":"fadeOut";break;default:i="open"===a?"show":"hide",n.options.duration=0}this.$queue.queue("responsive-tabs",function(o){t[i]({duration:n.options.duration,complete:function(){e.call(t,s,a),o()}})}),("open"===a||o)&&this.$queue.dequeue("responsive-tabs")},e.prototype._isCollapisble=function(){return"boolean"==typeof this.options.collapsible&&this.options.collapsible||"string"==typeof this.options.collapsible&&this.options.collapsible===this.getState()},e.prototype._getTab=function(t){return this.tabs[t]},e.prototype._getTabRefBySelector=function(t){for(var s=0;s<this.tabs.length;s++)if(this.tabs[s].selector===t)return s;return-1},e.prototype._getCurrentTab=function(){return this._getTab(this._getCurrentTabRef())},e.prototype._getNextTabRef=function(t){var s=t||this._getCurrentTabRef(),a=s===this.tabs.length-1?0:s+1;return this._getTab(a).disabled?this._getNextTabRef(a):a},e.prototype._getPreviousTabRef=function(){return 0===this._getCurrentTabRef()?this.tabs.length-1:this._getCurrentTabRef()-1},e.prototype._getCurrentTabRef=function(){for(var t=0;t<this.tabs.length;t++)if(this.tabs[t].active)return t;return-1},e.prototype._isInView=function(a){var e=t(s).scrollTop(),o=e+t(s).height(),i=a.offset().top,n=i+a.height();return o>=n&&i>=e},e.prototype.activate=function(t,s){var a=jQuery.Event("tabs-activate"),e=this._getTab(t);e.disabled||this._openTab(a,e,!0,s||!0)},e.prototype.deactivate=function(t){var s=jQuery.Event("tabs-dectivate"),a=this._getTab(t);a.disabled||this._closeTab(s,a)},e.prototype.enable=function(t){var s=this._getTab(t);s&&(s.disabled=!1,s.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled),s.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled))},e.prototype.disable=function(t){var s=this._getTab(t);s&&(s.disabled=!0,s.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled),s.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled))},e.prototype.getState=function(){return this.state},e.prototype.startRotation=function(s){var a=this;if(!(this.tabs.length>this.options.disabled.length))throw new Error("Rotation is not possible if all tabs are disabled");this.rotateInterval=setInterval(function(){var t=jQuery.Event("rotate");a._openTab(t,a._getTab(a._getNextTabRef()),!0)},s||(t.isNumeric(a.options.rotate)?a.options.rotate:4e3))},e.prototype.stopRotation=function(){s.clearInterval(this.rotateInterval),this.rotateInterval=0},e.prototype.option=function(t,s){return s&&(this.options[t]=s),this.options[t]},t.fn.responsiveTabs=function(s){var o=arguments;return s===a||"object"==typeof s?this.each(function(){t.data(this,"responsivetabs")||t.data(this,"responsivetabs",new e(this,s))}):"string"==typeof s&&"_"!==s[0]&&"init"!==s?this.each(function(){var a=t.data(this,"responsivetabs");a instanceof e&&"function"==typeof a[s]&&a[s].apply(a,Array.prototype.slice.call(o,1)),"destroy"===s&&t.data(this,"responsivetabs",null)}):void 0}}(jQuery,window);
/**--- responsiveTabs end ---*/

/**--- 3. debouncedresize ---*/
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

	var $event = $.event,
		$special,
		resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

})(jQuery);
/**--- debouncedresize end ---*/

/**--- 4. equalHeight ---*/
(function(e){e.fn.equalHeight=function(t){var t=e.extend({amount:2,useParent:false,parent:null,resize:false},t);var n=e(this);n.removeAttr("style");if(t.useParent==true){if(t.parent==null){var r=e(this).parent().outerWidth()}else{var r=t.parent.outerWidth()}var i=e(this).outerWidth(true);t.amount=parseInt(r/i);newAmount=t.amount}var s=this;if(t.resize==true&&t.useParent==true){e(window).resize(function(){n.removeAttr("style");if(t.useParent==true){if(t.parent==null){var r=s.parent().outerWidth()}else{var r=t.parent.outerWidth()}var i=s.outerWidth(true);t.amount=parseInt(r/i)}return s.each(function(r){if(r%t.amount===0){var i=r+1;var s=e(this);var o=s.index();var u=[];var a=[s];for(var f=1;f<t.amount;f++){var l=e(n[r+f]);a.push(l)}for(var c=0;c<t.amount;c++){u.push(a[c].height())}var h=Math.max.apply(Math,u);e(a).each(function(t){var n=e(this);n.css("height",h)})}})})}return this.each(function(r){if(r%t.amount===0){var i=r+1;var s=e(this);var o=s.index();var u=[];var a=[s];for(var f=1;f<t.amount;f++){var l=e(n[r+f]);a.push(l)}for(var c=0;c<t.amount;c++){u.push(a[c].height())}var h=Math.max.apply(Math,u);e(a).each(function(t){var n=e(this);n.css("height",h)})}})}})(jQuery);
/**--- equalHeight end ---*/