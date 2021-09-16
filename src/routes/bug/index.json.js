/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	let cookie1 = `cookie1Test=testCookie1; Path=/; HttpOnly`;
	let cookie2 = `cookie2Test=testCookie2; Path=/; HttpOnly`;

	if (cookie1 && cookie2) {
		return {
			status: 200,
			headers: {
				'set-cookie': [cookie1, cookie2]
			}
		};
	}
}
