import SegmentationHeader from "@/app/components/SegmentationHeader";
import SegmentationContent from "../components/SegmentationContent";
import SegmentsQuiz from "../components/SegmentsQuiz";

export default function Home() {
  return (
    <>
      <SegmentationHeader />
      <SegmentationContent />
      <SegmentsQuiz />
    </>
  );
}
