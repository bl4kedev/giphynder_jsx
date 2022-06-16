import { useFetch } from "../hooks/useFetch"
import { GiphynderItem } from "./GiphynderItem";

export const GiphynderGrid = ({category}) => {

	const { images, isLoading } = useFetch(category);
	
	return (
		<div className="
			my-16
		">
			<h2
				className="
					text-3xl
					font-bold
				"
			>
				{category}
			</h2>
			<hr className="my-2" />
			{ images.map( (img) => <GiphynderItem key={img.id} {...img} /> ) }
		</div>
	)
}
