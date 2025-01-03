/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DB_API_KEY: string;
  readonly VITE_DB_AUTH_DOMAIN: string;
  readonly VITE_DB_PROJECT_ID: string;
  readonly VITE_DB_STORAGE_BUCKET: string;
  readonly VITE_DB_MESSAGING_SENDER_ID: string;
  readonly VITE_DB_APP_ID: string;
  readonly VITE_DB_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
