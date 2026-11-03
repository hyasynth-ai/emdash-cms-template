// EmDash's built-in Search widget posts to /search; send it to the blog route, keeping ?q=.
import type { APIRoute } from "astro";
export const GET: APIRoute = ({ url, redirect }) => redirect(`/blog/search${url.search}`, 301);
