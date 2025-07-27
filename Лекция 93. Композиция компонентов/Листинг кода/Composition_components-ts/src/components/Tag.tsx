import React from 'react'

export const Tag: React.FC<{tag: string}> = ({tag}) => <button className="btn tag-btn">{tag}</button>