'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { toast } from 'sonner';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

const cardsData = [
  {
    title: "Get the PropTryx Occupier App",
    description: "Perfect for businesses looking for commercial spaces. Browse verified listings, schedule visits, and manage your property search efficiently.",
    points: [
      "Search & filter properties",
      "Virtual property tours",
      "Save favorites & compare",
      "Direct communication"
    ],
    appType: "OCCUPIER" as const,
    link: "https://play.google.com/store/apps/details?id=com.occupier.proptryx_occupier&hl=en_IN"
  },
  {
    title: "Get the PropTryx Developer App",
    description: "Built for property owners and developers. List properties, manage inquiries, and close deals faster with our comprehensive tools.",
    points: [
      "List properties easily",
      "Manage inquiries",
      "Track deal progress",
      "Analytics dashboard"
    ],
    appType: "DEVELOPER" as const,
    link: "https://play.google.com/store/apps/details?id=com.developer.proptryx_developer&hl=en_IN"
  }
] as const;

const DownloadApp = () => {
  const handleDownloadRedirect = (appType: 'OCCUPIER' | 'DEVELOPER') => {
    const card = cardsData.find((c) => c.appType === appType);
    if (card?.link) {
      window.open(card.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id="apps" className="w-full h-full bg-gray flex flex-col items-center justify-start relative overflow-hidden py-4 md:py-8 max-w-screen-2xl mx-auto px-4 md:px-14 md:mb-6">
      <div className="w-full z-10 relative md:px-10 py-8 md:py-12 min-h-[280px] md:min-h-[300px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 md:gap-10 max-w-6xl">
          {cardsData.map((card) => (
            <Card
              key={card.appType}
              className='p-6 md:p-10'
            >
              <CardHeader className="">
                <CardTitle className="text-2xl md:text-3xl font-bold text-black leading-tight font-spaceGrotesk text-left">
                  {card.title}
                </CardTitle>
                <p className="font-manrope text-base md:text-lg leading-relaxed mt-2 text-left py-3 md:py-6 text-dull">
                  {card.description}
                </p>
              </CardHeader>
              <CardContent className="py-2 md:py-4 flex-1 flex flex-col justify-between">
                <ul className="space-y-3 mb-3 md:mb-6">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <div className="size-1.5 bg-black rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"/>
                      <span className="text-sm md:text-base font-medium text-dull font-manrope leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="black"
                  className='w-fit mt-3 md:mt-4'
                  onClick={() => handleDownloadRedirect(card.appType)}
                >
                  Download App
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
