const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
// One GET for Details page
router.get("/", (req, res) => {
  // GET route code here
  let queryText = "";
});
// One GET for the MyRecipes page. Title and IMG
//POST needs user_id
/**
 * POST route template
 */

router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
