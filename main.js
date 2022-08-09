const canvas = document.getElementById('canvas');
const body = document.body;
const size = {
	cols: 8,
	rows: 8,
}
const sizes = 450/size.cols;
const print = data => console.log(data);
const coordenades = [[], [], [], [], [], [], [], [] ];
const table = () => {
	for (var i = 31; i >= 0; i--) {
		const square = document.createElement('div');
		const square_white = document.createElement('div');
		square.setAttribute('id', 'square');
		square_white.setAttribute('id', 'square2');
		canvas.appendChild(square);
		canvas.appendChild(square_white);
		if (i < 8){
			square.style.top =  `${sizes*((i % 2) ? 1 : 0)}px`;
			(i % 2) ? coordenades[1].unshift(square) : coordenades[0].unshift(square);
			square_white.style.top =  `${sizes*((i % 2) ? 0 : 1)}px`;

			(i % 2) ? coordenades[0].unshift(square_white) : coordenades[1].unshift(square_white);
		}
		if (i >= 8 && i < 16){
			square.style.top =  `${sizes*((i % 2) ? 3 : 2)}px`;
			(i % 2) ? coordenades[3].unshift(square) : coordenades[2].unshift(square);
			square_white.style.top =  `${sizes*((i % 2) ? 2 : 3)}px`;

			(i % 2) ? coordenades[2].unshift(square_white) : coordenades[3].unshift(square_white);
		}
		if (i >= 16 && i < 24){
			square.style.top =  `${sizes*((i % 2) ? 5 : 4)}px`;
			(i % 2) ? coordenades[5].unshift(square) : coordenades[4].unshift(square);
			square_white.style.top =  `${sizes*((i % 2) ? 4 : 5)}px`;

			(i % 2) ? coordenades[4].unshift(square_white) : coordenades[5].unshift(square_white);
		}
		if (i >= 24 && i < 32){
			square.style.top =  `${sizes*((i % 2) ? 7 : 6)}px`;
			(i % 2) ? coordenades[7].unshift(square) : coordenades[6].unshift(square);
			square_white.style.top =  `${sizes*((i % 2) ? 6 : 7)}px`;

			(i % 2) ? coordenades[6].unshift(square_white) : coordenades[7].unshift(square_white);
		}
		square.style.left = `${sizes*(i % 8)}px`;
		square_white.style.left = `${sizes*(i % 8)}px`;


	}
}
table()

