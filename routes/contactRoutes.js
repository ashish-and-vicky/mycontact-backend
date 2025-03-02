const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactControllers");

// With controller
router.route("/").get(getContacts).post(createContact);

// With router
// router.route("/").get((req, res) => { 
//     res.status(200).json({ message: "Get all contacts" });
// });

// One way of writing separately
// router.route("/").post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
