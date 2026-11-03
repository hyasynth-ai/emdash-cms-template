// EmDash's built-in Tags widget links to /tag/<slug>; send it to the blog route.
import type { APIRoute } from "astro";
export const GET: APIRoute = ({ params, redirect }) => redirect(`/blog/tag/${params.slug}`, 301);
