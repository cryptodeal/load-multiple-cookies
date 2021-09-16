<script context="module">
	export async function load({ fetch }) {
		const url = `/bug.json`;

		const res = await fetch(url);
		await res.json();
		if (res.ok) {
			return {};
		}
	}
</script>
