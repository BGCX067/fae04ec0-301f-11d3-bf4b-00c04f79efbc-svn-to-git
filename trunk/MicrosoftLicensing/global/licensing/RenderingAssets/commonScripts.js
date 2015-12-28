//headers remove <strong> tags (uses jquery)
function removeStrongTags(container){
    /*headerStrongs = container.find("h1 strong, h2 strong, h3 strong, h4 strong").each(function (i) {
        jQuery(this).replaceWith(jQuery(this).html());
    });*/
}

jQuery(document).ready(function () {
    if (window.location.href.indexOf("/software_assurance") != -1) {
        expandAndPaintCurrent();
    }
	//targetBlankify("div#content, div#menuBorder");
	//changeHeaderImage();
	//toggleFirstImageTab();
});

//Accordions: JQuery paint and expand selected node
// Paints the page you're on
function expandAndPaintCurrent() {
    var currentPage = window.location.href.substring(window.location.href.lastIndexOf("http://www.microsoft.com/") + 1).toLowerCase();
    if (currentPage.indexOf("#") != -1) {
        currentPage = currentPage.substring(0, currentPage.lastIndexOf("#")-1);
    }
    jQuery("DIV.faq-answer a").each(function (i) {
        var thisLink = jQuery(this);
        if (thisLink.attr('href').substring(thisLink.attr('href').lastIndexOf("http://www.microsoft.com/") + 1).toLowerCase() == currentPage) {
            //found a link to the current page
            thisLink.css('color', '#F58220');
            //expand the father:
            thisLink.parents('.faq-answer').addClass('show');
            thisLink.parents('.faq').find('.faq-question h5 a').addClass('expanded');
        }
    });
}

//target-blankify the external links:
/*function targetBlankify(container){
	jQuery(container).find("a[href^='http://'], a[href^='https://']").each(function (i) {		
		jQuery(this).attr("target","_blank");
	};
}*/

/*//trigger first icon-tab  click
function toggleFirstImageTab(){
	jQuery("DIV.imgTabs DIV.Tab:first").addClass("TabSelected");
	jQuery("DIV.imgTabs DIV.Conts DIV.TabContent:first").css("display","block");
}*/

//change the header iamge and link:
function changeHeaderImage(container){
	var headerImgDiv = jQuery("DIV.lsHeader DIV.logoHeader");
	var sectionHomeLink = jQuery("DIV#menuBorder a.AspNet-Menu-Link:first");
	//set link
	headerImgDiv.find("a").attr("href", sectionHomeLink.attr("href"));
	//set image:
	var sectionImg = "";
	var url = window.location.href.toLowerCase();
	if (url.indexOf("http://www.microsoft.com/privatbrug/") != -1)
		sectionImg = "logoheader2.html";
	if (url.indexOf("http://www.microsoft.com/mindre_mellemstore_virksomheder/") != -1)
		sectionImg = "logoheader3.html";
	if (url.indexOf("http://www.microsoft.com/store_virksomheder/") != -1)
		sectionImg = "logoheader4.html";
		
	if (sectionImg != "")
		headerImgDiv.find("img").attr("src", "/licensing/PublishingImages/"+sectionImg);
}


 
 //IconTabbedContent

function toggle(tag) {
            for (var i=0; i < tag.parentNode.childNodes.length; i++) {
              if (tag.parentNode.childNodes[i].nodeName == "UL" || tag.parentNode.childNodes[i].nodeName == "P" || tag.parentNode.childNodes[i].nodeName == "IMG" || tag.parentNode.childNodes[i].nodeName == "A") {
                if (tag.parentNode.childNodes[i].style.display == "none") {tag.parentNode.childNodes[i].style.display = "block";}
                else {tag.parentNode.childNodes[i].style.display = "none";}
                
              }
            }
          }
          
          function expand(tag) {
            for (var i=0; i < tag.parentNode.childNodes.length; i++) {
              if (tag.parentNode.childNodes[i].nodeName == "UL" || tag.parentNode.childNodes[i].nodeName == "P" || tag.parentNode.childNodes[i].nodeName == "IMG" || tag.parentNode.childNodes[i].nodeName == "A") {
                tag.parentNode.childNodes[i].style.display = "block";
              }
            }
          }
          
          function colapse(tag) {
            for (var i=0; i < tag.parentNode.childNodes.length; i++) {
              if (tag.parentNode.childNodes[i].nodeName == "UL" || tag.parentNode.childNodes[i].nodeName == "P" || tag.parentNode.childNodes[i].nodeName == "IMG" || tag.parentNode.childNodes[i].nodeName == "A") {
                tag.parentNode.childNodes[i].style.display = "none";
              }
            }
          }
          
          function initSelect() {
            var elems = document.getElementsByTagName("h4");
            for (var i=0; i<elems.length; i++) {
              if (!elems[i].onclick) continue;
              else {
                elems[i].style.cursor = "Pointer";
                toggle(elems[i]);
              }
            }
          }
          
          function expandAll(tag) {
            var elems = document.getElementsByTagName("h4");
            
            for (var i=0; i<elems.length; i++) {
              if (elems[i].onclick) {
                if (tag.name == 'expanded') colapse(elems[i]);
                else expand(elems[i]);
              }
            }
            if (tag.name == 'expanded') tag.name = 'colapsed';
            else tag.name = 'expanded';
          }
          
          function addSEvent() {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
              window.onload = initSelect();
            }
            else {
              window.onload = function() {
                if (oldonload) { oldonload(); }
                initSelect();
              }
            }
          } 

		  
