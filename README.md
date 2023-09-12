# LookerQueryCost-ChromeExtension

## About

This Chrome extension calculates the cost of running a query in Looker based on the volume of data processed. It enhances the Looker UI by appending the calculated cost to the query performance metrics displayed in the Looker Explore interface.

## Disclaimer

This is a simple, initial version of the extension and is not production-ready. The code is not maintained and is provided "as-is." Users may use and modify the code at their own risk. This project is merely an example to demonstrate how one might approach calculating query costs in Looker.

## Features

- Automatically calculates query cost
- Works with Looker Explore
- Supports different units: KB, MB, GB, and TB
- Customizable cost per TB
- Lightweight and easy to use

## Customization

### Changing the Cost Per TB

By default, the extension uses a rate of $5 per terabyte for calculating the cost. To change this rate, follow these steps:

1. Open the file `content.js` in a text editor.
2. Locate the variable `pricePerTB` near the top of the file.
3. Change the value to your desired rate. For example, to set the rate to $3 per terabyte, you would change the line to `const pricePerTB = 3;`.
4. Save the changes and reload the extension in Chrome.

## Installation

### From Source

1. Clone the GitHub repository:
    ```
    git clone https://github.com/your-username/LookerQueryCost-ChromeExtension.git
    ```

2. Open Google Chrome and go to `chrome://extensions/`.

3. Enable "Developer Mode" if it's not already enabled.

4. Click on "Load Unpacked" and select the directory where you cloned the repository to.

## Usage

1. Open Looker and navigate to the Explore interface.

2. Execute a query.

3. The cost of the query will be automatically calculated and displayed next to the query performance metrics.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
