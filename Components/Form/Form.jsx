import { useState } from "react";
import DogList from "../DogList/DogList";



export default function Form({ setNumberOfDogs }) {
  // How can we manage the number of dogs?

  const [inputText, setInputText] = useState("");
const handleSubmit = (e) => {
	e.preventDefault();
	// Pass the input value to the parent component
	setNumberOfDogs(inputText);
};

  return (
		<form onSubmit={handleSubmit} className="form">
			<h3>Number of cute dogs is infinite!</h3>
			<div className='mb-3'>
				<label>Insert number of cute dogs</label> <br></br>
				<input
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
					type='text'
					className='form-control'
				/>
			</div>
			<div className='d-grid'>
				<button
					type='submit'
					className='btn btn-primary'
				>
					WOOF!
				</button>
			</div>
		</form>
	);
}
