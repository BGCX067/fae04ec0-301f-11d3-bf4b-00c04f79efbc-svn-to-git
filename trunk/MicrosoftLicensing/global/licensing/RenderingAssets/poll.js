document.write("<style type='text/css'> #poll-popup { display:none; } </style>");
var poll_timer = null;
var poll_taken = false;
function preparePoll() {
    if (!document.getElementById) return;

    var poll_popup = document.getElementById("poll-popup");

    var yes_link = document.getElementById("poll-yes");
    var no_link = document.getElementById("poll-no");
    var close_link = document.getElementById("close-button");
    if (yes_link) {
        yes_link.onclick = function() {
            if (!poll_taken) {
                dcsMultiTrack('DCS.dcsuri', 'licensing/poll/button-yes.aspx', 'WT.ti', 'Button:%20Yes%20Link', 'wtNavigation', 'SurveyBox', 'WT.dl', '2');
                poll_taken = true;
                clearTimeout(poll_timer);
                showPollPopup(poll_popup);
                disableLinks();
            }
            return false;
        }
    }
    if (no_link) {
        no_link.onclick = function() {
            if (!poll_taken) {
                dcsMultiTrack('DCS.dcsuri', 'licensing/poll/button-no.aspx', 'WT.ti', 'Button:%20No%20Link', 'wtNavigation', 'SurveyBox', 'WT.dl', '2');
                poll_taken = true;
                clearTimeout(poll_timer);
                showPollPopup(poll_popup);
                disableLinks();
            }
            return false;
        }
    }
    if (close_link) {
        close_link.onclick = function() {
            clearTimeout(poll_timer);
            showPollPopup(poll_popup);
            return false;
        }
    }
    var email_link = document.getElementById("email-link");
    if (email_link) {
        var url = window.location;
        var title = encodeURIComponent(document.title);
        email_link.href = "mailto:?subject=" + title + "&body=" + url;
        email_link.onclick = function() {
            var tab_content = document.getElementById("tabbed_content");
            if (tab_content) {
                current_tab = getElementsByClass("show", tab_content, "div")[0].id;
                base_url = String(url).split("#")[0];
                mailto_url = base_url + "#" + current_tab;
                this.href = String(this.href).split("body=")[0] + "body=" + mailto_url;
            }
        }
    }
}

function showPollPopup(popup) {
    toggleClass(null, "show", popup);
    poll_timer = setTimeout(function() { popup.className = ""; }, 7000);
}

function disableLinks() {
    if (!document.getElementById) return;
    var yes_link = document.getElementById("poll-yes");
    var no_link = document.getElementById("poll-no");

    yes_link.setAttribute("disabled", "disabled");
    toggleClass(null, "disabled", yes_link);
    no_link.setAttribute("disabled", "disabled");
    toggleClass(null, "disabled", no_link);
}

addLoadEvent(preparePoll);