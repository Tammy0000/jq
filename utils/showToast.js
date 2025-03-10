// 封装的 showToast 方法
export function showToast({ title, icon = 'none', duration = 1500, mask = false, position = 'bottom' }) {
  uni.showToast({
    title: title,
    icon: icon,
    duration: duration,
    mask: mask,
    position: position
  });
}
