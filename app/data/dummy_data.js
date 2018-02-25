const iconlist = [
	{ path: require('../images/1.jpeg') },
	{ path: require('../images/1.jpeg') },
	{ path: require('../images/1.jpeg') },
	{ path: require('../images/1.jpeg') },
];

const getRandomeData = count => {
	let DUMMY_BASE = 'https://picsum.photos/800/400/?image=';
	var dataList = [];
	for (let i = 0; i < count; i++) {
		let randomPic = Math.floor(Math.random() * 1000) + 1;
		let iconPic = Math.floor(Math.random() * 4) + 1;
		let data = {
			like: randomPic,
			image: `${DUMMY_BASE}${randomPic}`,
			thumbnail: iconlist[iconPic],
		};
		dataList.push(data);
	}
	return dataList;
};

export { getRandomeData };
