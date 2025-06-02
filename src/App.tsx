import "./index.css"; // contains @tailwind directives
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import grapeNoseImage from "./assets/GrapeNose_WineTastings_Background.jpg";
import grapeNoseLogo from "./assets/GrapeNose_Logo_Orange_v2.png";
import grapeNoseSanda from "./assets/GrapeNose_WineTastings_Sanda.jpg";
import { Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${grapeNoseImage})` }}
      />

      {/* centred Card */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <Card className="relative py-4 bg-white/80 backdrop-blur-sm shadow-xl w-full max-w-[470px]">

          {/* Instagram icon, top-right */}
          <a
            href="https://www.instagram.com/thegrapenose/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit The Grape Nose on Instagram"
            className="
            absolute top-4 right-4 z-20
            flex items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-grape-red
            w-6 h-6
          "
          >
            <Instagram className="w-5 h-5 text-black hover:text-grape-red transition-colors"   />
          </a>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Image
              alt="Grape Nose"
              className="object-contain rounded-xl"
              src={grapeNoseLogo}
              width={200}
            />
            <p className="text-sm font-bold pl-1.5 ">Sanda Silakaktina</p>
            <small className="text-tiny text-default-500 pl-1.5">
              private wine tastings
            </small>

            {/* <a
              href="https://www.instagram.com/thegrapenose/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit The Grape Nose on Instagram"
              className="
                flex items-center gap-1 pl-1.5
                text-tiny
                hover:text-grape-red
                focus:outline-none focus:ring-2 focus:ring-grape-red
              "
            >
              <Instagram className="w-3 h-3" />
            </a> */}

            <Button
              className="bg-gradient-to-tr from-grape-red to-red-400 text-white shadow-lg my-4 px-6"
              radius="sm"
              size="sm"
            >
              <a href="mailto:thegrapenose@gmail.com">Book today</a>
            </Button>
            {/* <a
              href="mailto:thegrapenose@gmail.com"
              className="text-tiny pl-1.5 pt-4 hover:text-grape-red focus:outline-none focus:ring-2 focus:ring-grape-red"
            >
              thegrapenose@gmail.com
            </a> */}
          </CardHeader>

          <CardBody className="overflow-visible py-2">
            <Image
              alt="Grape Nose"
              className="object-cover rounded-xl"
              src={grapeNoseSanda}
              width={470}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
