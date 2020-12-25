export default {
	formatTime(num) {
		let divisionNum = Math.floor(num / 60),
			remainderNum = Math.floor(num % 60),
			zero = (x) => '0'.repeat(2 - String(x).length);
		return `${zero(divisionNum)+divisionNum}:${zero(remainderNum)+remainderNum}`
	}
}