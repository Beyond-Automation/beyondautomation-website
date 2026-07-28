import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Beyond Automation",
    short_name: "Beyond Automation",
    description:
      "Practical AI-assisted automation tools for modern IT operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#02050d",
    theme_color: "#02050d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
