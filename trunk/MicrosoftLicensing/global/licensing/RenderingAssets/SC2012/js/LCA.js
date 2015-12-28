// adding print plugging
(function ($) {
    $.fn.print = function (settings) {

        return this.each(function () {

            printPage();

            function getIframe(url) {
                return $('<iframe id="printPage"/>').attr({ "src": url,
                    "style": "zomm:100% !important;position:absolute;top:0px; left:0px;width:0px; height:0px;border:0px;overfow:auto !important; z-index:-1"
                });
            };

            function printPage() {

                // clear page frame
                $("body").find('#printPage').remove();
                $("body").append(getIframe(settings.url));
                $('#printPage').bind("load", function () {

                    // opera workaround.
                    if (navigator.userAgent.indexOf("Opera") != -1) {
                        var win = window.open(frames[0].location);
                        win.opener.focus();
                        win.print();
                        win.close();
                        win = null;
                    } else {

                        if ($.browser.msie) {
                            // IE workaround to maintain scale factor in printing.
                            var iframe = $('#printPage')[0];
                            iframe.contentWindow.document.execCommand('print', false, null);
                        } else {
                            // index used to workaround FF. 
                            if (frames.length > 0) {
                                frames[0].focus();
                                frames[0].print();
                            }
                        }
                    }

                })

            }

        });

    }
})(jQuery);


if (typeof (LCA) == "undefined") LCA = {};
LCA.Information = {};
LCA.Util = {};
LCA.topGuide = {};
LCA.Logo = {};
LCA.Track = {};

String.prototype.replaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, function (c) { return "\\" + c; }), "g" + (ignore ? "i" : "")), str2);
};

LCA.Logo.Click = function () {
    LCA.Guide.restart();
}

LCA.Util.Email = function () {



    //track
    LCA.Track.clickTrackAction(LCA.topGuide, "Email", "Sent");
}

LCA.Util.Print = function () {
    $(function () {
        var values = encodeURIComponent('question=' + LCA.topGuide.Text + '&answer=' + LCA.topGuide.Answer.Text + '&breadcrumb=' + $("span.crumb").text());
        $('#util-print').print({ url: '/global/licensing/RenderingAssets/SC2012/lca-answer.html?' + values });
        $("div#LCA-print").remove();
    });

    LCA.Track.clickTrackAction(LCA.topGuide, "Print", "");
}

LCA.Information.Yes = function () {
    confirm("Thanks for responding. Your feedback helps us improve the site.");

    LCA.Track.clickTrackVote(LCA.topGuide, "Yes");
}

LCA.Information.No = function () {
    window.open('../how-to-buy/how-to-buy.html');

    LCA.Track.clickTrackVote(LCA.topGuide, "No");
}

LCA.Information.CustomerService = function () {
    window.open('../how-to-buy/how-to-buy.html');

    LCA.Track.clickTrackExternal("www.microsoft.com", "/licensing/contact-us.aspx", "Customer Service");
}

