import './index.css';                               // contains @tailwind directives
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Image } from '@heroui/image';
import grapeNoseImage from './assets/GrapeNose_WineTastings_Background.jpg';
import grapeNoseLogo from './assets/GrapeNose_Logo_Black_v3.png';
import grapeNoseSanda from './assets/GrapeNose_WineTastings_Sanda.jpg';

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
        <Card className="py-4 bg-white/80 backdrop-blur-sm shadow-xl w-full max-w-[470px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Image
              alt="Grape Nose"
              className="object-contain rounded-xl"
              src={grapeNoseLogo}
              width={200}
            />
            <p className="text-tiny uppercase font-bold pl-1.5 text-grape-red ">Sanda Silakaktina</p>
            <small className="text-default-500 pl-1.5">Wine Tastings</small>
            {/* <h4 className="font-bold text-large">Grape Nose</h4> */}
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
