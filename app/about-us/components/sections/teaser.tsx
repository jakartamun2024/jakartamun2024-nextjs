'use client';
import React, { useEffect } from 'react'

function Teaser() {

	return (
		<div className='mx-auto w-full'>
			<iframe className='lg:w-1/2 md:w-2/3 lg:p-0 md:p-0 w-full  h-auto aspect-video mx-auto' src="https://www.youtube-nocookie.com/embed/nB3NELoflpg?si=vvMvs0LIseDHMvIb&amp;controls=0&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		</div>
	)
}

export default Teaser
