<script>
</script>

<svelte:head>
	<title>Contact | Pack 3472 Cub Scouts</title>
	<meta name="description" content="Contact Cub Scout Pack 3472 in Leawood, Kansas. Email us or fill out our contact form." />
</svelte:head>

<div class="min-h-screen bg-[var(--color-background)]">
	<!-- Header -->
	<div class="bg-[var(--color-primary)] text-white py-16">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
			<p class="text-xl text-gray-200">We'd love to hear from you!</p>
		</div>
	</div>

	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Info -->
			<div>
				<section class="mb-8">
					<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-4">Get In Touch</h2>
					<p class="text-gray-700 mb-6">
						Fill out the form and one of our leaders will get back with you.
						Alternatively, you can send an email directly.
					</p>
				</section>

				<section class="mb-8">
					<h3 class="text-lg font-bold text-[var(--color-primary)] mb-2">Email</h3>
					<a href="mailto:cubmaster@pack3472.org" class="text-xl text-[var(--color-primary)] hover:underline">
						cubmaster@pack3472.org
					</a>
				</section>

				<section class="mb-8">
					<h3 class="text-lg font-bold text-[var(--color-primary)] mb-2">Location</h3>
					<p class="text-gray-700">Leawood, KS</p>
					<p class="text-gray-600 text-sm mt-1">
						Chartered by Prairie Star Elementary School
					</p>
				</section>

				<section class="bg-[var(--color-secondary)] bg-opacity-20 p-6 rounded-lg border-2 border-[var(--color-secondary)]">
					<h3 class="text-lg font-bold text-[var(--color-primary)] mb-2">Find Us Online</h3>
					<a href="https://beascout.scouting.org/list/?zip=66224&program%5B%5D=pack" target="_blank" rel="noopener noreferrer" class="text-[var(--color-primary)] hover:underline">
						Find us on BeAScout.org →
					</a>
				</section>
			</div>

			<!-- Contact Form -->
			<div>
				<form class="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
					<h2 class="text-2xl font-bold text-[var(--color-primary)] mb-6">Send a Message</h2>

					<div class="mb-4">
						<label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							class="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							placeholder="Your name"
							required
						/>
					</div>

					<div class="mb-4">
						<label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							class="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							placeholder="your.email@example.com"
							required
						/>
					</div>

					<div class="mb-4">
						<label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							class="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							placeholder="What is this about?"
						/>
					</div>

					<div class="mb-6">
						<label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							class="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
							placeholder="Your message..."
							required
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full bg-[var(--color-primary)] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
					>
						Send Message
					</button>

					<p class="text-gray-500 text-sm mt-4 text-center">
						Note: Form submissions will be sent to cubmaster@pack3472.org
					</p>
				</form>
			</div>
		</div>
	</div>
</div>
