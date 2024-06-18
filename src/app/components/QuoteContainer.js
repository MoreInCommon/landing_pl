import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react";

const QuoteContainer = ({ blok }) => {
  console.log("QuoteContainer", blok);
  const currentItems = blok?.items || [];
  return (
    <div {...storyblokEditable(blok)}>
      blok{" "}
      {currentItems.map((item) => (
        <StoryblokComponent key={item._uid} blok={item} />
      ))}
    </div>
  );
};

export default QuoteContainer;
