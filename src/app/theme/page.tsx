import { ModeToggle } from "@/components/darkbutton/darkbutton";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "@/components/ui/cardWithForm";

export default function ThemePage() {
  return (
    <div>
      <div className="flex justify-between w-10/12  mx-auto px-5 py-1 items-center border">
        <div>
          <h1 className="">Logo</h1>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-5 w-10/12 mx-auto items-center my-10">
        <CardWithForm />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
