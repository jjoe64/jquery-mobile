/*
* jQuery Mobile Framework : "fixHeaderFooter" plugin - on-demand positioning for headers,footers
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/

(function( $, undefined ) {

//auto self-init widgets
$( document ).bind( "pagecreate create", function( event ) {

	$( ":jqmData(position='fixed')", event.target ).each(function() {

		var $this = $( this );

		if ( $this.jqmData( "role" ) == 'header' ) {
			$(event.target).addClass('ui-page-has-fixed-header');
			$this.addClass( "ui-header-fixed" );
		} else if ( $this.jqmData( "role" ) == 'footer' ) {
			$(event.target).addClass('ui-page-has-fixed-footer');
			$this.addClass( "ui-footer-fixed" );
		}

	})
});

})( jQuery );
