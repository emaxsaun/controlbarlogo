Controlbarlogo
==========

About this Plugin:
==========

This is a JW Player Plugin for people who have created custom skins with their logo in the controlbar, and want the logo to be clickable.

###[Demo](http://www.pluginsbyethan.com/github/controlbarlogo.html)

Configuration Options:
==========

This plugin supports additional configuration options.

controlbarlogo.link = http://www.jwplayer.com/

This is used to specify the link to go to when the logo is clicked on. The default is http://www.jwplayer.com.

controlbarlogo.target = http://www.jwplayer.com/

This is used to specify the link target to use when the logo is clicked on. The default is _top.

controlbarlogo.width = http://www.jwplayer.com/

This is used to specify the width of the logo area. The default is 50px.

controlbarlogo.height = http://www.jwplayer.com/

This is used to specify the height of the logo area. The default is 20px.

controlbarlogo.left = http://www.jwplayer.com/

This is used to specify the position of the logo area on the controlbar. The default is the width of the player.

controlbarlogo.border = http://www.jwplayer.com/

This is used to specify a border around the logo area. The default is no border. This option is only here for debugging purposes while you position the logo area while developing / implementing your skin. You should not have this enabled otherwise.

Implementing this Plugin:
==========

There is one file that you need to use, controlbarlogo.js. Upload this file to your server, it can go anywhere on the server. Now, inside of your JW Player embed code, make sure that your plugins call points to the full path to the .js file on your server (http://www.yoursite.com/controlbarlogo.js).

This plugin will only really make sense if you have already made a skin with a logo in the controlbar. It does not serve a purpose otherwise. 

While setting the plugin, up you should enable the border option to you can get the positioning correct. I have also included the sample skin used in the demo here. It is just a modified version of the default JW Player skin with a logo in the controlbar. The source as well as the base 64 encoded versions are available.

Example:
==========

<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot;&gt;
&lt;title&gt;Controlbarlogo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;http://p.jwpcdn.com/6/8/jwplayer.js&quot;&gt;&lt;/script&gt;
&lt;div id=&quot;player&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
jwplayer(&quot;player&quot;).setup({
	playlist: [{
	captions: [{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: 'http://www.longtailvideo.com/sites/default/files/jw6-captions.vtt',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: 'English'
&nbsp;&nbsp;&nbsp;&nbsp;},
	],
&nbsp;&nbsp;&nbsp;&nbsp;image: &quot;http://content.bitsontherun.com/thumbs/i8oQD9zd-640.jpg&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;sources: [{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/i8oQD9zd-kNspJqnJ.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;SD&quot;
&nbsp;&nbsp;&nbsp;&nbsp;},{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file: &quot;http://content.bitsontherun.com/videos/i8oQD9zd-DZ7jSYgM.mp4&quot;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: &quot;HD&quot;
&nbsp;&nbsp;&nbsp;&nbsp;}]
&nbsp;&nbsp;}],
	skin: &quot;ethan.xml&quot;,
	primary: &quot;flash&quot;,
	stretching: &quot;exactfit&quot;,
	width: 720,
	height: 480,
	plugins: {
		'controlbarlogo.js': {
			link:'http://www.ethanfeldman.net/',
			target: '_blank',
			width: '70px',
			height: '20px',
			left: '634px'
			//border: '1px solid #000'
		}
	}
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

The source code is available for this plugin. There is just a .js file for JavaScript. Publishing the JavaScipt can be simply done with any text editor. Enjoy~! :) 