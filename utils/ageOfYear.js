const ageOfYear = (birthDay) => {
    const arr = birthDay.split('-'),
	    lastYear = +arr[0] + 100 + '',
	    birthTimestamp = new Date(birthDay).getTime(),
        deathTimestamp = new Date([lastYear, arr[1], arr[2]].join('/')).getTime();
    
    return () => {
        const nowTimestamp = Date.now();

        return (nowTimestamp - birthTimestamp) / (deathTimestamp - birthTimestamp) * 100;
    }
}

module.exports = ageOfYear;
