<script lang="ts">
	import { onMount } from 'svelte';
	import QRCode from 'easyqrcodejs';

	export let codeValue: string;
	export let image: string = '';
	let node: HTMLDivElement;

	onMount(() => {
		const qrcode = new QRCode(node, {
			// basic options
			text: codeValue,
			width: 300,
			height: 300,
			colorDark: '#000000',
			colorLight: '#ffffff',
			correctLevel: QRCode.CorrectLevel.H,

			// dot style
			dotScale: 1,
			dotScaleTiming: 1,

			logo: image
		});
	});
</script>

<div bind:this={node}></div>

<style lang="postcss">
	div {
		/* make QR-wrapper squared */
		width: 100%;
		position: relative;
		padding: 50%;
		z-index: 1;
	}
	div :global(canvas) {
		/* fit QR to wrapper */
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
