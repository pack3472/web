<script>
	import { PageHero } from 'statue-ssg';
</script>

<svelte:head>
	<title>About Pack 3472 | Cub Scouts</title>
	<meta name="description" content="Learn about BSA Cub Scout Pack 3472 - our history, leadership, and mission" />
</svelte:head>

<div class="min-h-screen bg-white">
	<PageHero
		title="About Pack 3472"
		description="Building Character, Citizenship, and Fitness through Scouting"
	/>

	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Mission</h2>
			<p class="text-gray-700 mb-4">
				Pack 3472 is committed to the mission of the Boy Scouts of America: to prepare young people
				to make ethical and moral choices over their lifetimes by instilling in them the values of
				the Scout Oath and Scout Law.
			</p>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">The Cub Scout Promise</h2>
			<blockquote class="text-gray-700 italic border-l-4 border-[var(--color-secondary)] pl-4">
				I promise to do my best<br />
				To do my duty to God and my country,<br />
				To help other people, and<br />
				To obey the Law of the Pack.
			</blockquote>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">The Law of the Pack</h2>
			<blockquote class="text-gray-700 italic border-l-4 border-[var(--color-secondary)] pl-4">
				The Cub Scout follows Akela.<br />
				The Cub Scout helps the pack go.<br />
				The pack helps the Cub Scout grow.<br />
				The Cub Scout gives goodwill.
			</blockquote>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Pack Leadership</h2>
			<p class="text-gray-700 mb-4">
				Our pack is led by dedicated volunteer leaders who are committed to providing a safe, fun,
				and educational experience for all Scouts.
			</p>
			<ul class="list-disc list-inside text-gray-700 space-y-2">
				<li><strong>Cubmaster</strong> - Pack Leader</li>
				<li><strong>Committee Chair</strong> - Administrative Lead</li>
				<li><strong>Den Leaders</strong> - Lead individual dens by rank</li>
			</ul>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Meeting Information</h2>
			<p class="text-gray-700 mb-4">
				Pack meetings are held monthly. Den meetings are held weekly or bi-weekly depending on the den.
			</p>
			<p class="text-gray-700">
				For specific meeting times and locations, please <a href="/contact" class="text-[var(--color-primary)] underline hover:text-[var(--color-accent)]">contact us</a>.
			</p>
		</section>

		<section class="text-center py-8 bg-[var(--color-primary)] text-white rounded-lg">
			<h2 class="text-2xl font-bold mb-4">Join Us!</h2>
			<p class="mb-6">We welcome new families! Cub Scouts is open to youth in kindergarten through 5th grade.</p>
			<a href="/contact" class="inline-block bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
				Contact Us to Join
			</a>
		</section>
	</div>
</div>
