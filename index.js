var cheerio = require( "cheerio" );

var wrapImageTags = function(config, page){

    var $ = cheerio.load(page.content);

    // Loop through each image found in the page content
    $('img').each(function(){

        // skip the ignored classes
        if (config['image-wrapper'] &&
            config['image-wrapper']['ignore-classes']) {
            var ignores = config['image-wrapper']['ignore-classes'];
            for (var i = 0, len = ignores.length; i < ignores.length; i++) {
                if ($(this).attr('class') == ignores[i])
                    return;
            }
        }

        // Build the wrapper
        var imageWrapper = $('<div>').addClass('image-wrapper');

        // Get the image object
        var img = $(this);

        // Rebuild the image
        var $image = $('<img>')
                        .attr('src', img.attr('src'))
                        .attr('alt', img.attr('alt'));

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
            return wrapImageTags(this.config.get('pluginsConfig'), page);
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
