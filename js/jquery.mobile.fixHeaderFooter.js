/*
* "fixHeaderFooter" plugin - on-demand positioning for headers,footers
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
