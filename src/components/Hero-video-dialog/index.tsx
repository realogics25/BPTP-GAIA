import { HeroVideoDialog } from "../ui/HeroVideoDialog";
import thumbnail from '/Vertigreens-New-Banner-1.jpg';

export function HeroVideoDialogVideo() {
  return (
    <div className="relative mx-5 md:mx-20 py-10 sm:py-12 lg:py-10">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qLXFZF8lQGw"
        thumbnailSrc={thumbnail}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qLXFZF8lQGw"
        thumbnailSrc={thumbnail}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
