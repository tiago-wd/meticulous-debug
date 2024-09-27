# Headers Test Application

This application is designed to debug an issue with custom headers being stripped when using the Meticulous script.

## Issue Description

We're investigating a problem where custom headers (specifically X-MagicBell headers) are being removed from API requests to MagicBell when the Meticulous script is loaded.

## Setup and Debugging Steps

1. Clone the repository and install dependencies:
   ```
   git clone [repository-url]
   cd [project-directory]
   yarn install
   ```

2. Start the application:
   ```
   yarn nx serve
   ```

3. To debug the issue:

   a. First, comment out the line in `src/index.html` where it loads the Meticulous script:
      ```html
      <!-- <script src="https://snippet.meticulous.ai/v1/meticulous.js"></script> -->
      ```

   b. Access the application in your browser (usually at http://localhost:4200).

   c. Open the browser's Developer Tools and go to the Network tab.

   d. Check the headers of the request to the MagicBell API (https://api.magicbell.com). You should see the X-MagicBell headers present.

   e. Now, uncomment the Meticulous script import in `src/index.html`:
      ```html
      <script src="https://snippet.meticulous.ai/v1/meticulous.js"></script>
      ```

   f. Refresh the application in your browser.

   g. Check the headers of the MagicBell API request again. You'll notice that the X-MagicBell headers are now missing.

## Expected Behavior

The X-MagicBell headers should be present in the API requests regardless of whether the Meticulous script is loaded or not.

## Actual Behavior

The X-MagicBell headers are present when the Meticulous script is not loaded, but they disappear when the script is included.
