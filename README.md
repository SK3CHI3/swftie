# Custom Design Upload UI

A React application for custom design uploads with a clean and intuitive user interface. This project allows users to upload design files, add descriptions, and preview them in a modal before adding to cart.

![Design Upload UI](https://i.imgur.com/example.png)

## Features

- **Clean UI Design**: Modern and user-friendly interface
- **File Upload**: Upload design files with preview functionality
- **Description Input**: Add detailed descriptions for your designs
- **Modal Preview**: View uploaded designs and descriptions in a modal
- **Data Logging**: Console logging of data format for backend integration
- **Responsive Design**: Works on various screen sizes

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **CSS**: Custom styling for all components
- **FileReader API**: For handling file uploads and previews

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation header component
│   ├── Header.css        # Styles for header
│   ├── UploadDesign.jsx  # Main upload functionality component
│   ├── UploadDesign.css  # Styles for upload design
│   ├── Footer.jsx        # Footer with newsletter and links
│   └── Footer.css        # Styles for footer
├── App.jsx               # Main application component
├── App.css               # Application-wide styles
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SK3CHI3/swftie.git
   cd swftie
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Upload Design" button to select an image file
2. The file name will appear in the input field
3. Enter a description in the textarea
4. Click "Add To Cart" to see the modal with the image preview and description
5. The data format to be sent to the backend is logged to the console

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern e-commerce design upload interfaces
- Built with React and Vite for optimal performance
