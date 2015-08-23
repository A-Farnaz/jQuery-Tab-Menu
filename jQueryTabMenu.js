
<script>
$(document).ready(function() {
    $(".tab-content , .tab-headers").hide();
    $("ul.tab-links li:first").addClass("active").show();
    $(".tab-content:first, .tab-headers:first").show();
	
    $("ul.tab-links li").click(function() {
        $("ul.tab-links li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content, .tab-headers").hide();
        var activeTab = $(this).find("a").attr("href");
		var activeHeaders = $(this).find("a").attr("id");
		$(activeTab).fadeIn();
		$(activeHeaders).fadeIn();		
		return false;
		});

});

</script>
