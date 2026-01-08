<script>
	import { PageHero } from 'statue-ssg';
</script>

<svelte:head>
	<title>FAQ | Pack 3472 Cub Scouts</title>
	<meta name="description" content="Common questions about Cub Scout Pack 3472" />
</svelte:head>

<div class="min-h-screen bg-white">
	<PageHero
		title="Frequently Asked Questions"
		description="Common questions about Cub Scouting and Pack 3472"
	/>

	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-6">General Questions</h2>

			<div class="space-y-6">
				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">What is Cub Scouts?</h3>
					<p class="text-gray-700">
						Cub Scouting is a year-round program designed for youth in kindergarten through fifth grade (ages 5-10). It's part of the Boy Scouts of America and focuses on building character, citizenship, and fitness through fun activities.
					</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">Who can join Pack 3472?</h3>
					<p class="text-gray-700">
						Any youth in kindergarten through 5th grade can join! Both boys and girls are welcome in Cub Scouts.
					</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">How much does it cost to join?</h3>
					<p class="text-gray-700">
						Annual registration fees are set by the Boy Scouts of America. Additional costs may include uniforms, activity fees, and camp fees. Financial assistance is available for families who need it.
					</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">When do you meet?</h3>
					<p class="text-gray-700">
						Pack meetings are typically held once a month. Den meetings (smaller groups by grade/rank) meet more frequently, usually weekly or bi-weekly. Contact us for our current schedule.
					</p>
				</div>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-6">Program Questions</h2>

			<div class="space-y-6">
				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">What ranks are in Cub Scouts?</h3>
					<p class="text-gray-700 mb-3">Cub Scout ranks are based on grade level:</p>
					<ul class="list-disc list-inside text-gray-700 space-y-1">
						<li><strong>Lion</strong> - Kindergarten</li>
						<li><strong>Tiger</strong> - 1st Grade</li>
						<li><strong>Wolf</strong> - 2nd Grade</li>
						<li><strong>Bear</strong> - 3rd Grade</li>
						<li><strong>Webelos</strong> - 4th Grade</li>
						<li><strong>Arrow of Light</strong> - 5th Grade</li>
					</ul>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">What activities do Cub Scouts do?</h3>
					<p class="text-gray-700 mb-3">Activities include:</p>
					<ul class="list-disc list-inside text-gray-700 space-y-1">
						<li>Camping and outdoor skills</li>
						<li>Service projects</li>
						<li>STEM activities</li>
						<li>Pinewood Derby racing</li>
						<li>Field trips</li>
						<li>Community events</li>
						<li>And much more!</li>
					</ul>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">Do parents need to be involved?</h3>
					<p class="text-gray-700">
						Yes! Cub Scouting is a family program. Parents/guardians are encouraged to participate in den and pack activities. Many parents also serve as volunteer leaders.
					</p>
				</div>
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-6">Getting Started</h2>

			<div class="space-y-6">
				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">How do I register my child?</h3>
					<p class="text-gray-700">
						Contact us to attend a meeting and learn about registration. You can also register online through the BSA website.
					</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">What do I need to buy?</h3>
					<p class="text-gray-700">
						New Scouts will need a uniform (shirt, neckerchief, slide). Used uniforms are often available. The Cub Scout handbook for your child's rank is also helpful.
					</p>
				</div>

				<div class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h3 class="text-lg font-semibold text-[var(--color-primary)] mb-2">Can my child try it before joining?</h3>
					<p class="text-gray-700">
						Absolutely! We encourage families to attend a meeting or two before registering to see if Cub Scouts is right for your family.
					</p>
				</div>
			</div>
		</section>

		<section class="text-center py-8 bg-[var(--color-primary)] text-white rounded-lg">
			<h2 class="text-2xl font-bold mb-4">Have More Questions?</h2>
			<p class="mb-6">We're here to help! Reach out to learn more about Pack 3472.</p>
			<a href="/contact" class="inline-block bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
				Contact Us
			</a>
		</section>
	</div>
</div>
