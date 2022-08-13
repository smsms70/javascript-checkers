var f = false;
const position = (rows, columns ,object) => {
	if ((rows <= 7 && rows >= 0 && columns <= 7 && columns >= 0)) {
		if (!(coordenades[rows][columns].lastChild)) {
			coordenades[rows][columns].appendChild(object);
		}	
	}
}
const clean = () => {
	document.querySelectorAll('#selector').forEach(event => {
		document.querySelectorAll('#square').forEach(e =>{
			if (e.lastChild === event) {
				e.removeChild(event)
			} 
		})
	})
}
const win_message = win => id => {
	if (!(document.querySelector('#' + id))){
		const element = document.createElement('div');
		document.body.appendChild(element);
		element.setAttribute('id', 'winnn');
		if (win) element.innerText = 'RED WINs';
		if (!win) element.innerText = 'BLUE WINs';

		element.addEventListener('click', () => document.body.removeChild(element))
	}
}
const selectors = (a, b, state) => funct =>{
	const select = document.createElement('div');
	select.setAttribute('id', 'selector');

	position(a,b,select);

	select.addEventListener('click', () => {
		clean()
		position(a,b,state)
		funct()
	})
}
const movement = (a, b, event, ficha) => left => parameter1 => parameter2 => up =>{

	if (!left) { b--; idk = (b <= 6 && b >= 0)}
	if (left) {	b++; idk = (b <= 7 && b >= 1) }
	if (up) { a--; down = (a <= 7 && a >=0 && !f) }
	if (!up) { a++; down = (a <= 7 && a >=0 && f) }

	if (idk && down){
		if (event !== coordenades[a][b].lastChild) {
			selectors(a, b, ficha)(()=>{ 
				parameter2();
				win_message(0)('red'); 
				up ? f=true : f=false;
			})
 		}  else {
 			selectors(up ? a-1 : a+1, left ? b+1 : b-1, ficha)(()=>{	
 				coordenades[a][b].removeChild(event); 
 				parameter1()
				up ? a = a-2 : a = a+2;
				left ? b++ : b--;
				const double = () => {
				// RIGHT
	 				if (b >= 0 && b <= 6 && a <= 6 && a >= 0 && coordenades[a][b+1].lastChild &&
	 					coordenades[a][b+1].lastChild.id === event.id) {
	 					// print(coordenades[a][b+1])
	 				print('right')
	 					selectors(up ? a-1 : a-1, b+2, ficha)(() => {
	 						
	 						parameter1()
	 						coordenades[a][b+1].innerHTML = '';
	 						double()
	 						win_message(0)('red'); 
	 						up ? f=true : f=false
	 					})
	 				}
	 			// LEFT
					if (b >= 1 && b <= 7 && a <= 6 && a >= 0 && coordenades[a][b-1].lastChild &&
						coordenades[a][b-1].lastChild.id === event.id){
						// print(coordenades[a][b-1])
					print('left')
	 					selectors(up ? a-1 : a-1, b-2, ficha)(() => {

	 						parameter1()
	 						coordenades[a][b-1].innerHTML = '';
	 						double()
	 						win_message(0)('red'); 
	 						up ? f=true : f=false
	 					})
					}	
				}
				double()
				win_message(0)('red'); 
				up ? f=true : f=false
 			})
 		}
 	}
}
const fichas = (a, b) => black => {
	const ficha = document.createElement('div');
	canvas.appendChild(ficha);

	ficha.setAttribute('class', 'fichas');
	if ((a <= 7 && a >= 0 && b <= 7 && b >= 0)) coordenades[a][b].appendChild(ficha);
	// RED
	if (!black) {
		ficha.setAttribute('id', 'red');
		ficha.addEventListener('click', () => {
			clean()
			document.querySelectorAll('#black').forEach(event =>{
			// TO RIGHT
				movement(a,b,event,ficha)(1)(()=>{
					a = a+2; 
					b = b+2; 
				})(()=>{a++; b++; })(0)
			// TO LEFT
				movement(a,b,event,ficha)(0)(()=>{
					a = a+2; 
					b = b-2; 
				})(()=>{a++; b--; })(0)
			})
		})
	}
	// BLUE
	if (black) {
		ficha.setAttribute('id', 'black');
		ficha.addEventListener('click', () => {
			clean()
			document.querySelectorAll('#red').forEach(event =>{
			// TO LEFT
				movement(a,b,event,ficha)(0)(()=>{
					a = a-2;
					b = b-2;
				})(()=>{a--; b--; })(1)
			// TO RIGHT
			 	movement(a,b,event,ficha)(1)(()=>{
			 		a = a-2; 
			 		b = b+2; 
			 	})(()=>{a--; b++; })(1)
			})
		})
	}
}
fichas(0,0)(0)
fichas(0,2)(0)
fichas(0,4)(0)
fichas(0,6)(0)
fichas(1,1)(0)
fichas(1,3)(0)
fichas(1,5)(0)
fichas(1,7)(0)

fichas(6,6)(1)
fichas(6,4)(1)
fichas(6,2)(1)
fichas(6,0)(1)
fichas(7,1)(1)
fichas(7,3)(1)
fichas(7,5)(1)
fichas(7,7)(1)