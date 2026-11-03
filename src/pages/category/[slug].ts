// EmDash's built-in Categories widget links to /category/<slug>; send it to the blog route.
import type { APIRoute } from "astro";
export const GET: APIRoute = ({ params, redirect }) => redirect(`/blog/category/${params.slug}`, 301);
