import type { Guide } from "@/types/content";

import { accountsAndPasswordsGuides } from "./accounts-passwords";
import { attachAFileToAnEmail } from "./attach-a-file-to-an-email";
import { browserAndTabGuides } from "./browsers-tabs";
import { clearPhoneStorage } from "./clear-phone-storage";
import { emailGuides } from "./email";
import { emergencyFixGuides } from "./emergency-fixes";
import { findDownloadedFiles } from "./find-downloaded-files";
import { filesAndStorageGuides } from "./files-storage";
import { fixAPrinterThatIsOffline } from "./fix-a-printer-that-is-offline";
import { identifyASuspiciousPopUp } from "./identify-a-suspicious-pop-up";
import { laptopBasicsGuides } from "./laptop-basics";
import { manageTooManyBrowserTabs } from "./manage-too-many-browser-tabs";
import { phoneProblemGuides } from "./phone-problems";
import { printingGuides } from "./printing";
import { reconnectToWiFi } from "./reconnect-to-wi-fi";
import { resetAForgottenPassword } from "./reset-a-forgotten-password";
import { safetyAndScamGuides } from "./safety-scams";
import { wifiAndInternetGuides } from "./wifi-internet";

export const guides: Guide[] = [
  resetAForgottenPassword,
  ...accountsAndPasswordsGuides,
  clearPhoneStorage,
  ...phoneProblemGuides,
  ...laptopBasicsGuides,
  reconnectToWiFi,
  ...wifiAndInternetGuides,
  findDownloadedFiles,
  ...filesAndStorageGuides,
  attachAFileToAnEmail,
  ...emailGuides,
  manageTooManyBrowserTabs,
  ...browserAndTabGuides,
  fixAPrinterThatIsOffline,
  ...printingGuides,
  identifyASuspiciousPopUp,
  ...safetyAndScamGuides,
  ...emergencyFixGuides,
];
