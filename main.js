window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, RIGHT = 39;
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/image1.png";
	var girl = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/wallpaper.jpg";
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				girl.mvRight = true;
				girl.mvLeft = false;
				girl.mvUp = false;
				girl.mvDown = false;
				break;
			case LEFT:
				girl.mvRight = false;
				girl.mvLeft = true;
				girl.mvUp = false;
				girl.mvDown = false;
				break;
			case UP:
				girl.mvRight = false;
				girl.mvLeft = false;
				girl.mvUp = true;
				girl.mvDown = false;
				break;
			case DOWN:
				girl.mvRight = false;
				girl.mvLeft = false;
				girl.mvUp = false;
				girl.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				girl.mvRight = false;
				break;
			case LEFT:
				girl.mvLeft = false;
				break;
			case UP:
				girl.mvUp = false;
				break;
			case DOWN:
				girl.mvDown = false;
				break;
		}
	}
	
	//Quando a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = zezim.posY = 150;
	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		zezim.draw(ctx);
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}
}