LCA.Guide = function (selector, entries) {
    var _this = this;
    var _entries;
    var _container;
    var _history = [];
    var _current;

    new function () {
        $(window).unload(function () { dispose(); });
        $(function () { init(); });
    };

    function dispose() {
        _this = null;
    };

    function init() {
        _container = $(selector);
        _container.addClass("LCA-guide");
        _container.append("<div id='LCA-logo' />");
        _container.find("div#LCA-logo").click(LCA.Logo.Click);

        _entries = { Entries: entries, toString: function () { return "BuyersGuide.Entries"; } };

        load(_entries, true);
        buildInstructions();

        updateText("<b>How can we help you?</b>", "Choose One");

        _container.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }

    function clear() {
        _container.find("#navigation").remove();
        _container.find("#answer").remove();
    }

    LCA.Guide.restart = function restart() {
        _current = null;

        _container.find("div#instructions a#restart, div#instructions a#back").fadeOut();

        _container.find("div#util").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
        _container.find("#answer").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(_entries) } });
        _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(_entries) } });
        _container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { updateText("<b>How can we help you?</b>", "Choose One") } });

        LCA.Track.clickTrackAction("", "Restart", "Completed");
    }

    function back() {
        var data = _current.Parent;

        if (data.toString() != "BuyersGuide.Entries") {
            _container.find("div#util").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
            _container.find("#answer").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(data) } });
            _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(data) } });
            _container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: updateText });

            LCA.Track.clickTrackAction("", "Back", "");

        } else {
            LCA.Guide.restart();
        }
    }

    function load(data, history) {
        clear();

        var div = $("<div id='navigation' class='buttons' />");
        var list = $("<ul />");
        div.append(list);
        _container.append(div);

        if (data.TreeNote) updateText(data.TreeNote, "");

        _current = data;

        var items;
        switch (data.toString()) {
            case "BuyersGuide.Entries":
                items = data.Entries;
                break;

            case "BuyersGuide.Entry":
                items = data.Categories;
                break;

            case "BuyersGuide.Category":
                items = data.Categories ? data.Categories : data.Questions;
                break;

            case "BuyersGuide.Question":
                items = data.Questions;
                break;
            case "BuyersGuide.Answer":
                break;
        }

        for (var i = 0; i < items.length; i++) {
            var o = items[i];
            if (history) o.Parent = data;
            var btn = $("<li><span><a>" + o.Text + "</a></span></li>");
            list.append(btn);

            var a = btn.find("a");
            a.css({ left: 15 + (btn.outerWidth() - 30) / 2 - a.outerWidth() / 2, top: btn.outerHeight() / 2 - a.outerHeight() / 2 });

            btn.data("d", o);
            btn.click(click);
        }


        div.css({ top: _container.outerHeight() / 2 - div.outerHeight() / 2 });
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });

    }

    function updateText(title, caption) {
        _container.find("div#instr-title").html(title);
        _container.find("div#instr-step").html(caption);
        _container.find("div#instr-step").show();
        if (caption == "") _container.find("div#instr-step").hide();

        _container.find("div#instructions").animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }

    function buildInstructions() {
        var div = $("<div id='instructions'/>");
        _container.append(div);

        div.append("<div id='instr-title'>How can we help you?</div>");
        div.append("<div id='instr-step'>Choose One</div>");
        div.append("<a id='back'></a>");
        div.append("<a id='restart'></a>");

        div.find("a#restart").click(LCA.Guide.restart);
        div.find("a#back").click(back);

        _container.find("div#instructions a#restart, div#instructions a#back").hide();

        _container.find("div#instructions").animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }

    function click() {
        var data = $(this).data("d");

        switch (data.toString()) {
            case "BuyersGuide.Entries":
                break;

            case "BuyersGuide.Entry":
                _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () {
                    _container.find("div#instructions a#restart, div#instructions a#back").fadeIn();
                    load(data, true);
                }
                });
                break;

            case "BuyersGuide.Category":
                _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(data, true) } });
                break;

            case "BuyersGuide.Question":
                if (data.Questions) {
                    _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { load(data, true) } });
                } else {
                    _current = data.Answer;
                    data.Answer.Parent = data.Parent;
                    LCA.topGuide = data;

                    _container.find("#navigation").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: function () { loadContent(data.Answer, true) } });
                }

                break;

            case "BuyersGuide.Answer":

                break;
        }

        _container.find("div#instructions").animate({ opacity: 0 }, { queue: false, duration: 1000, easing: 'easeOutCirc', complete: updateText });


        LCA.Track.clickTrack(data, "Microsoft Volume Licensing - System Center 2012");
    }

    function buildUtil() {
        _container.find("#util").remove();

        var div = $("<div id='util'/>");
        var print = $("<a id='util-print' />");
        var email = $("<a id='util-email' />");
        div.append(print);
        div.append(email);

        print.click(function () {
            //   buildPrint(LCA.topGuide);
            LCA.Util.Print();
        });

        email.attr("href", generateEmail());

        email.click(LCA.Util.Email);

        _container.append(div);
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });
    }

    function generateEmail() {

        var body = "";

        body += encodeURIComponent("System Center 2012 Volume Licensing Buyer's Guide");
        body += "%0D%0A";
        body += encodeURIComponent("Return to Buyer's Guide:http://www.microsoft.com/licensing/about-licensing/SystemCenter2012.aspx");
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("QUESTION:") + "%0D%0A";
        body += encodeURIComponent(LCA.topGuide.Text.replaceAll("<br />", "%0D%0A"));
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("ANSWER:") + "%0D%0A";
        body += encodeURIComponent(LCA.topGuide.Answer.Text.replaceAll("<br />", "%0D%0A").replaceAll("<a href='", "(").replaceAll("' ", "").replaceAll("target='_new'>", ") ").replaceAll("target='new'>", ") ").replaceAll("</a>", ""));
        body += "%0D%0A";
        body += "%0D%0A";
        body += encodeURIComponent("If you need more information, please contact Customer Service for further assistance.") + "%0D%0A";
        body += encodeURIComponent("../how-to-buy/how-to-buy.html");


        return "mailto:" + "?subject=" + encodeURIComponent("Answer from System Center 2012 Buyer's Guide") + "&body=" + body;

    }

    function loadContent(data, history) {
        clear();

        updateText(data.TreeNote, "");

        var div = $("<div id='answer'/>");

        var help = $("<div id='help'><div id='help-text'>Was this information useful?   <a id='yes' href='#'>Yes</a> | <a id='no' href='#'>No</a><br />"
		+ "Didn't find what you were looking for? No Problem. "
		+ "<a id='customer-service' href='#'>Contact Customer Service</a> for further assistance.</div></div>");

        div.append(help);

        var answ = $("<div id='copy'><div id='copy-text'>" + data.Text + "</div></div>");
        div.append(answ);

        help.find("a#yes").click(LCA.Information.Yes);
        help.find("a#no").click(LCA.Information.No);
        help.find("a#customer-service").click(LCA.Information.CustomerService);

        _container.append(div);

        var h = answ.outerHeight();
        help.css({ top: h });

        div.css({ top: _container.outerHeight() / 2 - (div.outerHeight() + help.find("#help-text").outerHeight()) / 2 });
        div.animate({ opacity: 1 }, { queue: false, duration: 1000, easing: 'easeOutCirc' });

        buildUtil();
    }

    function buildPrint(data) {
        $("div#LCA-print").remove();

        var print = $("<div id='LCA-print' />").appendTo(_container);

        print.append("<img src='images/print-logo.html' />");

        //data.Parent
        var breadcrumb = buildCrumb(data);

        print.append("<div id='breadcrumb'>Source: <a href='SystemCenter2012.html'>http://www.microsoft.com/licensing/about-licensing/SystemCenter2012.aspx</a><br /><span class='crumb'>" + breadcrumb + "</span></div>");

        var dl = $("<dl />").appendTo(print);

        dl.append("<dt>Question:</dt>");
        dl.append("<dd>" + data.Text + "</dd>");

        dl.append("<dt>Answer:</dt>");
        dl.append("<dd>" + data.Answer.Text + "</dd>");

        print.append("<div id='print-help'>If you need more information, please contact Customer Service for further assistance.<br /><a href='../how-to-buy/how-to-buy.html'>http://www.microsoft.com/licensing/contact-us.aspx</a></div>");
        var footer = $("<div id='print-footer'></div>").appendTo(print);
        footer.append("<div id='print-copy'>&copy; Microsoft Corporation. All rights reserved. This document is for informational purposes only.<br />MICROSOFT MAKES NO WARRANTIES, EXPRESS OR IMPLIED, IN THIS DOCUMENT.</div>");
        footer.append("<div id='print-copy-img'><img src='images/print-footer.html' /></div>");
    }

    function buildCrumb(data) {
        var bc = "";

        if (data.Parent && data.Parent.Text) {
            bc = buildCrumb(data.Parent) + " > " + data.Text;
        } else if (data.Text) {
            bc = data.Text + bc;
        }

        return bc;
    }

    function buildWebCrumb(data) {
        var bc = "";

        if (data.Parent && data.Parent.Text) {
            bc = buildCrumb(data.Parent) + " / " + data.Text;
        } else if (data.Text) {
            bc = data.Text + bc;
        }

        return bc;
    }

    LCA.Track.clickTrack = function (data, desc) {

        var breadcrumb = buildWebCrumb(data);
        desc = desc.replaceAll(" ", "%20");

        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', desc);
    }

    LCA.Track.clickTrackExternal = function (domain, url, desc) {

        desc = desc.replaceAll(" ", "%20");

        dcsMultiTrack('DCS.dcssip', domain, 'DCS.dcsuri', url, 'WT.ti', desc);
    }

    LCA.Track.clickTrackVote = function (data, answer) {

        var breadcrumb = buildWebCrumb(data);

        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', 'Information%20Useful', 'DCSext.Choice', answer);

    }

    LCA.Track.clickTrackAction = function (data, action, result) {

        var breadcrumb = buildWebCrumb(data);

        dcsMultiTrack('DCS.dcsuri', breadcrumb, 'WT.ti', action, 'DCSext.Choice', result);

    }

}

