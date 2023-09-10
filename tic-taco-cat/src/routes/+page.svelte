<script lang="ts">
	import '../app.css';

	enum spaceValue {
		cat,
		taco
	}
	interface Space {
		id: number;
		name: string;
		value: spaceValue | null;
	}
	const spaces: Space[] = [
		{
			id: 0,
			name: 'top-left',
			value: null
		},
		{
			id: 1,
			name: 'top-middle',
			value: null
		},
		{
			id: 2,
			name: 'top-right',
			value: null
		},
		{
			id: 3,
			name: 'middle-left',
			value: null
		},
		{
			id: 4,
			name: 'middle-middle',
			value: null
		},
		{
			id: 5,
			name: 'middle-right',
			value: null
		},
		{
			id: 6,
			name: 'bottom-left',
			value: null
		},
		{
			id: 7,
			name: 'bottom-middle',
			value: null
		},
		{
			id: 8,
			name: 'bottom-right',
			value: null
		}
	];
</script>

<div class="container mx-auto h-screen py-10">
	<div class="flex h-full flex-col">
		<h1 class="mb-5 text-center text-3xl">Tic Taco Cat</h1>
		<div class="grid grow auto-rows-fr grid-cols-3 gap-3">
			{#each spaces as space}
				<div class="flex border-collapse items-center justify-center bg-pink-400">
					{space.name}
				</div>
			{/each}
		</div>
	</div>
</div>
