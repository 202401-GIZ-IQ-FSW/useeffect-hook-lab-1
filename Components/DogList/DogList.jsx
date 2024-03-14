

export default function ShoppingList({ dogsList }) {
  return (
		<div className="wrapper">
			<h3>
				Cute Dogs
				<span role='img'>🐶</span>
			</h3>
			<div className='Dog-List'>
				{dogsList.map((dog) => (
					<img
						src={dog}
						alt=''
					/>
				))}
			</div>
		</div>
	);
}
