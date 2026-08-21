# Adding a resource article

This folder is a content collection. To publish an article:

1. Create a new Markdown file here, e.g. `what-is-dns.md`.
2. Add frontmatter matching the schema in `src/content/config.ts`:

   ```md
   ---
   title: "What Is DNS and Why Does It Matter?"
   description: "A plain-English explanation of DNS for small business owners."
   publishDate: 2026-09-01
   relatedServices: ["technology-services"]
   ---

   Article content goes here, written in Markdown.
   ```
3. The article will automatically appear on `/resources` and be rendered at
   `/resources/what-is-dns` once `draft` is not set to `true`.

Only add an article when there's real, useful content to publish — see the
project brief for the suggested topic list. Do not add placeholder or filler
articles just to populate the section.
