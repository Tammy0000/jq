	const NumberUtils = {
	  /**
	   * 保留指定小数位数的数字
	   * @param {number|string} value 要处理的数字
	   * @param {number} decimalPlaces 保留的小数位数
	   * @returns {number} 返回处理后的数字
	   */
	  toFixedNumber(value, decimalPlaces) {
	    const num = parseFloat(value);
	    if (isNaN(num)) {
	      throw new Error('输入必须是可转换为数字的值');
	    }
	    return parseFloat(num.toFixed(decimalPlaces));
	  }
	};
	
	export default NumberUtils;
