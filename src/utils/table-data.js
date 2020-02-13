const tableDataContentMapper = (content) => {
	return content.map( (row) => {
		const rowMapped = [];

		for(let key in row) {
			rowMapped.push({
				cellKey: key,
				cellValue: row[key],
			});
		}

		return rowMapped;
	});
};


export {
	tableDataContentMapper,
};
