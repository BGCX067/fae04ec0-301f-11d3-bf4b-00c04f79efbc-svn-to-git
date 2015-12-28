function CreateAtlasImage (sourceURL)
{
	var atlasImage = new Image();
	atlasImage.src = sourceURL;
	
}


function addLoadEvent(func) {
    var oldonload = window.onload;

    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload(); func()
        }
    }
}

function prepareLinks() {
    if (!document.getElementsByTagName) return;

    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.href;
        
        // If link is external, open in new tab/window
        if (link.setAttribute) {
        	if (link.href.toLowerCase().indexOf('index.html') == -1) {
        		if (link.href.toLowerCase().indexOf('javascript:') == -1) {
        			if (link.href.toLowerCase().indexOf('http://view.atdmt.com/') == -1) {
        				link.setAttribute('target', '_blank');
        			}
        		}
            }
        }
        
		// If link is a tab link, switch the tab, but don't follow the link
        if (link.href.indexOf("#tab_") > 0) {
        	link.onclick = function() {
        		window.location = this.href.replace("#tab_", "#tab=");
        		if (this.href.split("#tab")[0] == document.location.toString().split("#tab=")[0]) {
        			var number = this.href.split("#tab_")[1];
        			showTab(number);
        		}
        		return false;
        	}
        }
    }
}

addLoadEvent(prepareLinks);

function preparePrint() {
    if (!document.getElementById) return;
    var print_link = document.getElementById("print-button");
    if (print_link) {
        print_link.onclick = function() {
            window.print();
            return false;
        }
    }
}

addLoadEvent(preparePrint);

function prepareEmail() {
    if (!document.getElementById) return;
    var email_link = document.getElementById("email-button");
    if (email_link) {
        email_link.onclick = function() {
            mail_str = "mailto:?subject=Check out " + document.title;
            mail_str += "&body=I thought you might be interested in these " + document.title;
            mail_str += ". You can view it at, " + location.href;
            this.href = mail_str;
        }
    }
}

addLoadEvent(prepareEmail);


document.write("<style type='text/css'> .expand-content, .nav-dropdown { display:none; } </style>");

function prepareExpandLinks() {
    if (!document.getElementById) return;
    var body = document.getElementById("body-btm-bkg");
    var expand_links = getElementsByClass("expand-link", body, "a");
    var expand_contents = getElementsByClass("expand-content", body, "div");
    if (expand_links) {
        for (var i = 0; i < expand_links.length; i++) {
        	var expand_link = expand_links[i];
            expand_link.onclick = function() {
                var relation = this.rel;
                var id = this.id;
                toggleClass(id, "expanded");
                toggleClass(relation, "show");
                return false;
            }
        }
    }
}

addLoadEvent(prepareExpandLinks);

function prepareAccordion() {
    if (!document.getElementById) return;
    var accordion = document.getElementById("accordion");
    if (accordion) {
        accordion_headers = getElementsByClass("accordion-header", accordion, "div");
        if (accordion_headers.length > 0) {
            for (var i = 0; i < accordion_headers.length; i++) {
                accordion_headers[i].onclick = function() {
                    return false;
                }
            }
        }
    }
}

addLoadEvent(prepareAccordion);

function openFirstResult() {
    if (!document.getElementById) return;
    var results = document.getElementById("results-container");
    var first_expand_content = document.getElementById("expand-content-0");
    if (first_expand_content) {
        first_expand_content = first_expand_content.innerHTML.split(' ').join('').replace("\n", "").replace("\r", "");
    }
    if (first_expand_content !== "") {
        if (results) {
            var expand_link = document.getElementById("expand-link-0");
            if (expand_link) {
                var relation = expand_link.rel;
                var link_id = expand_link.id;

                var expand_content = document.getElementById(relation);
                toggleClass(null, "expanded", expand_link);
                toggleClass(null, "show", expand_content);

                var expand_parent = expand_content.parentNode;
                toggleClass(null, "open", expand_parent);
            }
        }
    } else {
        if (results) {
            var expand_link = document.getElementById("expand-link-0");
            if (expand_link) {
                expand_link.style.display = "none";
            }
        }
    }
}

addLoadEvent(openFirstResult);

function expandLinkAddition() {
    if (!document.getElementById) return;
    var results = document.getElementById("results-container");
    if (results) {
        var expand_links = getElementsByClass("expand-link", results, "a");
        if (expand_links) {
            for (var i = 0; i < expand_links.length; i++) {
                var expand_link = expand_links[i];

                expand_link.onclick = function() {
                	var relation = this.rel;
                	var id = this.id;

                	var expand_content = document.getElementById(relation);
                	toggleClass(id, "expanded");
                	toggleClass(null, "show", expand_content);

                	var expand_parent = expand_content.parentNode;
                	toggleClass(null, "open", expand_parent);
                	return false;
                }
            }
        }
    }
}

addLoadEvent(expandLinkAddition);

