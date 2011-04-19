=== Faded Borders for Images ===
Contributors: quinnthehuskey
Tags: border, images, gradient, fade, faded
Requires at least: 3.1.1
Tested up to: 3.1.1
Stable tag: 1.0.1

This plugin lets you place a faded border around any image file.

== Description ==

Some web designers like to fade the edges of their images (or select images) in order to provide a softer 
contrast between the edges of their image and the background of their website. Doing this typically requires the use
of some sort of photo editing software. Moderately skilled web developers may be able to use CSS and HTML code to 
generate a similar effect dynamically. This plugin, however, simplifies the process to merely applying an extra CSS class 
to an image after it has been uploaded.

== Installation ==
1. Upload `faded-borders-for-images` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Insert an image into your page or blog post
4. After inserting the image, click on it, and click the icon that appears in the left-hand corner of the image
5. Click the 'Advanced Settings' tab on the window that opens
6. In the CSS Class field, enter the word 'gradient'
7. Click 'Update'
8. Publish your post

== Frequently Asked Questions ==

= How do I fade the borders of my image? =

You have to apply the CSS class "gradient" to the image. To do this, insert the image into your post or page. After inserting it, 
click on it, and click the icon that appears in the corner. A window will open allowing you to edit information about the image. 
Click the "Advanced Settings" tab, and add the word "gradient" to the CSS Class field. Click "Update", and then publish your postpage. 
That's it!

= Can I customize the color of the faded border? =

Yes. In your Wordpress Admin Panel, go to Settings, and click the Faded Borders on Images link on the Settings sub-menu. Using the admin screen that appears, 
enter the color you would like to use when fading the edges of your images, and click "Save".

= How do I fade the edges of images that are part of my Wordpress theme (i.e. not in a post or page)? =

Using CSS or the raw code of your theme, apply the class "gradient" to your images. Be sure you have permission before you edit 
your Wordpress theme, if your theme is not publicly licensed.

== Screenshots ==

This section is empty.

== Changelog ==
Fixed a glitch in the folder reference.

= 1.0.1 =
*Fixed a glitch in the plugin folder

= 1.0 =
* 1.0 is the very first version of the 

== Upgrade Notice ==

There are no upgrades to record at this time.

== Credits ==
Special thanks to Ben Nadel for his tutorial on overlaying gradients on images with jQuery. 
His tutorial inspired the creation of this plugin. [See the full tutorial]: http://www.bennadel.com/blog/1014-Creating-Transparent-Gradients-With-jQuery.htm