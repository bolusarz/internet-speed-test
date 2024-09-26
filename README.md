# Internet Speed Detector

This project is a web application designed to detect and display internet speed using different methods. It allows users to choose between three different options for testing their internet speed: by browser capabilities, by downloading an image, and by using Cloudflare's speed test.

## Demo
[https://internet-speed-test-gules.vercel.app/](https://internet-speed-test-gules.vercel.app/)

## Features

- **Multiple Speed Testing Options**: Choose between three different methods to test your internet speed:
    - **Browser**: Utilizes browser-based APIs to estimate your internet speed.
    - **Image**: Downloads a sample image file to calculate download speed.
    - **Cloudflare**: Uses Cloudflare's speed test to provide accurate results.
- **Dynamic UI**: The application dynamically updates the displayed component based on the selected speed test method.
- **Customizable**: Easily extendable to add more speed testing methods or modify the existing options.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/internet-speed-detector.git
   cd internet-speed-detector
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then, run the following command:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the Application**:
   Navigate to `http://localhost:5173` in your browser to see the app in action.

## Usage

1. Select one of the available options (`Browser`, `Image`, `Cloudflare`) from the radio buttons.
2. Based on your selection, a different component will be rendered to test the internet speed.

## Project Structure

- `App.tsx`: The main component that handles state management and rendering of different speed test components.
- `InternetSpeedComp.tsx`: A component that conditionally renders different speed test components based on the selected value.
- `components/`: Contains sub-components for each speed test option:
    - `ByBrowser.tsx`: Component for browser-based speed testing.
    - `ByImage.tsx`: Component for image-based speed testing.
    - `ByCloudfare.tsx`: Component for Cloudflare-based speed testing.
- `utils/`: Contains utility files such as options configuration for the radio group.

## Options Configuration

The options available for testing are defined in `utils/options.ts`:

```js
export const options = [
  { label: 'Browser', value: 'browser' },
  { label: 'Image', value: 'image' },
  { label: 'Cloudflare', value: 'cloudfare' }
];
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or feedback, feel free to reach out via [ayomikunadewusi@gmail.com](mailto:ayomikunadewusi@gmail.com).