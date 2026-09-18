export function GET() {
  return Response.json({ service: 'Rocha Profile Renderer', docs: 'docs/API.md', endpoint: '/api/profile', health: '/api/health', pages: ['identity','progress','finances','roleplay','licenses','properties','statistics','inventory'] });
}
