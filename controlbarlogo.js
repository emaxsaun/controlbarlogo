jwplayer().registerPlugin('controlbarlogo', '6.0', function(player, config, controlbarlogo){
	function setup(){
		if(player.getState() == "PLAYING" || player.getState() == "PAUSED"){
			controlbarlogo.innerHTML = '<a id="controlbarlogo1" onclick="this.blur();"><div id="controlbarlogo2" onmouseover="return false;"></div></a>';
			if(config.link == null){
				document.getElementById("controlbarlogo1").href="http://www.jwplayer.com/";
			} else {
				document.getElementById("controlbarlogo1").href=config.link;
			}
			if(config.target == null){
				document.getElementById("controlbarlogo1").target="_top";
			} else {
				document.getElementById("controlbarlogo1").target=config.target;
			}
			if(config.width == null){
				document.getElementById("controlbarlogo2").style.width = "50px";
			} else {
				document.getElementById("controlbarlogo2").style.width = config.width;
			}
			if(config.height == null){
				document.getElementById("controlbarlogo2").style.height = "20px";
			} else {
				document.getElementById("controlbarlogo2").style.height = config.height;
			}
			if(config.border == null){
				//do nothing
			} else {
				document.getElementById("controlbarlogo2").style.border = config.border;
			}
			controlbarlogo.style.position = "absolute";
			controlbarlogo.style.zIndex = "100";
			controlbarlogo.style.cursor = "pointer";
			if(config.left == null){
				controlbarlogo.style.left = "15px";
			} else {
				controlbarlogo.style.left = config.left;
			}
			if(config.top == null){
				controlbarlogo.style.top = player.getHeight() -35 + "px";
			} else {
				controlbarlogo.style.top = config.top;
			}
			if (player.getRenderingMode() == "flash"){
				var theBody = document.getElementById(player.id+"_wrapper");
				var theWidth = theBody.style.width;
				theWidth = theWidth.substr(0, theWidth.length - 2)
				if(config.left == null){
					controlbarlogo.style.left = theWidth+"px";
				} else {
					controlbarlogo.style.left = config.left;
				}
			} else {
				var theBody = document.getElementById(player.id);
				var theWidth = theBody.style.width;
				theWidth = theWidth.substr(0, theWidth.length - 2)
				theWidth = theWidth - 60;
				if(config.left == null){
					controlbarlogo.style.left = theWidth+"px";
				} else {
					controlbarlogo.style.left = config.left;
				}
			}
		}
	}
	this.resize = function (width, height){
		if(player.getFullscreen() == true){
			controlbarlogo.style.display = "none";
		} else {
			controlbarlogo.style.display = "inline";
		}
	}
	player.onReady(setup);
	player.onPlay(setup);
	player.onPause(setup);
});