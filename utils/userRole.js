import request from "./request";

export async function checkPermission(checkPer) {
	return new Promise(async (resolve, reject) => {
		const _res = await request('/api/bfAdmin/public/permission/checkPermission', 'GET', {
			permission: checkPer
		})
		if (_res) {
			resolve(_res.data)
		} else {
			reject(false)
		}
	})
}