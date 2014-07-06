$(document).ready(function(){

	$.get("somePHP.php", function(userGroupWithAssociatedTests){

		var userGroupAndTestsAsJSON = jQuery.parseJSON(userGroupWithAssociatedTests);

		$.each(userGroupAndTestsAsJSON, function(userGroup, testsForUserGroup){

			// A unique ID which will link a div to a tab so content will be shown when a tab is clicked 
			var idToLinkTabToContent = "idFor" + userGroup.replace(/\s/g, ''); //Remove the spaces

			// Append a new tab to nav-Tabs
			$(".nav-Tabs").append("<li><a href=#"+idToLinkTabToContent+" role=\"tab\" data-toggle=\"tab\">"+userGroup+" <span class=\"badge\">"+testsForUserGroup.length+"</span></a></li>");

			// Link an empty content div to the tab. We will generate panels into here
			$(".tab-content").append("<div class=\"tab-pane fade in\" id="+idToLinkTabToContent+"></div>");

			$.each(testsForUserGroup, function(key, value){

				$("#"+idToLinkTabToContent).append("Name: " + value.TestName + " | Description: " + value.TestDescription + "<br>");
			});

		});

		// Created tabs but none are selected, so select the first tab
		$('.nav-Tabs a:first').tab('show');

	});

});