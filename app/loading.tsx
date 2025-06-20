import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <LoaderCircle className="h-10 w-10 animate-spin" />
    </div>
  );
};
export default Loading;
