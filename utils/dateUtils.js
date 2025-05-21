// utils/dateUtils.js

// 判断 endDate 是否在 startDate 之后
export function isEndDateAfterStartDate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error('Invalid date format. Please provide valid date strings (YYYY-MM-DD).');
  }

  const startTime = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endTime = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  return endTime >= startTime;
}

// 获取当前日期（YYYY-MM-DD）
export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份补零
  const day = String(now.getDate()).padStart(2, '0'); // 日期补零
  return `${year}-${month}-${day}`;
}

export function getDateBefore(dateStr, days) {
	if (!dateStr || isNaN(days)) {
	      throw new Error("参数不合法：请传入格式为 yyyy-mm-dd 的日期字符串和整数天数");
	    }
	
	    const dateParts = dateStr.split("-");
	    if (dateParts.length !== 3) {
	      throw new Error("日期格式错误，应为 yyyy-mm-dd");
	    }
	
	    const year = parseInt(dateParts[0], 10);
	    const month = parseInt(dateParts[1], 10) - 1; // JS 中月是 0 开始
	    const day = parseInt(dateParts[2], 10);
	
	    const date = new Date(year, month, day);
	    date.setDate(date.getDate() - days);
	
	    const yyyy = date.getFullYear();
	    const mm = String(date.getMonth() + 1).padStart(2, '0');
	    const dd = String(date.getDate()).padStart(2, '0');
	
	    return `${yyyy}-${mm}-${dd}`;
	  }

export function getDaysSinceFirstOfMonth() {
  const today = new Date();
  return today.getDate() - 1;
}

export function getDaysSinceMonday() {
  const today = new Date();
  let day = today.getDay(); // 0=周日, 1=周一, ..., 6=周六
  if (day === 0) day = 7;   // 将周日视为一周的最后一天（第7天）
  return day - 1;
}
