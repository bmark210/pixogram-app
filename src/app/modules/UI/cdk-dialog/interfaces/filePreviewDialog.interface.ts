import { Image } from "./image.interface";

export interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: Image | null;
}