//Accordions
function addClass(elem, clas) {
                var classes = elem.className.split(" ");
                for (var i=0; i < classes.length; i++) {
                    if (classes[i] == clas) break;
                }
                classes.push(clas);
                elem.className = classes.join(" ");
              }
              
              function removeClass(elem, clas) {
                var classes = elem.className.split(" ");
                var newClass = new Array();
                for (var i=0; i < classes.length; i++) {
                    if (classes[i] == clas) continue;
                    newClass.push(classes[i]);
                }
                elem.className = newClass.join(" ");
              }
              
              function containClass(elem,clas) {
                if (elem.nodeType == 3) return false;
                var classes = elem.className.split(" ");
                var ret = false;
                for (var i=0; i < classes.length; i++) {
                  if (classes[i] == clas) {
                    ret = true;
                    break;
                  }
                }
                return ret;
              }
              
              function expandToggle(elem) {
                if (containClass(elem,"expanded")) colapseElem(elem);
                else expandElem(elem);
              }
              
              function findElemIn(elem, clas){
                var cont = false;
                for(var i=0; i<elem.childNodes.length; i++) {
                  if (containClass(elem.childNodes[i], clas)) {
                    cont = elem.childNodes[i];
                    break;
                  }
                }
                return cont;
              }
              
              function expandToggleFAQ(elem) {
                if (containClass(elem,"expanded")) colapseElemFAQ(elem);
                else expandElemFAQ(elem);
              }
              
              function expandElem(elem) {
                var topCont = elem.parentNode.parentNode.parentNode;
                var cont = findElemIn(topCont, "product-content-btm");
                var contS = findElemIn(cont, "product-content");
                addClass(elem, "expanded");
                addClass(cont, "open");
                addClass(contS, "show");
              }
              
              function colapseElem(elem) {
                var topCont = elem.parentNode.parentNode.parentNode;
                var cont = findElemIn(topCont, "product-content-btm");
                var contS = findElemIn(cont, "product-content");
                removeClass(elem, "expanded");
                removeClass(cont, "open");
                removeClass(contS, "show");
              }
              
              function expandElemFAQ(elem) {
                var topCont = elem.parentNode.parentNode.parentNode;
                var cont = findElemIn(topCont, "faq-answer");
                addClass(elem, "expanded");
                addClass(cont, "show");
              }
              
              function colapseElemFAQ(elem) {
                var topCont = elem.parentNode.parentNode.parentNode;
                var cont = findElemIn(topCont, "faq-answer");
                removeClass(elem, "expanded");
                removeClass(cont, "show");
              }
              
              function expandAllFAQ(elem) {
                var topCont = elem.parentNode.parentNode;
                var faq = false;
                var temp = false;
                var link = false;
                for(var i=0; i < topCont.childNodes.length; i++) {
                  if (topCont.childNodes[i].nodeType == 3) continue;
                  if (containClass(topCont.childNodes[i], 'faq')) {
                    faq = topCont.childNodes[i];
                    temp = findElemIn(faq, 'faq-question')
                    for(var j=0; j<temp.childNodes.length; j++) {
                      if (temp.childNodes[j].nodeType == 3) continue;
                      if (temp.childNodes[j].nodeName == 'H5') {
                        var link = findElemIn(temp.childNodes[j], 'expand-link');
                        break;
                      }
                    }
                    expandElemFAQ(link);
                  }
                }
                addClass(elem, 'expanded');
              }
              
              function colapseAllFAQ(elem) {
                var topCont = elem.parentNode.parentNode;
                var faq = false;
                var temp = false;
                var link = false;
                for(var i=0; i < topCont.childNodes.length; i++) {
                  if (topCont.childNodes[i].nodeType == 3) continue;
                  if (containClass(topCont.childNodes[i], 'faq')) {
                    faq = topCont.childNodes[i];
                    temp = findElemIn(faq, 'faq-question')
                    for(var j=0; j<temp.childNodes.length; j++) {
                      if (temp.childNodes[j].nodeType == 3) continue;
                      if (temp.childNodes[j].nodeName == 'H5') {
                        var link = findElemIn(temp.childNodes[j], 'expand-link');
                        break;
                      }
                    }
                    colapseElemFAQ(link);
                  }
                }
                removeClass(elem, 'expanded');
              }
              
              function expandAllTogle(elem) {
                if (containClass(elem, 'expanded')) colapseAllFAQ(elem);
                else expandAllFAQ(elem);
            }


