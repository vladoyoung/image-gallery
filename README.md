<div align="center">

  <h1 align="center">Image Gallery</h1>

  <p align="center">
      A simple image gallery web app built with Firebase realtime, TypeScript, React, Vite, and Tailwind CSS/DaisyUI, and deployed with Netlify.
    <br />
    <a href="https://vlad-image-gallery.netlify.app/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Demo example video: https://vlad-image-gallery.netlify.app/app_screenrecord.mp4

This project is a part of a programming task for a job application, which I will treat as a personal project and will extend further. The task was to build a simple image gallery web app with the following requirements:

* It should be able to handle a large amount of images seamlessly, but currently I've built it with less than 20 minutes so I don't exhaust my Firebase usage.
* The app should have CRUD functionality. Showcase for this is adding, deleting and updating images data.
* Design, usability and UX should be well thought-out and executed.
* The app should be responsive and work on mobile devices.

The app currently doesn't have user authentication and validation, so please don't create unneeded users or upload any inappropriate images. I will add user authentication and validation in the future.

You can use the following existing user credentials for the time being:

User1:
<br/>
username: `user1@mail.com`
<br/>
password: `123123`

John:
<br/>
username: `john@mail.com`
<br/>
password: `123123`

<!-- GETTING STARTED -->
## Getting Started

Keep in mind that the API keys and credentials for Firebase will be in an `.env` file which is not included in the repository. You can create your own Firebase project and add the keys in a `.env` file in the root directory of the project if you want to locally create this project.Otherwise please use the demo link.

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
2. Build the project
   ```sh
   npm run build
   ```
3. View the project
   ```sh
   npm run preview
   ```

Or you can use the dev enviroment with hot reload:
   ```sh
   npm run dev
   ```

You can additionally add  `-- --host` to the `npm run dev` command to view the project on your local network.

You will get a localhost links in the terminal in all cases.

<!-- ROADMAP -->
## Roadmap

A list of features that I plan to add to the project in the future when I have more time:

- [ ] Add multi-file upload
- [ ] Add full image popup
- [ ] Add image titles, categories and metadata
- [ ] Add automatic photo resize for thumbnails
- [ ] Add filter by categories or stars
- [ ] Add title search filter
- [ ] Add more complex user management - updating credentials
- [ ] Add user roles - admin, moderator, user
- [ ] Add numbered pagination, next/prev buttons or infinite-scroll
- [ ] Add notifications on events
- [ ] Remove daisyUI and generally improve the design and UX

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of  resources I found helpful and would like to give credit to.

* [Cand Dev - Full Stack Image Gallery App Tutorial](https://youtu.be/7mUnGh4XRek)
* [usePaginateCollection by ImJustChew](https://github.com/ImJustChew/usePaginateCollection)