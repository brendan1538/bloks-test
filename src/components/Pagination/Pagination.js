import React, { useEffect } from 'react';

const Pagination = () => {
	useEffect(() => {
		const page_one = document.getElementById("page-1");
		page_one.style.border = "1px solid #fff";
		page_one.style.width = "21vw";
		page_one.style.marginLeft = "-0.5vw";
	});
	return (
		<section className="pagination">
			<div className="marker" id="page-1"></div>
			<div className="marker" id="page-2"></div>
			<div className="marker" id="page-3"></div>
		</section>
	);
}

export default Pagination;