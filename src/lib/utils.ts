import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





interface PincodeDetails {
  pincode: string;
  city: string;
  state: string;
  tier: string;
  zone: string;
  location: string;
}


export async function getPincodeDetails(
  pincode: string
): Promise<PincodeDetails | null> {
  try {
    const response = await fetch("/pincodes.csv");
    const csvText = await response.text();

    const specialCities = ["Nagaland", "Tripura"];

    const parseCSVLine = (line: string): string[] => {
      const result: string[] = [];
      let currentField = "";
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          result.push(currentField);
          currentField = "";
        } else {
          currentField += char;
        }
      }

      result.push(currentField);
      return result;
    };

    const lines = csvText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    for (const line of lines) {
      if (!line.startsWith(pincode + ",")) {
        continue;
      }

      const fields = parseCSVLine(line);
      const [pin, city, state, tier, zone] = fields;

      if (pin === pincode) {
        let location = "REST OF INDIA";

        if (specialCities.some((specialCity) => state.includes(specialCity))) {
          location = "SPECIAL LOCATION";
        } else if (
          zone?.includes("East") &&
          (state?.includes("Bihar") ||
            state?.includes("BIHAR") ||
            state?.includes("Odisha") ||
            state?.includes("JHARKHAND") ||
            tier?.includes("Bihar") ||
            tier?.includes("BIHAR") ||
            tier?.includes("Odisha") ||
            tier?.includes("JHARKHAND"))
        ) {
          location = "ZONE";
        } else if (tier?.includes("Metro")) {
          location = "METRO";
        } else if (zone?.includes("LOCAL")) {
          location = "LOCAL";
        } else if (state?.includes("West Bengal")) {
          location = "STATE";
        }

        return {
          pincode: pin,
          city: city,
          state: state,
          tier: tier,
          zone: zone,
          location: location,
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Error processing pincode:", error);
    return null;
  }
}