# Social-Networking



<div id="top"></div>

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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This class project is to create a social media API with Node.js and MongoDb.

About:
* The API has two primary paths /api/users and /api/thoughts 
* The API has the following operations:

**`/api/users`**
* `GET` all users
* `GET` a single user by its `_id` and populated thought and friend data
* `POST` create a new user
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`

**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list

**`/api/thoughts`**
* `GET` to get all thoughts
* `GET` to get a single thought by its `_id`
* `POST` to create a new thought 
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`

**`/api/thoughts/:thoughtId/reactions`**
* `POST` to create a reaction stored in a single thought's `reactions` array field
* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.dev/)
* [Mongoose](https://mongoosejs.com/docs/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone this repo 
```sh
git clone git@github.com:Montyking20/social-network.git
```
2. Install NPM packages
   ```sh
   npm install
   ```
3. That's all there is to it!


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Once installed run `npm run start` and the API will be ready. Please view the video for usage demo


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Montyking20/social-network)

<p align="right">(<a href="#top">back to top</a>)</p>


