# Musicly

**Musicly** is a Next.js-based web application that allows users to stream and manage their music playlists effortlessly. The project provides a modern and intuitive interface with authentication and cloud-based storage, offering users a seamless experience to enjoy their favorite music.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and account management.
- **Playlist Management**: Create, edit, and delete playlists.
- **Music Streaming**: Play songs in real-time with a responsive player.
- **Search Functionality**: Easily find songs and albums.
- **Responsive UI**: Optimized for all screen sizes.

## Technologies Used

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS for a responsive UI
- **Authentication**: Firebase Auth for user login
- **Database**: Firebase Firestore for storing user data
- **Hosting**: Vercel for deployment

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- A Firebase project with Firestore enabled

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/IsThisHarsh/musicly.git
   cd musicly
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   - Rename `.env.example` to `.env.local`
   - Add Firebase API credentials (API key, auth domain, project ID, etc.)

4. **Run the development server**:

   ```bash
   npm run dev
   ```

## Usage

1. **Open the application**:  
   Navigate to `http://localhost:3000` in your browser.

2. **Sign up or log in** to access music streaming features.

3. **Create and manage playlists**, and start streaming your favorite songs.

## Screenshots

![Dashboard](screenshots/dashboard.png)  
*User dashboard displaying playlists and music player.*

![Music Player](screenshots/music_player.png)  
*Responsive music player with playback controls.*

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch (`feature/my-feature`).
3. Commit and push your changes.
4. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For further details, visit the repository: [Musicly GitHub Repo](https://github.com/IsThisHarsh/musicly).
