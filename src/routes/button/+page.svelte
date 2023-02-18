<script>
	// @ts-nocheck
	// import { Confetti } from 'svelte-confetti';
	// import Toggle from '$lib/Toggle.svelte';
	import { copy } from 'svelte-copy';
	let k = 0,
		padding = 10,
		color = '#000',
		text = 'Button',
		bg = '#fff',
		font = '',
		margin = 10,
		radius = 10,
		shadowX = 10,
		shadowY = 10,
		shadowBlur = 10,
		shadowColor = '#000';

	$: copytext = `<button>${text}</button> padding :${padding}px;color:${color};background:${bg};margin:${margin}px;border-radius:${radius};box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor};`;

	let handleCopy = () => {
		k = 1;
		setTimeout(() => {
			k = 0;
		}, 1000);
	};
</script>

<div class="container">
	<div class="details">
		<div>
			<h1>Padding :</h1>
			<input type="text" bind:value={padding} />
		</div>

		<div>
			<h1>Text :</h1>
			<input type="text" bind:value={text} />
		</div>

		<div>
			<h1>Font-size :</h1>
			<input type="text" bind:value={font} />
		</div>

		<div>
			<h1>margin :</h1>
			<input type="text" bind:value={margin} />
		</div>

		<div>
			<h1>Border-radius :</h1>
			<input type="text" bind:value={radius} />
		</div>

		<div>
			<h1>ShadowX :</h1>
			<input type="text" bind:value={shadowX} />
		</div>
		<div>
			<h1>ShadowY :</h1>
			<input type="text" bind:value={shadowY} />
		</div>
		<div>
			<h1>ShadowBlur :</h1>
			<input type="text" bind:value={shadowBlur} />
		</div>
		<div>
			<h1>ShadowColor :</h1>
			<input type="color" bind:value={shadowColor} />
		</div>

		<div>
			<h1>color :</h1>
			<input type="color" bind:value={color} />
		</div>
		<div>
			<h1>BackGround :</h1>
			<input type="color" bind:value={bg} />
		</div>
	</div>

	<div class="changes">
		<button
			style="padding :{padding}px; color:{color};background:{bg};font-size:{font}px; margin:{margin}px; border-radius:{radius}px; box-shadow: {shadowX}px {shadowY}px {shadowBlur}px {shadowColor};"
		>
			{text}
		</button>

		<button class="copybtn" use:copy={copytext} on:click={handleCopy}
			>{k == 0 ? 'Copy' : 'Copied'}</button
		>

		<!-- <Toggle>
			<button slot="label">Default</button>
			<Confetti />
		</Toggle> -->

	</div>
</div>

<style>
	.container {
		margin-top: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.details {
		margin: 10px;
		color: #ffae33;
		display: grid;
		background: #221f1f;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		width: 60%;
		border: 5px solid #4608ad;
		border-radius: 10px;
		/* height: 500px; */
		padding: 20px;
	}

	.details h1 {
		margin: 10px;
		font-size: 2rem;
	}

	.details div {
		display: flex;
		align-items: center;
		justify-content: centre;
	}
	.changes {
		width: 30%;
		align-items: center;
		display: flex;
		justify-content: center;
		border: 5px solid #4608ad;
		background: #221f1f;
		border-radius: 10px;
		padding: 100px;
		margin: 30px;
		flex-direction: column;
	}
	.copybtn {
		margin-top: 20px;
		padding: 10px;
		border: none;
		border-radius: 5px;
		background: #4608ad;
		color: whitesmoke;
		font-size: 1rem;
		cursor: pointer;
	}
	input {
		width: 100px;
		background: #000;
		border-radius: 5px;
		color: whitesmoke;
	}

	@media screen and (max-width: 600px) {
		.container {
			flex-direction: column;
		}
		.details {
			display: flex;
			flex-wrap: wrap;
			width: 300px;
		}
		.details h1 {
			font-size: 1rem;
		}
		.changes {
			width: 300px;
		}
	}
</style>
