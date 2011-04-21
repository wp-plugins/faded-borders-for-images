<?php
/*
Plugin Name: Faded Borders for Images
Description: This plugin allows users to fade the edges of their images with a white gradient border.
Version: 1.0.2
Author: David Cox
License: GPL2


    Copyright 2011 David Cox  (email : quinnthehuskey@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/


function set_border_options() {
	add_option('border_color','FFFFFF','Border color');
}

function unset_border_options() {
	delete_option('border_color');
}

register_activation_hook(_FILE_,'set_border_options');
register_deactivation_hook(_FILE_,'unset_border_options');

function admin_border_options() {
	?><div class="wrap"><h2>Faded Borders on Images</h2>
	<p>Apply a faded border to the edges of images that have the CSS class "gradient". Use the form below to edit the color used to fade the edges.</p>
	<?php

	if ($_REQUEST['submit']) {
		update_border_options();
	}
	print_border_form();
	?></div><?php
}

function update_border_options() {
	$ok = false;

	if ($_REQUEST['border_color']) {
		if (is_null($_REQUEST['border_color'])) {
			update_option('border_color','FFFFFF');
			$ok = true;
		}
		else {
			update_option('border_color',$_REQUEST['border_color']);
			$ok = true;
		}
	}

	if ($ok) {
		?><div id="message" class="update fade">
		<p>Color updated.</p>
		</div><?php
	}
	else {
		?><div id="message" class="error fade">
		<p>Error. Color could not be updated.</p>
		</div><?php
	}
}


function print_border_form() {
	$default_border = get_option('border_color');
	?>
	<form method="post">
		<label for="border_color">Border Color (default is white): #
		<input type="text" name="border_color" value="<?php echo $default_border; ?>" />
		</label>
		<br />Example: "FFFFFF" (white) or "000000" (black)<br />
		<input type="submit" name="submit" value="Save Changes" />
	</form>
	<?php
}

function modify_menu() {
	add_options_page(
		'Faded Borders on Images',
		'Faded Borders on Images',
		'manage_options',
		_FILE_,
		'admin_border_options'
	);
}

function my_init() {
	if (!is_admin()) {

	$curr_border = get_option('border_color');

	?><div id="thedivthathasthecolor" style="display: none;" class="<?php print "$curr_border"; ?>"><?php print "$curr_border"; ?></div><?php
//If we wanted to, we could un-comment the following lines to register jQuery via Google instead of Wordpress.
//		wp_deregister_script('jquery');
//		wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js', false, '1.5.2');
		wp_enqueue_script('jquery');

		// load the .js file we need to adjust the tagged images.
		wp_enqueue_script('my_script', get_bloginfo('url') . '/wp-content/plugins/faded-borders-for-images/border.js', array('jquery'));
	}
}

if (!is_admin()) {
	add_action('init', 'my_init');
}
add_action('admin_menu','modify_menu');
?>