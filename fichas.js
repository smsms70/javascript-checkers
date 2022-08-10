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
const limits = a => b => {
	if ((a <= 7 && a >= 0 && b <= 7 && b >= 0)) {
		coordenades[a][b]
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
const fichas = (a, b) => black => {
	const ficha = document.createElement('div');
	canvas.appendChild(ficha);

	ficha.setAttribute('class', 'fichas');
	if ((a <= 7 && a >= 0 && b <= 7 && b >= 0)) coordenades[a][b].appendChild(ficha);

	if (!black) {
		ficha.setAttribute('id', 'red');
		ficha.addEventListener('click', () => {
			clean()
			document.querySelectorAll('#black').forEach(event =>{
				if (event !== coordenades[a+1][b+1].lastChild) {
					selectors(a+1,b+1, ficha)(()=>{	a++; b++})
		 		}  else {
		 			selectors(a+2,b+2, ficha)(()=>{ coordenades[a+1][b+1].removeChild(event); a = a+2; b = b +2; })
		 			
		 		}
		 		if (event !== coordenades[a+1][b-1].lastChild) {
					selectors(a+1,b-1, ficha)(()=>{ a++; b--})
		 		}  else {
					selectors(a+2,b-2, ficha)(()=>{ coordenades[a+1][b-1].removeChild(event); a = a+2; b = b-2 })
					
		 		}
			})
		})
	}
	if (black) {
		ficha.setAttribute('id', 'black');
		ficha.addEventListener('click', () => {
			clean()
			document.querySelectorAll('#red').forEach(event =>{
				if (event !== coordenades[a-1][b-1].lastChild) {
					selectors(a-1,b-1, ficha)(()=>{	a--; b--})
		 		}  else {
		 			selectors(a-2,b-2, ficha)(()=>{	coordenades[a-1][b-1].removeChild(event); a = a-2; b = b-2})
		 		}
		 		if (event !== coordenades[a-1][b+1].lastChild) {
					selectors(a-1,b+1, ficha)(()=>{ a--; b++})
		 		}  else {
					selectors(a-2,b+2, ficha)(()=>{ coordenades[a-1][b+1].removeChild(event); a = a-2; b = b+2})
		 		}
			})
		})
	}
}
fichas(0,0)(0)
fichas(0,4)(0)
fichas(0,2)(0)
fichas(0,6)(0)
fichas(7,7)(1)
fichas(7,5)(1)
fichas(7,3)(1)
fichas(7,1)(1)