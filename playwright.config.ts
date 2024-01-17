import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  maxFailures: 2,
  timeout: 5 * 60 * 1000,
}

export default config