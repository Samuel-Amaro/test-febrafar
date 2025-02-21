<div class="animate-pulse space-y-4">
	<div class="w-full rounded-lg border border-gray-200">
		<div class="grid grid-cols-5 rounded-t-lg bg-gray-200 p-3">
			<div class="h-4 w-full rounded bg-gray-300"></div>
			<div class="h-4 w-full rounded bg-gray-300"></div>
			<div class="h-4 w-full rounded bg-gray-300"></div>
			<div class="h-4 w-full rounded bg-gray-300"></div>
			<div class="h-4 w-full rounded bg-gray-300"></div>
		</div>
		{#each Array(5) as _, i}
			<div class="grid grid-cols-5 gap-3 border-b border-gray-100 p-3">
				<div>
					<div class="h-4 w-24 rounded bg-gray-300"></div>
					<div class="mt-1 h-3 w-32 rounded bg-gray-200"></div>
				</div>
				<div class="h-4 w-24 rounded bg-gray-300"></div>
				<div class="h-4 w-20 rounded bg-gray-300"></div>
				<div class="h-4 w-28 rounded bg-gray-300"></div>
				<div class="h-4 w-16 rounded bg-gray-300"></div>
			</div>
		{/each}
	</div>
	<div class="mt-4 flex justify-center space-x-2">
		<div class="h-8 w-8 rounded bg-gray-300"></div>
		<div class="h-8 w-8 rounded bg-gray-300"></div>
		<div class="h-8 w-8 rounded bg-gray-300"></div>
		<div class="h-8 w-8 rounded bg-gray-300"></div>
		<div class="h-8 w-8 rounded bg-gray-300"></div>
	</div>
</div>
