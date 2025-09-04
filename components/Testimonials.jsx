import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const reviews = [
  {
    name: 'Sarah Johnson',
    username: '@sarahj',
    body: "This AI Tool kit has been a game-changer for our startup. The OpenAI integration is seamless and the documentation is excellent. We built our MVP in just 2 weeks!",
    img: 'https://avatar.vercel.sh/sarahj',
  },
  {
    name: 'Michael Chen',
    username: '@mikec',
    body: "Amazing starter kit! The code quality is top-notch and the pre-built examples saved us months of development time. Highly recommended for AI SaaS projects.",
    img: 'https://avatar.vercel.sh/mikec',
  },
  {
    name: 'Emily Rodriguez',
    username: '@emilyr',
    body: "The best AI starter kit I've used. Everything is well-structured and the authentication system works perfectly. Our team was up and running in no time.",
    img: 'https://avatar.vercel.sh/emilyr',
  },
  {
    name: 'David Park',
    username: '@davidp',
    body: "Incredible value! The Next.js setup with TypeScript and all the AI integrations pre-configured saved us weeks of setup time. Worth every penny.",
    img: 'https://avatar.vercel.sh/davidp',
  },
  {
    name: 'Lisa Wang',
    username: '@lisaw',
    body: "Professional grade code and excellent documentation. The AI examples are comprehensive and the support is outstanding. Perfect for enterprise projects.",
    img: 'https://avatar.vercel.sh/lisaw',
  },
  {
    name: 'Alex Thompson',
    username: '@alext',
    body: "As a solo developer, this kit gave me everything I needed to compete with larger teams. The AI features are powerful and easy to customize.",
    img: 'https://avatar.vercel.sh/alext',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-white/10 bg-white/5 hover:bg-white/10',
        'backdrop-blur-sm transition-all duration-300'
      )}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a0b23] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0a0b23] to-transparent"></div>
    </div>
  );
};

export default Testimonials;