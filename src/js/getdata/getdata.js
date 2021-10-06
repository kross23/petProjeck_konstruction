

const getData = async (url = 'http://localhost:9000/data') => {
	const response = await fetch(url);
	const data = await response.json();
	return data;

};
export default getData;
