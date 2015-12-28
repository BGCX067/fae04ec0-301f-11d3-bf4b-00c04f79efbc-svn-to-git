jQuery(document).ready(function() {
	// Initialize quote randomizer
	quoteRandomizer.init();
});

var quoteRandomizer = {
	init: function() {
		//create array of li elements
		var listItems = [];
		jQuery("#quote-randomizer ul li").each(function(i) { listItems.push(this); $(this).css({ opacity: 0 }); });

		//generate random number and select a random link
		var randInt = Math.floor(Math.random() * listItems.length);

		//randomize all li elements and re-insert them into the page
		var list = jQuery("#quote-randomizer ul").html("");
		for (var i = listItems.length; i > 0; i--) {
			var randInt = Math.floor(Math.random() * listItems.length);
			jQuery(list).append(listItems[randInt]);
			listItems.splice(randInt, 1);
		}
		jQuery("#quote-randomizer ul li:eq(0)").addClass("show").css({ opacity: 1 });
		setInterval(function() { quoteRandomizer.rotate(); }, 10000);
	},
	rotate: function() {
		var currentQuote = jQuery("#quote-randomizer ul li.show");
		var nextQuote = (currentQuote.next().length) ? currentQuote.next() : jQuery("#quote-randomizer ul li:eq(0)");
		currentQuote.fadeOut(1000, function() {
			$(this).removeClass("show");
			nextQuote.css({ opacity: 0 }).addClass("show").fadeTo(1000, 1);
		});
	}
};