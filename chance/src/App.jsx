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
	const [messageNum, setMessageNum] = useState("");
	const [messagePre, setMessagePre] = useState("");

	const listaLoterias = [{}];

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

		listaLoterias.push({
			nombre: loteria,
			num: numero,
			pre: precio,
		});
    
		console.log(listaLoterias);

	};

	const Print = () => {
		const lista = [
			...Array(listaLoterias.length).map((x, i) => (
				<>
					<div className="flex gap-3">
						<h1>{listaLoterias[i].nombre}</h1>
						<h1>{listaLoterias[i].numero}</h1>
						<h1>{listaLoterias[i].precio}</h1>
					</div>
				</>
			)),
		];

		return (<>{lista}</>);
	};

	return (
		<>
			<div className="m-3">
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
						type="number"
						className="w-20 border border-stone-900 bg-transparent"
						min={100}
						max={9999}
						value={messageNum}
						onChange={(event) => handleChangeNumero(event)}
					/>
					<h1 className="ml-2">Precio</h1>
					<input
						type="number"
						className="w-20 border border-stone-900 bg-transparent"
						value={messagePre}
						onChange={(event) => handleChangePrecio(event)}
					/>
					<button className="border px-1 border-stone-900" onClick={Add}>
						Add
					</button>
					<button className="border px-1 border-stone-900" onClick={"Print"}>
						Print
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
