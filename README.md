To Check Out the results of this code, you can go to the Netlify deploy of this [repo](https://ecstatic-pare-5054da.netlify.app/)

Or you can install this on your local:

## Installation:

Step 0: Get an API key from [omdbapi.com](http://www.omdbapi.com/apikey.aspx)

#### Step 1:

` $ git clone git@github.com:kermitjosephlee/serind-labs-challenge.git`

#### Step 2: create an `.env` at the root level of the repo and inside that file write...

`REACT_APP_OMDB_API="http://www.omdbapi.com/?apikey=<your API key from Step 0 here>"`

#### Step 3: Install the dependencies

```
$ yarn install
```

#### Step 4: fire it up on your local

```
$ yarn start
```

---

## Sekine Labs Code Challenge

Started at Saturday April 3rd @ 4:00pm

Serind’s Front End Take Home Test

##### Stack to use:

- [x] ReactJS (Required)
- [x] React hooks (Required)
- [x] TypeScript (Optional)
- Use any other libraries you like

#### Your Mission:

Your mission is to create a single page app (SPA) using the OMDB API
(http://www.omdbapi.com/). Your application should have 2 pages, one for showing
movie list and second for showing movie details.

#### Your Tasks:

- We want to see a functional site that uses the api. If you have any doubts, feel free to
  make assumptions. Functionality is more important than the look and feel. If you finish
  early, feel free to polish it up.
- Your SPA should have these 2 pages:
- Movie list page (first page)
- [x] Users should see a blank form when they first come to this page. This
      form should contain below fields:
- [x] Search field (text) (required)
- [x] Type (select) (optional) (options - movie, series, episode)
- [x] Year (text) (optional)
- [x] Search button
- [x] Add form validations
- [x] User should be able to search by filling form and then clicking on “Search”
      button
- [x] User should be able to see results on the same page below form
- For each movie, user should be able to view
- [x] Title
- [x] Image
- [x] Year
- [x] Type (movie, series, episode)

- [x] Users should be able to view details of movies by clicking on the
      “Detail” button present in each movie row. On click of this button,
      user should be taken to Movie detail page

- Movie detail page (second page)
- [x] Users should see the “Back” button on this page. On click of this button,
      user should be taken back to Movie list page (Please note: Movie list
      page state should be preserved i.e. form field values and movie list
      should be populated)
- User should be able to view below fields on this page:
- [x] Title
- [x] Image
- [x] Year
- [x] Type
- [x] Released
- [x] Genre
- [x] Ratings

Project Submission:

- Send us an email with your repo link.
- Any assumptions while working on it.
- Add readme to your project containing how to setup and start server
- If you are not able to finish the test on time or get stuck somewhere, don’t worry. Submit
  the test, we will review it and get back to you.
