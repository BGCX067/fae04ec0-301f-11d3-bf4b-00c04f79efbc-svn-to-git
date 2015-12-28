/**
 * @author phongnguyen
 */
function Renderer (config) {
    var me = this;
    me.setting = $.extend({
        placeHolder: '#test-guide',
        mainCls: 'widget-guide',
        logoID: 'widget-logo',
        titleID: 'volume-licensing-text',
        data: {}
    }, config);
    
    me.container = null;
    me.entries = null;
    me.current = null;
    me.topGuide = null;
    me.init();
};

Renderer.prototype = {
    init: function(){
        var me = this;
        me.container = $(this.setting.placeHolder);
        me.container.addClass(me.setting.mainCls);
        me.container.append("<div id='"+ me.setting.logoID +"' /><div id='"+ me.setting.titleID +"' />");

        me.container.find("div#"+me.setting.logoID).bind('click', {self: me}, me.restart);
        me.entries = { Entries: this.setting.data, toString: function () { return "Entries"; } };

        me.createInstruction();
        me.loadNav(me.entries, true);

        me.updateTitle("<b>How can we help you?</b>", "Choose One");
        
        me.container.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
        
    }
    /**
      * Restart treelist to first level
      * Will be call when logo and return button is clicked
      */
    ,restart: function(e) {
        var me = e.data.self;
        me.current = null;

        me.container.find("div#instructions a#restart, div#instructions a#back").fadeOut();
        me.container.find("div#util").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
        me.hideAnswer(function () { me.loadNav(me.entries) });
        me.hideNav(function () { me.loadNav(me.entries) });
        me.container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { me.updateTitle("<b>How can we help you?</b>", "Choose One") } });

        me.trackAction("", "Restart", "Completed");
    }
    /**
     * Back one level
     * will be call when back button is click
     */
    ,back: function(e){
        var me = e.data.self;
        var data = me.current.Parent;

        if (data.toString() != "Entries") {
            me.hideAnswer(function () { me.loadNav(data) });
            me.container.find("div#util").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
            me.hideNav(function () { me.loadNav(data) });
            me.container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function(){ me.updateTitle(); } });

            me.trackAction("", "Back", "");

        } else {
            me.restart(e);
        }
    }
    /**
     * Go deep one level
     * Will be call when Nav item is clicked
     */
    ,click: function(e){
        var me = e.data.self;
        var data = $(this).data("d");

        switch (data.toString()) {
            case "Entries":
                break;

            case "Entry":
                me.hideNav(function () {
                    var me = this;
                    me.container.find("div#instructions a#restart, div#instructions a#back").fadeIn();
                    me.loadNav(data, true);
                });
                break;

            case "Category":
                me.hideNav(function () {
                    var me = this; 
                    me.loadNav(data, true); 
                });
                break;

            case "Question":
                me.current = data;
                me.topGuide = data;
                if($('#answerContent').length > 0){
                    me.hideAnswer(function(){ me.loadAnswer(data.children[0], true); });
                }else{
                    me.hideNav(function () {
                        var me = this; 
                        me.loadAnswer(data.children[0], true); 
                    });
                }                
                break;

            case "Answer":
                break;
        }

        me.container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function(){
            me.updateTitle.call(me); 
        } });


        me.track(data, "Microsoft Volume Licensing - Windows Server 2012");
    }
    /**
     * Create placeholder for Title, Back and Return Button
     */
    ,createInstruction: function(){
        var me = this;
        var div = $("<div id='instructions'/>");
        me.container.append(div);

        div.append("<div id='instr-title'>How can we help you?</div>")
            .append("<div id='instr-step'>Choose One</div>")
            .append("<a id='back'>Back</a><a id='restart'>Return to Start</a>");

        div.find("a#restart").bind('click', {self: me}, me.restart);
        div.find("a#back").bind('click', {self: me}, me.back);

        
        
        me.container.find("div#instructions a#restart, div#instructions a#back").hide();
        me.container.find("div#instructions").animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }
    /**
     * Update title for each Nav Item
     */
    ,updateTitle: function(title, caption) {
        var me = this,
            defaultCSSTop = 160,
            instructions = me.container.find("div#instructions");
        
        // reset Top Possition as default css.
        instructions.css('top', defaultCSSTop);
        
        me.container.find("div#instr-title").html(title);
        me.container.find("div#instr-step").html(caption);
        me.container.find("div#instr-step").show();
        if (caption == "") me.container.find("div#instr-step").hide();

        // Update Back-Return button position
        var defaultHeightTitle = 40,
            titleHeight = $('#instr-title').height(),
            currentPos =  instructions.position(),
            newTop = currentPos.top - (titleHeight-defaultHeightTitle);
        
        if(titleHeight > 40 && currentPos.top == defaultCSSTop){
            instructions.css('top', newTop);
            //console.log(newTop);
        }
        
        instructions.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }
    /**
     * Clear Nav and Answer DOM
     * Will be called when first load data, show Answer
     */
    ,clearEntries: function(){
        var me = this;
        me.container.find("#navigation").remove();
        me.container.find("#answerContent").remove();
    }
    /**
     * Create easeOutCirc animation for Nav Items
     */
    ,hideNav: function(callback){
        var me = this;
       // Fix anamation on IE8
        if(($.browser.msie  && parseInt($.browser.version, 10) === 8)){
            me.container.find("#navigation li span a").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc'});
            me.container.find("#navigation li").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function(){
                callback.call(me);
            } });
            //console.log('debug....');
        }else{
            me.container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function(){
                callback.call(me);
            } });
        }
    }
    /**
     * Create easeOutCirc animation for Answer section
     */
    ,hideAnswer: function(callback){
        var me = this;
        if($.browser.msie  && parseInt($.browser.version, 10) === 8){
            me.container.find('#answerContent css3-container').animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
            me.container.find("#help").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
            me.container.find("#copy").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
            me.container.find("#answerContent").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: callback });
        }else{
            me.container.find("#answerContent").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function(){
                callback.call(me);
            } });
        }
    }
    /**
     * Load Nav Item base on data paramerter
     */
    ,loadNav: function(data, history){
        var me = this;
        me.clearEntries();
        
        var div = $("<div id='navigation' class='buttons' />");
        var list = $("<ul />");
        div.append(list);
        me.container.append(div);

        if (data.TreeNote) me.updateTitle(data.TreeNote, "");

        me.current = data;

        var items;
        switch (data.toString()) {
            case "Entries":
                items = data.Entries;
                break;

            case "Entry":
            case "Category":
                items = data.children;
                break;

            case "Question":
                items = data.children;
                break;
            case "Answer":
                break;
        }

        for (var i = 0; i < items.length; i++) {
            var o = items[i];
            if (history) o.Parent = data;
            var btn = $("<li><span><a>" + o.Text + "</a></span></li>");
            list.append(btn);

            var a = btn.find("a");
        
        
            a.css({ top: btn.outerHeight() / 2 - a.outerHeight() / 2 });

            btn.data("d", o);
            btn.bind('click', {self: me}, me.click);
        }


        div.css({ top: me.container.outerHeight() / 2 - div.outerHeight() / 2 });
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }
    /**
     * Load Answer data
     */
    ,loadAnswer: function(data, history){
        var me = this;
        me.clearEntries();

        me.updateTitle(data.TreeNote, "");

        var div = $("<div id='answerContent'/>");

        var help = $("<div id='help'><div id='help-text'><span>Was this information useful?   <a id='yes' href='#'>Yes</a> | <a id='no' href='#'>No</a></span>"
        + "Didn't find what you were looking for? "
        + "No problem. <a id='customer-service' href='#'>Contact Customer Service</a> for  further assistance.<div id='relative-items'><ul></ul></div></div></div>");

        div.append(help);

        var answ = $("<div id='copy'><div id='wrapper-text'><div id='copy-text'>" + data.Text + "</div></div></div>");
        div.append(answ);

        
        if(data.relative){
            var relativeObj = data.getRelativeItem();
            if(relativeObj.length > 0){
                for(var i=0; i<relativeObj.length; i++){
                    list = $('<li><a href="#">'+ relativeObj[i].Text +'</a></li>');
                    list.data('d', relativeObj[i]);
                    list.click(function(e){
                        e.stopPropagation();
                        e.preventDefault();
                       me.click.call(me);
                    });
                    help.find('#relative-items ul').append(list);
                }
                help.find('#relative-items').prepend('<div>Relative Items:</div>');
            }
        }

        help.find("a#yes").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            
            //$(this).addClass('visited');
            alert("Thanks for responding. Your feedback helps us improve the site.");
            me.trackVote(me.topGuide, "Yes");
        });
        help.find("a#no").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            
            //$(this).addClass('visited');
            window.open('../how-to-buy/how-to-buy.html');
            me.trackVote(me.topGuide, "No");
        });
        help.find("a#customer-service").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            
            //$(this).addClass('visited');
            window.open('../how-to-buy/how-to-buy.html');
            me.trackExternal("www.microsoft.com", "/licensing/contact-us.aspx", "Customer Service");
        });
       
        // Select all external link inside Answer section
        div.find('a:not("#yes, #no, #customer-service")').click(function(e){
            e.stopPropagation();
            e.preventDefault();
            
            var element = $(this),
                text = element.text(),
                url = element.attr('href');
            
            // Open link in new window
            window.open(url);
            
            // create temp A tag to extract info
            var a = document.createElement('a');
            a.href = url;
            
            // Call track of webtrend, we track all external link
            me.trackExternal(a.protocol +'//'+ a.host, a.pathname, text);
            delete a;
        });
        
        me.container.append(div);

        var h = answ.outerHeight();
        help.css({ top: h });

        div.css({ top: me.container.outerHeight() / 2 - (div.outerHeight() + help.find("#help-text").outerHeight()) / 2 });
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });

        me.buildUtil();
    }
    /**
     * Create DOM for Print, Email element
     */
    ,buildUtil: function(){
        var me = this;
        me.container.find("#util").remove();

        var div = $("<div id='util'/>");
        var print = $("<a id='util-print' />");
        var email = $("<a id='util-email' />");
        div.append(print);
        div.append(email);

        print.click(function () {
            me.setupPrinting(me.topGuide);
            // Implement Print
            $("div#widget-print").printElement({
                printMode:'popup'
            });
            $("div#widget-print").remove();
        });

        email.attr("href", me.genEmail());
        email.click(function(){
            me.trackAction(me.topGuide, "Email", "Sent");
        });

        me.container.append(div);
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }
    /**
     * Prepare data for Printing function
     */
    ,setupPrinting: function(data){
        var me = this;
        $("div#widget-print").remove();

        var print = $("<div id='widget-print' />").appendTo(me.container);
        print.append("<img src='../../global/licensing/renderingassets/ws2012/images/print-logo.png'/>");

        var breadcrumb = me.getbreadcrumb(data);
        print.append("<div id='breadcrumb'>Source: <a href='WindowsServer2012-2.html'>http://www.microsoft.com/licensing/about-licensing/WindowsServer2012.aspx</a><br /><span class='crumb'>" + breadcrumb + "</span></div>");

        var dl = $("<dl />").appendTo(print);
        dl.append("<dt>Question:</dt>");
        dl.append("<dd>" + data.Text + "</dd>");
        dl.append("<dt>Answer:</dt>");
        dl.append("<dd>" + data.children[0].Text + "</dd>");

        print.append("<div id='print-help'>If you need more information, please contact Customer Service for further assistance.<br /><a href='../how-to-buy/how-to-buy.html'>http://www.microsoft.com/licensing/contact-us.aspx</a></div>");
        var footer = $("<div id='print-footer'></div>").appendTo(print);
        footer.append("<div id='print-copy'>&copy; Microsoft Corporation. All rights reserved. This document is for informational purposes only.<br />MICROSOFT MAKES NO WARRANTIES, EXPRESS OR IMPLIED, IN THIS DOCUMENT.</div>");
        footer.append("<div id='print-copy-img'></div>");
        
    }
    /**
     * Generate email content that will be use when Email is clicked
     */
    ,genEmail: function(){
        var me = this;
        var body = "";
        body += encodeURIComponent("Window Server 2012 Volume Licensing Buyer's Guide");
        body += "%0D%0A";
        body += encodeURIComponent("Return to Buyer's Guide: http://www.microsoft.com/licensing/about-licensing/WindowsServer2012.aspx");
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("QUESTION:") + "%0D%0A";
        body += encodeURIComponent(me.topGuide.Text.replaceAll("<br />", "\n"));
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("ANSWER:") + "%0D%0A";
        body += encodeURIComponent(me.topGuide.children[0].Text.replaceAll("<br/>", "\n").replaceAll("<a href=\"", "(").replaceAll("\" ", "").replaceAll("target='_new'>", ") ").replaceAll("target='new'>", ") ").replaceAll("\">", ") ").replaceAll("</a>", ""));
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("If you need more information, please contact Customer Service for further assistance.") + "%0D%0A";
        body += encodeURIComponent("../how-to-buy/how-to-buy.html");

        return "mailto:" + "?subject=" + encodeURIComponent("Answer from Window Server 2012 Buyer's Guide") + "&body=" + body;
    }
    /**
     * get breadcrumb data using for Print and Email function
     */
    ,getbreadcrumb: function(data, separateChar){
        var me = this;
        var bc = "";
        if(!separateChar) separateChar = '>';

        if (data.Parent && data.Parent.Text) {
            bc = me.getbreadcrumb(data.Parent) +" "+ separateChar +" "+ data.Text;
        } else if (data.Text) {
            bc = data.Text + bc;
        }

        return bc;
    }

    /************** TRACKING *****************/
   
    /**
     * Keep Track for Back-Return event 
     */
    ,trackAction: function(data, action, result){
        var me = this;
        var breadcrumb = me.getbreadcrumb(data, 'http://www.microsoft.com/');
        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', action, 'DCSext.Choice', result);
    }
    /**
     * Track Yes/No link in Answer section
     */
    ,trackVote: function (data, answer) {
        var me = this;
        var breadcrumb = me.getbreadcrumb(data, 'http://www.microsoft.com/');
        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', 'Information%20Useful', 'DCSext.Choice', answer);
    }
    /**
     * As function Name, tracking all external link
     */
    ,trackExternal: function (domain, url, desc) {
        desc = desc.replaceAll(" ", "%20");
        dcsMultiTrack('DCS.dcssip', domain, 'DCS.dcsuri', url, 'WT.ti', desc);
    }
    /**
     * Track Nav Items Click
     */
    ,track: function (data, desc) {
        var me = this;
        var breadcrumb = me.getbreadcrumb(data, 'http://www.microsoft.com/');
        desc = desc.replaceAll(" ", "%20");
        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', desc);
    }
};

/* UTILS FUNCTION */
String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function (c) { return "\\" + c; }), "g" + (ignore ? "i" : "")), str2);
};
