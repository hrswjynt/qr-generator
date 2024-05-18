<script lang="ts">
	import QR from '$lib/QR.svelte';

	let codeValue = 'Ketik disini...';
	let imageInputElement: HTMLInputElement;
	let image: any = '';

	const handleImage = (e: any) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (e: any) => {
			image = e.target.result;
		};

		reader.readAsDataURL(file);
	};
</script>

<div class="grid h-screen w-screen place-items-center">
	<div class="grid w-72 gap-y-2">
		<h1 class="text-center text-4xl font-bold">QR Generator</h1>

		{#if codeValue}
			{#key [codeValue, image]}
				<div class="border-4 border-black p-4">
					<QR {codeValue} {image} />
				</div>
			{/key}
		{/if}

		<div>
			<input type="text" class="form-input w-full rounded-lg" bind:value={codeValue} />
		</div>
		<div class="relative inline-block">
			<label>
				<input
					type="file"
					class="hidden"
					bind:this={imageInputElement}
					on:change={(e) => handleImage(e)}
				/>
				<div class="form-input flex w-full items-center justify-between rounded-lg">
					<span> Logo </span>
					<span class="cursor-pointer rounded-md bg-black px-3 py-1 text-white">Pilih gambar</span>
				</div>
			</label>
			{#if image != ''}
				<button
					class="absolute end-3 top-1/2 -translate-y-1/2 cursor-pointer"
					on:click={() => ((image = ''), (imageInputElement.value = ''))}
				>
					<i class="fa fa-close"></i>
				</button>
			{/if}
		</div>
	</div>
</div>