function faqExpandAll() {
    if (!document.getElementById) return;
    var allExpanded = true;
    allExpanded = prepareDeepLinkFaq(allExpanded);
    var link = document.getElementById("faq-expand-all");
    if(link) {
        link.onclick = function() {
            this.innerHTML = (this.innerHTML == expandText) ? collapseText : expandText;

            allExpanded = toggleAllFaqs(allExpanded);
            return false;
        }
    }
}

addLoadEvent(faqExpandAll);

function prepareDeepLinkFaq(allExpanded) {
    var url = String(window.location);
    var urlparts = url.split('#');
    var id = urlparts[1];
    if (id) {
        var number = id.split("_");
        if (number[0] == "faq") {
            number = number[1];
            allExpanded = toggleAllFaqs(false);
            toggleClass("faq-question-" + number, "expanded");
            toggleClass("faq-answer-" + number, "show");

            // scroll to expanded faq
            var faqElement = document.getElementById("faq-question-" + number);
            if (faqElement) {
            	var posX = 0;
            	var posY = 0;
            	var topOffset = 15;

            	while (faqElement != null) {
            		posX += faqElement.offsetLeft;
            		posY += faqElement.offsetTop;
            		faqElement = faqElement.offsetParent;
            	}
            	window.scrollTo(posX, posY - topOffset);
            }
        }
    }
    return allExpanded;
}

function showTab(number) {
	resetClasses(toggle_ids, "show");
	toggleClass("tab_" + number, "show");

	var index = tab_link_ids.findIndex("tab-link-" + number);

	resetClasses(tab_link_ids, "active");
	resetClasses(tab_link_ids, "beforeActive");
	resetClasses(tab_link_ids, "afterActive");
	resetClasses(tab_link_ids, "firstActive");
	resetClasses(tab_link_ids, "lastActive");
	resetClasses(tab_link_ids, "middleActive");

	var new_tab = document.getElementById("tab-link-" + number);
	// extra classes to workaround ie6 class chaining bug
	if (index == 0) {
		toggleClass(null, "firstActive", new_tab);
	}
	if (index == number_of_tabs - 1) {
		toggleClass(null, "lastActive", new_tab);
	}
	if (0 < index && index < number_of_tabs - 1) {
		toggleClass(null, "middleActive", new_tab);
	}

	toggleClass("tab-link-" + number, "active");
	if (index > 0) {
		toggleClass(tab_link_ids[index - 1], "beforeActive");
	}
	if (index < (number_of_tabs - 1)) {
		toggleClass(tab_link_ids[index + 1], "afterActive");
	}
}

function toggleAllFaqs(allExpanded) {
    var faq_container = document.getElementById("faq-container");
    if (faq_container) {
        var faq_container = document.getElementById("faq-container");
        var expand_links = getElementsByClass("expand-link", faq_container, "a");
        var expand_contents = getElementsByClass("expand-content", faq_container, "div");
        for (var i = 0; i < expand_links.length; i++) {
            if (allExpanded) {
                expand_links[i].className = "expand-link expanded";
                expand_contents[i].className = "faq-answer expand-content show";
            } else {
                expand_links[i].className = "expand-link";
                expand_contents[i].className = "faq-answer expand-content";
            }
        }
    }
    allExpanded = (allExpanded) ? false : true;
    return allExpanded;
}

function resetClasses(element_collection, Class) {
    if (element_collection.length > 0) {
        for (var i = 0; i < element_collection.length; i++) {
        	var id = element_collection[i];
            var element = document.getElementById(id);
            if (element) {
                var currentClassName = element.className;
                if (currentClassName.match(Class) !== null) {
                    toggleClass(id, Class);
                }
            }
        }
    }
}

function toggleClass(element_id, Class, dom_element) {
	if (element_id) {
		var element = document.getElementById(element_id);
	}
    if (!element) {
        element = dom_element;
    }
    if (element) {
        var oldClassName = element.className;
        newClassName = (oldClassName.match(Class) == null) ? oldClassName + " " + Class : oldClassName.replace(Class, "");
        newClassName = newClassName.replace("  ", " ");
        element.className = newClassName;
        return;
    }
}

function getElementsByClass(searchClass, node, tag) {
    var classElements = new Array();
    if (node == null)
        node = document;
    if (tag == null)
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    for (i = 0, j = 0; i < elsLen; i++) {
        if (els[i].className.match(searchClass)) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
}

Array.prototype.findIndex = function(value) {
    var ctr = "";
    for (var i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
    return ctr;
};

Array.prototype.inArray = function(value)
{
    var i;
    for (i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return true;
        }
    }
    return false;
};

function newWinLink(linkID, URL, winHeight, winWidth) {
            var linkname = document.getElementById(linkID);
            var windowStr = "height=" + winHeight + ",width=" + winWidth + ",status=yes,toolbar=no,menubar=no,location=no";
            if (linkname)
                {
    		    linkname.onclick = function() {
    		    window.open(URL, null, windowStr);
    		    return false;
    		    }
    		}
    	}