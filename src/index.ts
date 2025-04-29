export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>🚧 Maintenance In Progress 🚧 </h1>
<h1>Maintenance In Progress</h1>
		  <p>Thank you for your patience! We are currently finalizing an upgrade of our web server. This work will be complete by 10 AM PST.</p>
    <p>In the meantime, please enjoy the <a href="https://kpfa.org/player/?audio=live">KPFA Livestream</a> or browse our <a href="https://kpfa.org/archives/">episode archive.</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
