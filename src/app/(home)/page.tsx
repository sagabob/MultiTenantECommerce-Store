import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div >
      <div className="flex flex-col gap-y-4  max-w-md mx-auto">
        <div>
          <Button >Hello World</Button>
        </div>
        <div>
          <Input placeholder="Enter your name" />
        </div>
      </div>
    </div>
  );
}
