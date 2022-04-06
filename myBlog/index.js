////////////////////////////////
//creating the main variables
////////////////////////////////

const express = require("express");
const app = express();
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid"); //uuidv4() to get a random number

app.use(methodOverride("_method"));
