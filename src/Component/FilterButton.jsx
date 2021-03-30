import React from 'react';

function FilterButton({ processFilter, tagList }) {
	return (
		<div>
			{tagList.map((element) => {
				return (
					<button type="button" onClick={() => processFilter(element)}>
						{element}
					</button>
				);
			})}
		</div>
	);
}

export default FilterButton;
