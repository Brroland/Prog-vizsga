console.log ('szia ez a programozás alapvizsga');
const numbers = 5;   // numbers-be számokat lehet irni
const string = 'hello'; // ezekbe a változókba lehet szöveges üzenetek rögziteni, ha van benne szám akkor azt számmá kell alakkitani elsőnek
const boolean = true; // logikai értéket lehet megadni, két értéke van igaz vagy hamis


const oneV = 4;
const twoV = 5;
let threeV = 0;		// változók érték szerint adódnak át, vagyis függvényen kívül nem változik az értéke ha nem adjuk át
const arr = [0, 1]	// tömbök referencia szerint adódnak át vagyis a függvények után a tömbök értéke is változik
const referencia = () => {
	 threeV = oneV + twoV;
	console.log('függvényen belüli értéke a threeV: ', threeV);
	arr[0] = oneV;
	arr.push = threeV;
	console.log('függvényen belüli értéke az arr tömbnek: ', arr);
}
referencia();
console.log ('függvényen kívüli értéke a threeV változónak: ', threeV);
console.log ('függvényen kívüli értéke az arr tömbnek: ', arr);

const sum = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
	sum +=array[i];
	}
	return sum;
};
const counting = (array, elemnt) => {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
	if (element === array[i]) {
		count++;
		}
	}
	return count;
}
const move = (keyboard) => {
	switch (keyboard) {
		case 1:
		console.log('az egyest nyomtad meg');
		break;
		case 2:
		console.log('a kettest nyomtad meg');
		break;
		case 3:
		console.log('a hármast nyomtad meg');
		break;
		case 4:
		console.log('a négyest nyomtad meg');
		break;
		case 5:
		console.log('ötös nyomtad meg');
		break;
		} else {
		console.log('mást nyomtál meg mint az 1-től 5-ig gombok valamelyikét');

};

const slice = (arr1, arr2) => {
	let out = 0;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
		if (arr1[i] === arr2[j] && !out.includes(arr1[i]) {
			out.push(arr1[i])
			}
		return out;
};

