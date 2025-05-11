<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
--



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Seth Samuel Mission0 Level 5</h3>

  <p align="center">
    This is the first mission in the level 5 course. 
    <br />
    <br />
    <a href="https://mission0.sethsamuel.dev">View Site: https://mission0.sethsamuel.dev</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is the my submission for my mission 0 in mission ready level 5 Advanced Developer program. \
We were required to implement a wire frame for our mock client "Marketing Association NZ"  
It is mobile responsive and has a side menu.

### Desktop

<div align="center" >
<img  src="https://f004.backblazeb2.com/file/mission-ready/Screenshot+2025-05-10+193726.png" width=80% />
</div>

### Mobile

<div align="center" >
<img  src="https://f004.backblazeb2.com/file/mission-ready/Screenshot+2025-05-10+193741.png" height=50% />
</div>

### Mobile menu
<div align="center" >
<img  src="https://f004.backblazeb2.com/file/mission-ready/Screenshot+2025-05-10+193748.png" height=50% />
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You will need to install npm to build and run the website.

- npm
  ```sh
  npm install npm@latest -g
  ```
#### Optional 
- docker 
  installation: https://docs.docker.com/engine/install/

### Installation in dev mode

1. Clone the repo
   ```sh
   git clone https://github.com/SethSamuelCode/MissionReadyLvl5-mission0.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. run in dev mode
   ```sh
    npm run dev
   ```
4. connect to the webste
   ```sh
   http://localhost:5173
   ```

### Installation in production 

after installing node as above. 

1. Clone the repo
   ```sh
   git clone https://github.com/SethSamuelCode/MissionReadyLvl5-mission0.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Build the project 
    ```sh
    npm run build
    ```
4.  you should now have a folder called "dist" in the root directory. 
    These are the "compiled" website files and can be placed in the appropriate directory of a webserver and served to the web. 

### Installation via docker 

1. Clone the repo
   ```sh
   git clone https://github.com/SethSamuelCode/MissionReadyLvl5-mission0.git
   ```
2. enter the docker folder 
    ```sh
    cd docker
    ```
3. build the image
    ```sh
    docker build . -t mission0
   ```
4. Run the image to test it works
    ```sh
    docker --rm -it -p9090:80 mission0
    ```
    You can now to go http://localhost:9090 to see the website

   stop the container by pressing ```crtl + c``` on your keyboard

5. Deploy image to survive system reboots
    ```sh
    docker run --rm -d -p9090:80 --name mission0 mission0
   ```
   stop the container with 
   ```sh
   docker stop mission0 
   ```

### Installation via docker compose 
1. Clone the repo
   ```sh
   git clone https://github.com/SethSamuelCode/MissionReadyLvl5-mission0.git
   ```
2. enter the docker folder 
    ```sh
    cd docker
    ```
3. start the docker image with docker compose
    ```sh
    docker compose up
   ```
   The website will now be visible via http://localhost:9090 

    Stop the container by pressing ```crtl + c``` on your keyboard

4. Deploy image to survive system reboots
    ```sh
    docker compose up -d
    ```
   stop the container with 
   ```sh
   docker compose down
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Seth Samuel - seths@missionreadyhq.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Kevin Huang at Medium for the article on how to make hamburger menus](https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb)
- [Ken Udeh for insparation on insparation for the mobile navbar](https://kenudeh.hashnode.dev/how-to-build-a-responsive-navigation-menu-with-react)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
