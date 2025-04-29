interface ExportedHandler {
	fetch(request: Request): Promise<Response>;
}

export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KPFA - Maintenance</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      background-color: #f8f9fa;
    }
    .maintenance-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin-top: 2rem;
    }
    h1 {
      color: #d62021;
      margin-bottom: 1.5rem;
      font-weight: 600;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
    }
    a {
      color: #d62021;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  </style>
</head>
<body>
  <div class="maintenance-container">
    <h1><span class="icon">🚧</span>Maintenance In Progress</h1>
    <p>Thank you for your patience! We are currently finalizing an upgrade of our web server. This work will be complete by 10 AM PST.</p>
    <p>In the meantime, please enjoy the <a href="https://kpfa.org/player/?audio=live">KPFA Livestream</a> or browse our <a href="https://kpfa.org/archives/">episode archive</a>.</p>
  </div>
</body>
</html>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler; 
