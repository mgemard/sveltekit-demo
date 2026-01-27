type Post = {
  slug: string;
  title: string;
  date: string;
};

const modules = import.meta.glob('/src/posts/*.md', { eager: true });

for (const [path, mod] of Object.entries(modules)) {
console.log(path, mod.metadata);
}

export const allPosts: Post[] = Object.entries(modules).map(
  ([path, mod]: [string, any]) => {
    if (!mod.metadata) {
      throw new Error(`Missing frontmatter in ${path}`);
    }

    const slug = path.split('/').pop()!.replace('.md', '');

    return {
      slug,
      title: mod.metadata.title,
      date: mod.metadata.date
    };
  }
).sort(
  (a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
);