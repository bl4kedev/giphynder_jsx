import { useState } from "react";

export const GiphynderInput = ({ onNewInputValue }) => {
	
	const [inputValue, setInputValue] = useState('');
	
	const handleInput = ({target}) => {
		setInputValue(target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		onNewInputValue( inputValue );
		setInputValue('');
	}


    return (
		<form
			onSubmit={ handleSubmit	 }
			className="
				mb-10
			"
		>

			<input 
				onChange={ handleInput }
				type="text"
				placeholder="Buscar GIF"
				value={ inputValue }
				className="
					p-2
					mr-2
					border-2
				"
			/>
			<button
				type="onSubmit"
				className="
					bg-blue-800
					text-white
					p-2
					rounded-md
				"
			>
				Buscar
			</button>

		</form>
    );
}