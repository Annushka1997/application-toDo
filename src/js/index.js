"use strict";

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos";
const UI = require("./modules/UI");
const GET = require("./modules/get");
const POST = require("./modules/post");
const PUT = require("./modules/edit");
const DELETE = require("./modules/delete");
const isDone = require("./modules/done");

const { form, screenInput } = UI;

UI.start();
POST();
GET();





