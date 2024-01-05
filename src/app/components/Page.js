import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {console.log(blok.body)}
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
