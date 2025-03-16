import {data} from "$appRoutes/routing/data";

export function load() {
  return {
    summaries: data.map((item) => ({
      id: item.id,
      directory: item.directory,
      title: item.title,
    }))
  }
}