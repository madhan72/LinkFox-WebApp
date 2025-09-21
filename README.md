# URL Shortening Service

A modern, responsive URL shortening application built with Angular 17 and Angular Material UI.

## Context & Purpose

This application provides a comprehensive URL shortening service similar to bit.ly or tinyurl.com. It allows users to convert long, unwieldy URLs into short, manageable links that are easier to share and track.

### Key Use Cases:

- **Social Media Sharing**: Shorten long URLs for Twitter, LinkedIn, and other platforms with character limits
- **Email Marketing**: Create clean, professional-looking links for email campaigns
- **Analytics Tracking**: Monitor click-through rates and user engagement
- **Brand Management**: Use custom aliases to maintain brand consistency
- **QR Code Generation**: Short URLs work better for QR codes and mobile scanning

### Business Value:

- **Improved User Experience**: Clean, short links are more user-friendly
- **Analytics Insights**: Track link performance and user behavior
- **Professional Appearance**: Custom aliases enhance brand credibility
- **Space Efficiency**: Ideal for character-limited platforms and print materials

## Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Custom Aliases**: Option to create custom aliases for shortened URLs
- **Analytics Dashboard**: View past URLs with click statistics and analytics
- **Search Functionality**: Search through previously shortened URLs
- **Responsive Design**: Fully responsive design that works on all devices
- **Material UI**: Modern, clean interface using Angular Material components
- **Real-time Updates**: Live updates and feedback for user actions

## Technology Stack

- **Frontend**: Angular 17 (Latest LTS)
- **UI Framework**: Angular Material 17
- **Styling**: CSS3 with Material Design
- **HTTP Client**: Angular HttpClient
- **Forms**: Angular Reactive Forms
- **Backend Ready**: Configured for .NET Core backend on port 8080
- **Environment Configuration**: Separate development and production settings
- **Mock Data**: Built-in mock service for development and testing

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── url-shortener/
│   │       ├── url-shortener.component.ts
│   │       ├── url-shortener.component.html
│   │       └── url-shortener.component.css
│   ├── models/
│   │   └── url.model.ts
│   ├── services/
│   │   └── url.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.css
└── index.html
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.10.0 or higher)
- **npm** (v9.0.0 or higher) - comes with Node.js
- **Angular CLI** (v17.0.0 or higher)
- **Git** (for cloning the repository)

### Step 1: Install Node.js and npm

#### Windows:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Verify installation by opening Command Prompt and running:
   ```bash
   node --version
   npm --version
   ```

#### macOS:

1. **Using Homebrew** (recommended):
   ```bash
   brew install node
   ```
2. **Or download from** [nodejs.org](https://nodejs.org/)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### Linux (Ubuntu/Debian):

```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### Step 2: Install Angular CLI

Once Node.js and npm are installed, install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Verify Angular CLI installation:

```bash
ng version
```

### Step 3: Clone the Repository

Clone this repository to your local machine:

```bash
# Using HTTPS
git clone https://github.com/your-username/url-shortener.git

# Or using SSH (if you have SSH keys set up)
git clone git@github.com:your-username/url-shortener.git

# Navigate to the project directory
cd url-shortener
```

### Step 4: Install Project Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:

- Angular 17 framework
- Angular Material UI components
- All development dependencies
- TypeScript and other build tools

### Step 5: Start the Development Server

Start the local development server:

```bash
npm start
```

**Alternative commands:**

```bash
# Using Angular CLI directly
ng serve

# Start with specific port
ng serve --port 4200

# Start and open browser automatically
ng serve --open
```

### Step 6: Access the Application

1. Open your web browser
2. Navigate to `http://localhost:4200`
3. The application will automatically reload when you make changes to the source files

### Troubleshooting

#### Port Already in Use

If port 4200 is already in use, Angular CLI will prompt you to use a different port. Type `y` to accept.

#### Permission Issues (macOS/Linux)

If you encounter permission errors, you may need to use `sudo` or configure npm to use a different directory:

```bash
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

#### Clear npm Cache

If you encounter installation issues:

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

## Quick Start (For Experienced Developers)

If you already have Node.js, npm, and Angular CLI installed:

```bash
# Clone and setup
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install

# Start development server
npm start

# Open browser to http://localhost:4200
```

## Usage

### Shortening URLs

1. Enter a long URL in the "Enter Long URL" field
2. Optionally, provide a custom alias
3. Click "Shorten URL" button
4. Copy the generated short URL

### Viewing Analytics

- The "Past URLs" section displays all previously shortened URLs
- View click counts, IP addresses, and browser information
- Use the search functionality to find specific URLs
- Navigate through pages using the pagination controls

## API Integration

The application is configured to work with a .NET Core backend running on port 8080. The service includes placeholder implementations that can be easily replaced with actual API calls.

### Backend Configuration

The API base URL is configured in the environment files:

- **Development**: `http://localhost:8080/api/v1` (see `src/environments/environment.ts`)
- **Production**: Update `src/environments/environment.prod.ts` with your production API URL

### Backend Endpoints Expected

- `POST /api/v1/urls/shorten` - Create a shortened URL
- `GET /api/v1/urls` - Get paginated list of URLs with analytics
- `GET /api/v1/urls/{alias}/redirect` - Redirect to original URL

### Sample API Request/Response

**Shorten URL Request:**

```json
{
  "longUrl": "https://example.com/very-long-url",
  "alias": "custom-alias"
}
```

**Response:**

```json
{
  "success": true,
  "message": "URL shortened successfully",
  "data": {
    "id": 1,
    "longUrl": "https://example.com/very-long-url",
    "shortUrl": "http://short.url/custom-alias",
    "alias": "custom-alias",
    "clickCount": 0,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Features in Detail

### Form Validation

- URL format validation
- Custom alias pattern validation
- Real-time error messages
- Disabled submit button during processing

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized layouts
- Touch-friendly interface
- Adaptive table layouts

### User Experience

- Loading indicators
- Success/error notifications
- Copy to clipboard functionality
- Keyboard navigation support

## Development

### Development Workflow

1. **Start Development Server**:

   ```bash
   npm start
   ```

   The app will automatically reload when you make changes.

2. **Code Structure**:

   - `src/app/components/` - Angular components
   - `src/app/services/` - Business logic and API calls
   - `src/app/models/` - TypeScript interfaces and types
   - `src/environments/` - Environment-specific configurations

3. **Making Changes**:
   - Edit files in the `src/` directory
   - The development server will automatically reload
   - Check the browser console for any errors

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

**Production build with optimization**:

```bash
npm run build -- --configuration production
```

### Running Tests

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --code-coverage
```

### Code Quality

The project follows Angular style guidelines and uses TypeScript strict mode.

**Linting**:

```bash
ng lint
```

**Code Formatting**:
The project is configured to work with popular code formatters like Prettier.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Backend Integration Notes

To integrate with your .NET Core backend:

1. Update the `baseUrl` in `src/app/services/url.service.ts`
2. Replace mock implementations with actual HTTP calls
3. Ensure CORS is configured on your backend
4. Update the API response models if needed

## Deployment

The application can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Azure Static Web Apps

Build the application for production and upload the `dist/` folder contents.
