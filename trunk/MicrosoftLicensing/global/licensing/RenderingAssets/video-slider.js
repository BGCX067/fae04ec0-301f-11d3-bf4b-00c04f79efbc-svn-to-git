$(document).ready(function () 
{
   $("#right-arrow").click(function (event) {
       event.preventDefault();
   $("#video-list").animate({ marginLeft: "-580px" }, "slow");
       $("#video-count").html('<div><p>4-5 of 5</p></div>');
   });
   $("#left-arrow").click(function (event) {
       event.preventDefault();
   $("#video-list").animate({ marginLeft: "0px" }, "slow");
       $("#video-count").html('<div><p>1-3 of 5</p></div>');        
   });
});
