<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("#slideshow div img").each(function(i) {
		$(this).delay((i++) * 500).fadeIn(2000, function(){
		$("div#copy").delay(500).fadeIn(2000).each();
        });
  });
});
</script>
 

<style>

#slideshow {
	position:absolute;
    width: 800px;
    height: 276px;
	overflow:hidden;
}

#slideshow div img {
	position:absolute;
	overflow:hidden;
	display:none;
}

div#copy {
    font-family: arial;
    display: none;
    position: absolute;
    margin-top: 0px;
    top: 10%;
    right: 22%;
    text-align: center;
    z-index: 1;
    color: #fff;
    width: 35%;
 }

#text {
	    font-size: 14px;
    letter-spacing: 2px;
    display: block;
    text-align: center;
    line-height: 22px;
    padding-top: 5%;
    padding-bottom: 5%;
}

.cta1 {
	 text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;
    border: 3px solid;
    padding: 11px;
    margin-bottom: 3%;
}

.cta2 {
text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    letter-spacing: 2px;
    border: 3px solid;
    padding: 11px;
}

#copy a {
	color: #fff;
    text-decoration: none;
}

#copy a:hover {
	text-decoration:underline;
}

#wrapper {
	margin:0 auto;
	width:1000px;
}

</style>

<div id="wrapper">
    <div id="slideshow">   
    	<div><img id="img1" class="tab-headers" src="http://media.monsoon.co.uk/assets/images/accessorize/feature/2015/13082015/Colour-Chart_nails_01B_02.jpg" /></div>

    	<div><img id="img2" class="tab-headers" src="http://media.monsoon.co.uk/assets/images/accessorize/feature/2015/13082015/Colour-Chart_2B_02.jpg" /></div>

    	<div><img id="img3" class="tab-headers" src="http://media.monsoon.co.uk/assets/images/accessorize/feature/2015/13082015/Colour-Chart_eyes_01.jpg" /></div>

    	<div><img id="img4" class="tab-headers" src="http://media.monsoon.co.uk/assets/images/accessorize/feature/2015/13082015/Colour-Chart_lips_01.jpg" /></div>

        <div id="copy" class="box fade-in five">
        <span id="text">Introducing Jessica Simon's first collection for Monsoon, inspired by '70s prints and vintage silhouettes</span>
        
        <div class="cta1" ><a href="http://uk.monsoon.co.uk/uk/collections/jessica-simon">Shop the Collection &gt;</a></div>
        <div class="cta2"><a href="http://uk.monsoon.co.uk/uk/content/features/jessica-simon">Meet the Designer &gt;</a></div>
        
        </div>
       
     </div>
     </div>
