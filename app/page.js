"use client";
import { useEffect, useState } from "react";
import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [input, setInput] = useState(2);
	const [dogsData, setDogsData] = useState([]);

	const fetchData = async () => {
		const response = await fetch(
			`https://dog.ceo/api/breeds/image/random/${input}`
		);
		const newData = await response.json();
		if (newData && newData.message) {
			if (newData && newData.message) {
				setDogsData(newData.message);
			} else {
				console.error(
					"Invalid response structure:",
					newData
				);
			}
		}
	};

	useEffect(() => {
		fetchData();
	}, [input]);

	const handleFormSubmit = (value) => {
		setInput(value);
	};

	return (
		<div className='card'>
			<Form setNumberOfDogs={handleFormSubmit} />
			<DogList dogsList={dogsData} />
		</div>
	);
}
