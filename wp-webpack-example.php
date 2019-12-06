<?php
/**
 * Plugin Name: WordPress Webpack Example
 * Plugin URI:  https://developer.wordpress.org/plugins/the-basics/
 * Description: Simple WordPress plugin that uses Webpack.
 * Version:     1.0.0
 * Author:      WebDevStudios
 * Author URI:  https://www.webdevstudios.com
 * Text Domain: wds-wwe
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Enqueue frontend scripts.
 */
function frontend_scripts() {
  wp_enqueue_script(
    'lottery-wheel',
    plugins_url( 'src/front/components/lottery-lib.js', __FILE__ ),
    [ 'jquery' ],
    '12',
    true
    );
	wp_enqueue_script(
	'wds-wwe-frontend-js',
	plugins_url( 'assets/js/frontend.js', __FILE__ ),
	[ 'jquery' ],
  '11272018',
  true
  );
  wp_enqueue_style( 'style',  plugins_url("assets/css/main.css", __FILE__ ));
}
add_action( 'wp_enqueue_scripts', 'frontend_scripts' );

/**
 * Enqueue admin scripts.
 */
function admin_scripts() {
	wp_enqueue_script(
	'wds-wwe-admin-js',
	plugins_url( 'assets/js/admin.js', __FILE__ ),
	[ 'jquery' ],
	'11272018'
	);
}
add_action( 'admin_enqueue_scripts', 'admin_scripts' );


/* Form */

add_shortcode('lotterywheel', function () {
  $html = '<h2>Spin the wheel and get your discount!</h2><br/>
  <svg id="wheel"></svg>';
  return $html;
});

