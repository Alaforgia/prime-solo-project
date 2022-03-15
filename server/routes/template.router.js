const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
// One GET for Details page
router.get("/", (req, res) => {
  let queryText = `SELECT "recipes"."title", "ingredients"."name", "ingredients"."amount", "recipes"."instructions"
  FROM "ingredients"
  JOIN "recipes" ON "ingredients"."recipe_ID" = "recipes"."id"
  JOIN "user" ON "recipes"."user_id" = "user"."id"
  GROUP BY "recipes"."title", "ingredients"."name", "ingredients"."amount", "recipes"."instructions";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("Details SERVER GET = ", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(query);
      console.log("Details SERVER GET ERROR = ", err);
      res.sendStatus(500);
    });
});
// One GET for the MyRecipes page. Title and IMG
router.get("/", (req, res) => {
  let queryText = `SELECT "recipes"."title, "recipes"."image"
  FROM "ingredients"
  JOIN "recipes" ON "ingredients"."recipe_ID" = "recipes"."id"
  JOIN "user" ON "recipes"."user_id" = "user"."id"
  GROUP BY "recipes"."title", "recipes"."image";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("MyRecipes SERVER GET = ", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(query);
      console.log("MyRecipes SERVER GET ERROR = ", err);
      res.sendStatus(500);
    });
});

//POST needs user_id
/**
 * POST route template
 */

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
