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
const fichas = (a, b) => {
	const ficha = document.createElement('div');
	canvas.appendChild(ficha);

	ficha.setAttribute('id', 'fichas');
	if ((a <= 7 && a >= 0 && b <= 7 && b >= 0)) coordenades[a][b].appendChild(ficha);

	ficha.addEventListener('click', () => {
		clean()
		selectors(a+1,b+1, ficha)(()=>{	a++; b++})
		selectors(a+1,b-1, ficha)(()=>{ a++; b--})
	})
}
fichas(0,0)
fichas(0,4)
fichas(0,2)
fichas(0,6)
// fichas(6,6)