<script lang="ts">
	import { space } from 'postcss/lib/list';
	import '../app.css';

	enum spaceValue {
		cat = 'cat',
		taco = 'taco'
	}
	interface Space {
		id: number;
		name: string;
		value: spaceValue | null;
		isCorner: boolean;
	}
	let occupiedCount = 0;
	let gameOver = false;
	let winner;
	let spaces: Space[] = [
		{
			id: 0,
			name: 'top-left',
			value: null,
			isCorner: true
		},
		{
			id: 1,
			name: 'top-middle',
			value: null,
			isCorner: false
		},
		{
			id: 2,
			name: 'top-right',
			value: null,
			isCorner: true
		},
		{
			id: 3,
			name: 'middle-left',
			value: null,
			isCorner: false
		},
		{
			id: 4,
			name: 'middle-middle',
			value: null,

			isCorner: false
		},
		{
			id: 5,
			name: 'middle-right',
			value: null,
			isCorner: false
		},
		{
			id: 6,
			name: 'bottom-left',
			value: null,
			isCorner: true
		},
		{
			id: 7,
			name: 'bottom-middle',
			value: null,
			isCorner: false
		},
		{
			id: 8,
			name: 'bottom-right',
			value: null,
			isCorner: true
		}
	];

	function handleClick(space: Space): void {
		space.value = spaceValue.taco;
		spaces = [...spaces];
		occupiedCount++;
		computerPlay();
	}

	function reset(): void {
		spaces = spaces.map((space) => ({ ...space, value: null }));
		occupiedCount++;
	}

	function computerPlay(): void {
		const corners = spaces.filter((space) => space.isCorner);
		if (occupiedCount === 1) {
			const firstOpenCorner = corners.find((space) => space.value === null);
			if (firstOpenCorner) {
				// this will always be truthy at this point but whatevs, typescript
				firstOpenCorner.value = spaceValue.cat;
			}
		} else {
			const ourCorners = corners.filter((space) => space.value === spaceValue.cat);
			let nextCorner = corners.find((space) => space.id > ourCorners[0].id && space.value === null);
			if (ourCorners.length === 1) {
				if (nextCorner) {
					nextCorner.value = spaceValue.cat;
					occupiedCount++;
				}
			} else {
				ourCorners.forEach((corner, index) => {
					if (index < ourCorners.length - 1) {
						if (
							spaces[corner.id + 1].value === null &&
							spaces[corner.id + 3].value === spaceValue.cat
						) {
							// take the row middle and win
							spaces[corner.id + 1].value = spaceValue.cat;
							gameOver = true;
							winner = 'Cat';
						} else if (
							spaces[corner.id + 3].value === null &&
							spaces[corner.id + 3].value === spaceValue.cat
						) {
							// take the column middle and win
							spaces[corner.id + 3].value = spaceValue.cat;
							gameOver = true;
							winner = 'Cat';
						} else {
							// try to find a different corner
							if (nextCorner) {
								nextCorner.value = spaceValue.cat;
								occupiedCount++;
							}
						}
					} else {
						return;
					}
				});
			}
		}
	}
</script>

<div class="container mx-auto h-screen py-10">
	<div class="flex h-full flex-col">
		<div class="mb-5 flex items-center justify-center gap-4">
			<h1 class="text-center text-3xl">
				Tic Taco Cat
				<span class="icon ms-2">🐱</span>
			</h1>
			<button
				class="rounded border border-black px-3 py-0 hover:bg-pink-200"
				type="button"
				on:click={reset}>Reset</button
			>
		</div>

		<div class="grid grow auto-rows-fr grid-cols-3 gap-3">
			{#each spaces as space}
				<button
					type="button"
					disabled={space.value !== null}
					on:click={() => handleClick(space)}
					class="icon flex border-collapse items-center justify-center bg-pink-400 text-3xl text-white"
				>
					{space.id}
					{#if space.value === spaceValue.cat}
						🐱
						<span class="sr-only">Cat</span>
					{/if}
					{#if space.value === spaceValue.taco}
						🌮
						<span class="sr-only">Taco</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</div>
