<script>
	import { PageHero } from 'statue-ssg';
</script>

<svelte:head>
	<title>Contact Pack 3472 | Cub Scouts</title>
	<meta name="description" content="Get in touch with Cub Scout Pack 3472" />
</svelte:head>

<div class="min-h-screen bg-white">
	<PageHero
		title="Contact Us"
		description="We'd love to hear from you!"
	/>

	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Email</h2>
			<p class="text-gray-700 mb-4">
				For general inquiries, please email us at:
			</p>
			<p class="text-xl font-semibold text-[var(--color-primary)]">
				cubmaster@pack3472.org
			</p>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Meeting Location</h2>
			<p class="text-gray-700">
				Pack meetings are held at our charter organization's facility. Contact us for specific location details and directions.
			</p>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Join Our Pack</h2>
			<p class="text-gray-700 mb-4">Interested in joining? Here's what you need to know:</p>
			<ol class="list-decimal list-inside text-gray-700 space-y-2">
				<li><strong>Eligibility:</strong> Youth in kindergarten through 5th grade</li>
				<li><strong>Registration:</strong> Contact us to attend a meeting and learn about registration</li>
				<li><strong>Fees:</strong> Annual registration fees apply (financial assistance available)</li>
			</ol>
		</section>

		<section class="mb-12 bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Volunteer</h2>
			<p class="text-gray-700 mb-4">
				Pack 3472 runs on volunteer power! We're always looking for parents and community members who want to make a difference in young lives.
			</p>
			<p class="text-gray-700 mb-4">Volunteer opportunities include:</p>
			<ul class="list-disc list-inside text-gray-700 space-y-2">
				<li>Den Leader</li>
				<li>Assistant Den Leader</li>
				<li>Committee Member</li>
				<li>Event Helper</li>
				<li>Merit Badge Counselor</li>
			</ul>
			<p class="text-gray-700 mt-4">Contact us to learn how you can get involved!</p>
		</section>
	</div>
</div>
