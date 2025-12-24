import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: 'Introducing Cosmo Studio 1.0',
    excerpt: 'The all-in-one AI command center is finally here. Learn about the journey and what comes next.',
    date: 'Dec 12, 2024',
    slug: '#',
  },
  {
    title: 'How to use Local Models with Ollama',
    excerpt: 'A step-by-step guide to setting up local LLMs and connecting them to Cosmo Studio for privacy-first chat.',
    date: 'Dec 10, 2024',
    slug: '#',
  },
  {
    title: 'Comparing GPT vs Claude 3.5 Sonnet',
    excerpt: 'We put the top models to the test for coding, writing, and reasoning tasks.',
    date: 'Dec 05, 2024',
    slug: '#',
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Latest Updates</h2>
          <a href="#" className="text-primary hover:underline flex items-center gap-1">
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video rounded-xl bg-muted mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
