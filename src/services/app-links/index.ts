import axios, { AxiosError } from "axios";

type AppType = "OCCUPIER" | "DEVELOPER";

const BACKEND_URL = "https://backend.proptryx.app"


interface AppDownloadSuccess {
  message?: string;
  url: string;
}

interface AppDownloadError {
  error: string;
}

const appDownloadServices = {
  download: async (type: AppType): Promise<AppDownloadSuccess | AppDownloadError> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/app/download`, {
        params: { type },
      });

      const { url }: AppDownloadSuccess = response.data;

      return { url };
    } catch (error) {
      if (error instanceof AxiosError)
        return {
          error: error.response?.data.detail || error.response?.data.error,
        };
      if (error instanceof Error) return { error: error.message };
      return { error: "Unknown error occurred" };
    }
  },
};

export default appDownloadServices;