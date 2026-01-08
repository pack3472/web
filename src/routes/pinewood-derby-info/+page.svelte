<script>
	import { PageHero } from 'statue-ssg';
</script>

<svelte:head>
	<title>Pinewood Derby | Pack 3472 Cub Scouts</title>
	<meta name="description" content="Pinewood Derby information for Pack 3472 Cub Scouts" />
</svelte:head>

<div class="min-h-screen bg-white">
	<PageHero
		title="Pinewood Derby"
		description="One of the most exciting events of the year!"
	/>

	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">What is the Pinewood Derby?</h2>
			<p class="text-gray-700 mb-4">
				The Pinewood Derby has been a Cub Scout tradition since 1953. Each Scout receives an official Pinewood Derby kit containing a wooden block, plastic wheels, and metal axles. With help from a parent or guardian, Scouts shape and decorate their car, then race it on a specially designed track.
			</p>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Kit Distribution</h2>
			<p class="text-gray-700">
				Pinewood Derby kits will be distributed at a pack meeting prior to the race. Each registered Scout will receive one official kit.
			</p>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Official Rules</h2>
			<ul class="list-disc list-inside text-gray-700 space-y-2">
				<li>Cars must use only the official BSA Pinewood Derby kit components</li>
				<li><strong>Maximum weight:</strong> 5.0 ounces</li>
				<li><strong>Maximum width:</strong> 2-3/4 inches</li>
				<li><strong>Maximum length:</strong> 7 inches</li>
				<li>Wheels and axles must be from the official kit (may be polished but not modified)</li>
				<li>No starting devices, propellants, or loose materials allowed</li>
			</ul>
		</section>

		<section class="mb-12 bg-[var(--color-secondary)] bg-opacity-20 p-6 rounded-lg border-2 border-[var(--color-secondary)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Tips for a Great Car</h2>
			<ol class="list-decimal list-inside text-gray-700 space-y-2">
				<li><strong>Start Early</strong> - Don't wait until the last minute!</li>
				<li><strong>Design First</strong> - Sketch your car before cutting</li>
				<li><strong>Weight Matters</strong> - Use all 5 ounces for maximum speed</li>
				<li><strong>Smooth Axles</strong> - Polish axles for less friction</li>
				<li><strong>Straight Alignment</strong> - Make sure wheels are aligned</li>
				<li><strong>Have Fun</strong> - It's about the experience, not just winning!</li>
			</ol>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Race Day</h2>
			<p class="text-gray-700">
				Details about race day will be announced closer to the event. Plan to arrive early for check-in and weigh-in.
			</p>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Awards</h2>
			<p class="text-gray-700 mb-4">Awards are given for:</p>
			<ul class="list-disc list-inside text-gray-700 space-y-2">
				<li><strong>Speed</strong> - Fastest cars in each rank division</li>
				<li><strong>Design</strong> - Most creative, best paint job, and other design categories</li>
			</ul>
		</section>

		<section class="text-center py-8 bg-[var(--color-primary)] text-white rounded-lg">
			<h2 class="text-2xl font-bold mb-4">Questions?</h2>
			<p class="mb-6">Contact your Den Leader or the Cubmaster with any questions about the Pinewood Derby.</p>
			<a href="/contact" class="inline-block bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
				Contact Us
			</a>
		</section>
	</div>
</div>
