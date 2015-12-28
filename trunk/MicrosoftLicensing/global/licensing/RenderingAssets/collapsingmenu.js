(function($) {
	document.write("<style type='text/css'>.accordion-panel ul {display:none;}</style>");

	var collapsingMenu = function() {
		this.container = null;
		this.menuHeaderLinks = null;
		this.menuLists = null;
	};

	collapsingMenu.prototype.initialize = function() {
		var self = this;

		self.container = $("#subNavigation");
		self.menuHeaderLinks = $(".accordion-panel", this.container).children("h5").children("a");
		self.menuLists = $("ul", this.container);

		self.createBreadcrumb();

		self.menuHeaderLinks.click(function(e) {
			e.preventDefault();
			self.clickHandler(e, this);
		});
	};

	collapsingMenu.prototype.clickHandler = function(e, el) {
		var self = this;
		$(el).closest(".accordion-panel").toggleClass("expanded").find("ul").animate({ height: "toggle" });
	};

	collapsingMenu.prototype.createBreadcrumb = function() {
		var self = this;
		if (window.location.pathname) {
			var loc = window.location.pathname;
			self.menuLists.children("li").children("a[href='" + loc + "']").addClass("disabled")
				.closest(".accordion-panel").addClass("expanded").children("ul").show();
		}
	};

	/////////////////////////////////////////////////////////
	window.collapsingMenu = new collapsingMenu();

	$(document).ready(function() {
		// Initialize quote randomizer
		window.collapsingMenu.initialize();
	});
})(jQuery);