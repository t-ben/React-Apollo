# React-Apollo
based on: Starter Kit for [Building Applications in React and Redux in ES6](http://www.pluralsight.com/author/cory-house) on Pluralsight. with updated react router using react-router-dom

## pluralsight Starter Kit
https://github.com/coryhouse/pluralsight-redux-starter.git` or [download the zip](https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)

1. **Install Node Packages.** - `npm install`
2. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
6. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.

## Apollo Basics
getting the data for us:
With Apollo, we need to denote queries like this by using the gql tag contained in the graphql-tag package.
<pre>
const TrainerQuery = gql`
  query TrainerQuery {
    Trainer(name: "tal.benavraham@gmail.com") {
      name
    }
  }
`
</pre>
injecting a data prop to the component:
<pre>
const PokedexWithData = graphql(TrainerQuery)(Pokedex)
</pre>
result: data prop will look like this:
<pre>
static propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Trainer: React.PropTypes.object,
  }).isRequired,
}
</pre>
Trainer is returned when we run the query in graphiql:
<pre>
{
  "data": {
    "Trainer": {      
      "id": "cj4ympu2wmdep0110j7iolzyc",
      "name": "tal.benavraham@gmail.com"
    }
  }
}
</pre>