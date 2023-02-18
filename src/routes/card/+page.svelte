<script>
	// @ts-nocheck

	import supabase from '$lib/db';
	import { onMount } from 'svelte';
	// import '../style.css';
	let name = '';
	let hobby = '';
	/**
	 * @type {any[] | null}
	 */
	$: details = [];

	onMount(async () => {
		// let { data, error } = await supabase.from('student').select('*');
		// details=data;
		await getAllData();
	});

	let handleform = async () => {
		console.log(name, hobby);
		try {
			const { data, error } = await supabase.from('student').insert([{ name: name, hobby: hobby }]);
			await getAllData();
		} catch (err) {
			console.log(err);
		}
	};

	let getAllData = async () => {
		let { data, error } = await supabase.from('student').select('*');
		details = data;
	};
</script>

<div class="container">
	<form>
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Name</label>
			<input type="text" class="form-control" bind:value={name} />
		</div>
		<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label">Hobby</label>
			<input type="text" class="form-control" bind:value={hobby} />
		</div>
		<button on:click={() => handleform()} class="btn btn-primary">Submit</button>
	</form>
</div>

<div class="box">
	{#each details as item}
		<div class="card" style="width: 18rem;">
			<!-- <img src="..." class="ca<rd-img-top" alt="..."> -->
			<div class="card-body">
				<h5 class="card-title">{item.name}</h5>
				<p class="card-text">{item.hobby}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
        margin:40px auto;
		/* width: 100%; */
		/* margin: 100px; */
	}

	.card {
		background: #161616;
		color: aliceblue;
		margin: 10px;
        border: 1px solid white;
        transition: 0.3s all ease;
	}
    .card:hover{
        background: #4608ad !important;
        color: aliceblue;
        border: none;
        transform: scale(1.05);
        transition: 0.3s all ease;
    }
	.box {
		display: flex;
		flex-wrap: wrap;
		margin: 10px auto;
        justify-content: center;
        align-items: center;
	}

	.form-control {
		background: #161616;
		color: aliceblue;
	}

    form button{
        background: #4608ad;
        color: aliceblue;
        border: 3px solid #4608ad;
    }

    form label{
        color: aliceblue;
        font-size: 1.5rem;
        text-shadow: 2px 3px 3px black;
    }
    form input{
        background: white !important;
        color: aliceblue;
        border: 3px solid black;
    }
</style>
