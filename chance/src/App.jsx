import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
	const Loterias = [
		{
			id: 1,
			nombre: "chance1",
		},
	];

	Loterias.push({ id: 2, nombre: "chance2" });

	const [numero, setNumero] = useState(0);
	const [precio, setPrecio] = useState(0);
	const [loteria, setLoteria] = useState(0);
	const [loterias, setLoterias] = useState("");
	const [check, setCheck] = useState("");

	const [messageNum, setMessageNum] = useState("");
	const [messagePre, setMessagePre] = useState("");

	const handleChangeLoteria = (event) => {
		setLoteria(event.target.value);
	};

	const handleChangeNumero = (event) => {
		setMessageNum(event.target.value);
		setNumero(event.target.value);
	};

	const handleChangePrecio = (event) => {
		setMessagePre(event.target.value);
		setPrecio(event.target.value);
	};

	const Add = () => {
		if (loteria != "") {
			if (numero != 0 && numero.length >= 3 && numero.length <= 4  ) {
				if (precio != 0) {
					const nuevaLoteria = {
						nombre: loteria,
						num: numero,
						pre: precio,
					};

					const loteriaCopy = [...loterias];
					loteriaCopy.push(nuevaLoteria);
					setLoterias(loteriaCopy);
					setCheck("");
				}else{
					setCheck("Coloque el precio");
				}
			} else {
				setCheck("Elija un numero de 3 o 4 digitos");
			}
		} else {
			setCheck("Elija un chance");
		}
	};

	const [lista, setLista] = useState("");

	const Print = () => {
		let total = 0;

		for (let index = 0; index < loterias.length; index++) {
			total = total + Number(loterias[index].pre);
		}

		setLista(
			<>
				<div className="flex gap-3 font-semibold">
					<h1>Chance</h1>
					<h1>Numero</h1>
					<h1>Precio</h1>
				</div>
				{[...Array(loterias.length)].map((x, i) => (
					<div className="flex gap-3">
						<h1>{loterias[i].nombre}</h1>
						<h1>{loterias[i].num}</h1>
						<h1>{loterias[i].pre}</h1>
					</div>
				))}
				<hr className="mt-3" size="2px" width="75%" color="black" />
				<div className="mt-3 flex gap-3">
					<h1>Precio total: </h1>
					<h1>{total}</h1>
				</div>
			</>
		);

		console.log(total);
	};

	return (
		<>
			<div className="m-3">
				<h1 className="mb-2 text-red-600">{check}</h1>
				<div className="flex gap-2">
					<h1>Loteria</h1>
					<select
						className="w-28 border border-stone-900"
						name="chances"
						onChange={(event) => handleChangeLoteria(event)}
					>
						<option value=""></option>
						<option value={Loterias[0].nombre}>{Loterias[0].nombre}</option>
						<option value={Loterias[1].nombre}>{Loterias[1].nombre}</option>
					</select>
					<h1 className="ml-2">Numero</h1>
					<input
						type="text"
						className="w-20 border border-stone-900 bg-transparent"
						min={100}
						max={9999}
						//value={messageNum}
						onChange={(event) => handleChangeNumero(event)}
					/>
					<h1 className="ml-2">Precio</h1>
					<input
						type="number"
						className="w-20 border border-stone-900 bg-transparent"
						//value={messagePre}
						onChange={(event) => handleChangePrecio(event)}
					/>
					<button className="border px-1 border-stone-900" onClick={Add}>
						Add
					</button>
					<button className="border px-1 border-stone-900" onClick={Print}>
						Print
					</button>
				</div>
				<div className="mt-5">{lista}</div>
			</div>
		</>
	);
}

export default App;
