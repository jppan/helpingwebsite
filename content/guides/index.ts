import type { Guide } from "@/types/content";

import { attachAFileToAnEmail } from "./attach-a-file-to-an-email";
import { clearPhoneStorage } from "./clear-phone-storage";
import { findDownloadedFiles } from "./find-downloaded-files";
import { fixAPrinterThatIsOffline } from "./fix-a-printer-that-is-offline";
import { identifyASuspiciousPopUp } from "./identify-a-suspicious-pop-up";
import { manageTooManyBrowserTabs } from "./manage-too-many-browser-tabs";
import { reconnectToWiFi } from "./reconnect-to-wi-fi";
import { resetAForgottenPassword } from "./reset-a-forgotten-password";

export const guides: Guide[] = [
  resetAForgottenPassword,
  reconnectToWiFi,
  findDownloadedFiles,
  clearPhoneStorage,
  manageTooManyBrowserTabs,
  attachAFileToAnEmail,
  fixAPrinterThatIsOffline,
  identifyASuspiciousPopUp,
];
