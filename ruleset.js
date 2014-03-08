/*
 * Ruleset.js- jQuery Plugin
 * jQuery Plug-in to help in retrieving data
 *
 * Examples and documentation at: []
 *
 * Developer: Ray Holland raymondaholland@gmail.com
 *
 * Version: 0.0.1 (03/07/2014)
 * Requires: jQuery v?
 *
 * WTFPL License. (Do What the F You Want to Public License)
 */

/**
 * Table of Contents:
 *     1. Reserved Values
 *     2. Private Methods
 *     3. Public Methods
 */

/**
 *  ADVISORY: the flag "ADVISORY" is used in the code to note possible future implementations/changes
 */

(function( $ ){
    /* 1. Reserved Values 
     *      DO NOT INCLUDE THESE VALUES IN YOUR OPTIONS OBJECT AS A CATEGORY VALUE
     */
    var reserved_values = ["matches", "callback", "datalist"];

    //ADVISORY: make this change by data type (number/string/geo/other)
    var default_matches = ["contains", "does not contain", "is", "is not", "begins with", "ends with"];

    //ADVISORY: yet to be implemented based on maybe? http://stackoverflow.com/a/14062431/744228
    var $basic_template = $('<div class="ruleset"><select class="ruleset-category"></select><select class="ruleset-match"></select><input class="ruleset-input" /></div>');

    /* 2. Private Methods */

    /* 3. Public Methods */
    var methods = {
        /* Initialize a new Ruleset */
        init : function(options) {
            //create structure from dependency tree object
            if(typeof options === 'object') {
                $.each(options, function(index, value){
                    if(reserved_values.indexOf(index) !== -1) { //reserved value

                    }
                    else { //category
                        $basic_template.find(".ruleset-category").append("<option>"+index+"</option>");
                    }
                });
                this.append($basic_template);
            }
            //element already contains the dependency tree
            else {

            }
        },
        /* Serialize the logical output from selections to object */
        serialize : function( ) {   },
        duplicate : function( ) {   } //do I need this?
    };

    $.fn.ruleset = function(method_or_options) {
        if ( methods[method_or_options] ) {
            return methods[ method_or_options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method_or_options === "object" || ! method_or_options ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( "Method " +  method_or_options + " does not exist on jQuery.ruleset" );
        }
    };
})( jQuery );
