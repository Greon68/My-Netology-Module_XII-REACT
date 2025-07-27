import React from 'react';

export const Tags = ({ tags }) => {

	return (
			<div className="tag-block">
				{tags.map(t => 	<button key={t} className="btn">{t}</button>)}
			</div>
	)
}
