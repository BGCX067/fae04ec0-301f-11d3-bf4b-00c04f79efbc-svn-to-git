// script for tooltips on volume licensing comparison tables

// initially hide all tooltips
//document.write('<style type="text/css">.tooltip{display:none;}</style>');

// global variables
var AllTriggers = new Array();

// onload function to prepare the image triggers of the tooltips
function prepareToolTips() {
    if (!document.getElementsByTagName) return;
    if (!document.getElementById) return;

    //assumes one table, assumes id = compare-table
    var table = document.getElementById("compare-table");

    if (table) {
        var triggers = new Array();
        var tooltips = new Array();

        // assumes that tooltips triggered by td elements
        var datacells = getElementsByClass("trigger", table, "TD");
        if (datacells) {
            for (var i = 0; i < datacells.length; i++) {
                datacell = datacells[i];
                var datacell_content = datacell.innerHTML;
                datacell.innerHTML = "";
                var div_wrapper = document.createElement("div");
                datacell.appendChild(div_wrapper);
                div_wrapper.innerHTML = datacell_content;

                if (datacell) {
                    datacell.style.width = "450px";

                    // pushes trigger cells in the tables to the triggers and AllTriggers arrays
                    var tooltip_paras = getElementsByClass("tooltip", datacell, "P");
                    if (tooltip_paras) {
                    
                        // assumes only one tooltip per cell
                        var tooltip = tooltip_paras[0];
                        
                        // changes display to block to calculate height
                        tooltip.style.display = "block";
                        tooltip.style.right = "-10px";
                        tooltip.style.position = "absolute";
                        tooltip.style.padding = "10px 10px 9px 10px";

                        // shows table tab to calculate height
                        var tab = table.parentNode;
                        var position = tab.className.indexOf("tab-layout ");
                        while (position == -1) {
                            tab = tab.parentNode;
                            position = tab.className.indexOf("tab-layout ");
                        }
                        
                        var tab_class = tab.className;
                        tab.className += " show";
                        var width = tooltip.offsetWidth;
                        if (width < 300) {
                            tooltip.style.width = [width + 20] + "px";
                        } else {
                            tooltip.style.width = "300px";
                        }
                        
                        var height = tooltip.offsetHeight;
                        tooltip.style.display = "none";
                        tab.className = tab_class;
                        tooltip.style.top = [-height - 9] + "px";
                        
                        var tooltip_content = tooltip.innerHTML;
                        //var info_arrow = "<span class='info-arrow'></span>";
                        tooltip.innerHTML = tooltip_content;
                        
                        if (tooltip) {
                            tooltips.push(tooltip);
                            AllTriggers.push(tooltip);
                        }
                    }
                    datacell.style.width = "auto";
                    triggers.push(datacell);
                    AllTriggers.push(datacell);
                }
            }
        }

        for (var i = 0; i < triggers.length; i++) {

            // trigger is the td that triggers the tooltip
            var trigger = triggers[i];
            var tooltip = tooltips[i];

            if (trigger) {
                // sets events on triggers
                trigger.onmouseover = function() {
                    toggleClass("", "highlight", this);
                    var index = triggers.findIndex(this);
                    var showTooltip = tooltips[index];
                    if (showTooltip) {
                        toggleClass("", "show", showTooltip);
                    }
                }
                trigger.onmouseout = function() {
                    toggleClass("", "highlight", this);
                    var index = triggers.findIndex(this);
                    var showTooltip = tooltips[index];
                    if (showTooltip) {
                        toggleClass("", "show", showTooltip);
                    }
                }
            }
            // ! TODO ! clean this up based on functionality specified by ux/design/ia
            if (tooltip) {
                tooltip.onmouseover = function() {
                }
                tooltip.onmouseout = function() {
                }
            }
        }
    }
}

// calls prepareToolTips on page load
addLoadEvent(prepareToolTips);