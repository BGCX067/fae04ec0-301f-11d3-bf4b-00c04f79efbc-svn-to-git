document.write("<style type='text/css'> #tab_1, #tab_2, #tab_3, #tab_4, #tab_5, #tab_6, #tab_7, #tab_8, #tab_9, #tab_10 { display:none; } </style>");

var toggle_ids = new Array();
var tab_link_ids = new Array();
var number_of_tabs;

function prepareTabs() {
    if (!document.getElementById) return;
    if (!document.getElementsByTagName) return;

    var tab_nav = document.getElementById("tab-nav");
    if (tab_nav) {
        var tab_links = tab_nav.getElementsByTagName("li");
        number_of_tabs = tab_links.length;
        if (tab_links) {
            for (var i = 0; i < tab_links.length; i++) {
                var tab_link = tab_links[i].getElementsByTagName("a")[0];
                tab_link_ids.push(tab_links[i].id);
                toggle_ids.push("tab_" + [i + 1]);
                tab_link.onclick = function() {
                	window.location = this.href.replace("#tab_", "#tab=");
                	// reset/hide all tabs, then show the selected tab
                	var toggle_id = this.href;
                	toggle_id = toggle_id.split("#")[1];
                	var number = toggle_id.split("_")[1];

                	showTab(number);
                	return false;
                }
            }
        }
    } else {
        return false;
    }
}

function prepareDeepLink() {
    var url = String(window.location);
    var urlparts = url.split('#');
    if(urlparts[1]){
    var id = urlparts[1];
    	var number = id.split("=");
    	if (number[0] == "tab") {
    		number = number[1];
    		showTab(number);
    	} else {
    		number = id.split("_");
    		window.location = window.location.toString().replace("#tab_", "#tab=");
    		if (number[0] == "tab") {
    			number = number[1];
    			showTab(number);
    		}
    	}
    } else {
		urlparts = url.split('?');
		if(urlparts[1]){
			id = urlparts[1];
			if (id) {
				var number = id.split("=");
				if (number[0] == "tab") {
					number = number[1];
					showTab(number);
				}
			}
		}
    }
}

addLoadEvent(prepareTabs);
addLoadEvent(prepareDeepLink);