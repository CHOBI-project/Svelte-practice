import { error } from "@sveltejs/kit";
import {data} from "$appRoutes/routing/data";

export function load({ params }) {
  const post = data.find((item) => item.directory === params.directory);
  
  if (!post) error(404);
  
  return {
    post
  }
}