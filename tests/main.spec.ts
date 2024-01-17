import { expect, test } from '@playwright/test'
import { ElectronApplication, Page, _electron as electron } from 'playwright-core'

let electronApp: ElectronApplication;
let page: Page;

test.beforeAll(async () => {
  process.env.CI = 'e2e'

  const APP_EXECUTABLE_PATH = '/Applications/MyApp.app/Contents/MacOS/MyApp';
  
  electronApp = await electron.launch({
    executablePath: APP_EXECUTABLE_PATH
  })

  const appPath = await electronApp.evaluate(async ({ app }) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.getAppPath();
  });
  
  console.log(appPath);

  page = await electronApp.firstWindow({ timeout: 30000 });
  console.log('Page:', page)
})

test.afterAll(async () => {
  await electronApp.close()
})

test("on click of links on sidebar, relative pages should load", async () => {
  console.log('First test.');

  await page.waitForTimeout(2000);
});