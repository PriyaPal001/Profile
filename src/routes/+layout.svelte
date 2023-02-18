<script>
	import './style.css';
</script>

<main>
	<nav class="navbar navbar-expand-lg" id="navbar-main">
		<div class="container-fluid">
			<div class="logo">
				<img src="https://cdn-icons-png.flaticon.com/512/2371/2371611.png" alt="head" width="40" />
				<a class="navbar-brand" href="#">Sleeping Queen</a>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							My Works
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="/todo">Todo List</a></li>
							<li><a class="dropdown-item" href="/card">Cards with DB</a></li>
							<li><a class="dropdown-item" href="/button">Button Generator</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<slot />
</main>

<style lang="scss">
	#navbar-main {
		background: #ffae33;
		padding: 5px 5px;
	}
    .logo{
        display: flex;
        align-items: center;
        
    }
    .logo img{
            margin: 0 10px;
        }
	.navbar {
        align-items: center;
		padding: 0 1rem;
	}
	.navbar-brand {
		font-size: 1.5rem;
		font-weight: 900;
	}
    .navbar-brand:hover{
        color: #4608ad;
    }
	.navbar-nav {
		margin-left: auto;
	}
	.nav-link {
		color: #212529;
		font-size: 1.2rem;
		font-weight: 700;
		padding: 0.5rem 1rem;
	}
	.nav-link:hover {
		color: #4608ad;
	}
	.nav-link {
		color: black;
	}
    .dropdown-menu{
        background: #ffae33;
        position: absolute;
    }
	.dropdown-item {
        position: relative;
        display: inline-block;
		font-size: 1.2rem;
		font-weight: 500;
		padding: 0.5rem 1rem;
	}
	.dropdown-item:hover {
		color: white;
        background: #4608ad;
	}
	.dropdown-item {
		color: #4608ad;
	}
</style>
