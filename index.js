var cheerio = require( "cheerio" )


var wrapImageTags = function(page){

    var $ = cheerio.load(page.content);

    // Loop through each image found in the page content
    $('img').each(function(){

        // Build the wrapper
        var imageWrapper = $('<div>').addClass('image-wrapper');

        // Get the image object
        var img = $(this);

        // Rebuild the image
        if (img.attr("alt") === null) {
            var $image = $('<img>')
                        .attr('src', img.attr('src'))
                        .attr('alt', img.attr('alt'));
        //data attribute doesn't exist
        }else{
            var $image = $('<img>')
                        .attr('src', img.attr('src'));
        //data attribute exists
        }

        // Append the original image
        imageWrapper.append($image);
        
        // Add the image with its wrapper
        $(this).before(imageWrapper);
        
        // Remove the image
        $(this).remove();
    });

    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wrapImageTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
