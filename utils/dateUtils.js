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
