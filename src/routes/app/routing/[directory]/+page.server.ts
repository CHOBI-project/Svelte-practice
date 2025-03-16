import { data } from "../data";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const post = data.find((item) => item.directory === params.directory);
  
  if (!post) error(404);
  
  return {
    post
  }
}