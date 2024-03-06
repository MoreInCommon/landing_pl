import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Project from "@/app/components/Project";
import Newsletter from "@/app/components/Newsletter";
import Button from "@/app/components/Button";
import CustomSlider from "../components/Slider";

export default async function Home() {
  return (
    <>
      <CustomSlider />
      <CustomSlider fade />
      <div className="inline-block heading-underline green-heading-underline">
        <h1 className="text-black text-h1 font-bold mt-2 pr-4 relative z-[1]">Segmentacja</h1>
      </div>
      <p className="text-black max-w-[950px] w-full mt-3 text-bodyRegular">
        Badanie z 2023 roku na temat stosunku Polaków do klimatu, oparte na ankietach wśród 4090
        osób i ponad 100 wywiadach, różni się od innych badań tym, że koncentruje się na wartościach
        moralnych, poczuciu sprawczości, tożsamościach oraz postawach wobec zmian i innych osób,
        zamiast na demografii.
      </p>
    </>
  );
}
