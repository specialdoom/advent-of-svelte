<script lang="ts">
	let { icon, title, children } = $props<{ icon: any; title: string; children: any }>();
</script>

<div class="flex justify-between border rounded-xl dark:border-gray-800">
	<div class="p-4 md:p-5">
		<div class="flex items-center gap-x-2">
			<p class="text-sm font-semibold text-gray-500">
				{title}
			</p>
		</div>

		<h3 class="mt-2 text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
			{@render children()}
		</h3>
	</div>
	<div class="p-4 md:p-5 text-4xl">
		{@render icon()}
	</div>
</div>
