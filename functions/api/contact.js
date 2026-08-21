// Cloudflare Pages Function — handles POST /api/contact
//
// This is a stub. It validates the incoming submission and returns success,
// but does NOT send an email yet — no email provider is wired up, and no
// credentials are hardcoded here (never commit API keys to the repo).
//
// To make this functional, connect a transactional email provider (e.g.
// Resend, Postmark, SendGrid) or forward to a service like Cloudflare Email
// Routing. Store the provider's API key as a Cloudflare Pages environment
// variable (Settings -> Environment variables), and read it here via
// `context.env.YOUR_KEY_NAME`. See README.md for details.

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const required = ['name', 'email', 'service', 'message'];
    for (const field of required) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
        return new Response(JSON.stringify({ error: `Missing required field: ${field}` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // TODO: send the submission via your email provider of choice, e.g.:
    //
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'Compassline Website <noreply@compasslinetechnology.com>',
    //     to: 'hello@compasslinetechnology.com',
    //     subject: `New inquiry from ${body.name}`,
    //     text: JSON.stringify(body, null, 2),
    //   }),
    // });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
