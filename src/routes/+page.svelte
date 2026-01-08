<script>
	import { Hero } from 'statue-ssg';
</script>

<svelte:head>
	<title>Pack 3472 - Cub Scouts</title>
	<meta name="description" content="BSA Cub Scout Pack 3472 - Building Character, Citizenship, and Fitness through Scouting" />
</svelte:head>

<div class="min-h-screen bg-linear-to-b from-(--color-hero-from) via-(--color-hero-via) to-(--color-hero-to)">
	<Hero
		title="Welcome to Pack 3472"
		subtitle="Cub Scouts BSA"
		description="Building Character, Citizenship, and Fitness through Scouting"
		primaryButtonText="Join Our Pack"
		primaryButtonHref="/contact"
		secondaryButtonText="Learn More"
		secondaryButtonHref="/about"
	/>

	<div class="container mx-auto px-4 py-16">
		<!-- What is Cub Scouting -->
		<section class="max-w-4xl mx-auto mb-16 text-center">
			<h2 class="text-3xl font-bold text-white mb-6">What is Cub Scouting?</h2>
			<p class="text-lg text-gray-200 mb-8">
				Cub Scouting is a year-round program designed for boys and girls in kindergarten through fifth grade (ages 5-10). The program helps develop character, citizenship, and mental and physical fitness.
			</p>
		</section>

		<!-- Features Grid -->
		<section class="max-w-5xl mx-auto mb-16">
			<div class="grid md:grid-cols-3 gap-8">
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
					<div class="text-4xl mb-4">🏕️</div>
					<h3 class="text-xl font-bold text-white mb-2">Outdoor Adventures</h3>
					<p class="text-gray-200">Camping, hiking, and learning outdoor skills in a fun, safe environment.</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
					<div class="text-4xl mb-4">🤝</div>
					<h3 class="text-xl font-bold text-white mb-2">Character Building</h3>
					<p class="text-gray-200">Developing leadership, teamwork, and ethical decision-making skills.</p>
				</div>
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
					<div class="text-4xl mb-4">🏆</div>
					<h3 class="text-xl font-bold text-white mb-2">Fun Activities</h3>
					<p class="text-gray-200">Pinewood Derby, STEM projects, community service, and more!</p>
				</div>
			</div>
		</section>

		<!-- Quick Links -->
		<section class="max-w-4xl mx-auto mb-16">
			<h2 class="text-3xl font-bold text-white mb-8 text-center">Quick Links</h2>
			<div class="grid md:grid-cols-2 gap-6">
				<a href="/about" class="block bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<h3 class="text-xl font-bold text-white mb-2">About Our Pack →</h3>
					<p class="text-gray-200">Learn about our mission, leadership, and meeting schedule.</p>
				</a>
				<a href="/faq" class="block bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<h3 class="text-xl font-bold text-white mb-2">FAQ →</h3>
					<p class="text-gray-200">Find answers to common questions about Cub Scouting.</p>
				</a>
				<a href="/pinewood-derby-info" class="block bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<h3 class="text-xl font-bold text-white mb-2">Pinewood Derby →</h3>
					<p class="text-gray-200">Information about our annual Pinewood Derby event.</p>
				</a>
				<a href="/contact" class="block bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
					<h3 class="text-xl font-bold text-white mb-2">Contact Us →</h3>
					<p class="text-gray-200">Get in touch to join or learn more about Pack 3472.</p>
				</a>
			</div>
		</section>

		<!-- CTA -->
		<section class="max-w-3xl mx-auto text-center py-12 bg-white/10 backdrop-blur-sm rounded-lg">
			<h2 class="text-3xl font-bold text-white mb-4">Ready to Join the Adventure?</h2>
			<p class="text-lg text-gray-200 mb-8">
				We welcome new Scouts and families throughout the year!
			</p>
			<a href="/contact" class="inline-block bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg">
				Contact Us to Join
			</a>
		</section>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
