const Messages = require("../model/messages.model");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const newMessage = new Messages({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    const savedMessages = await newMessage.save();
    if (savedMessages) {
      return res.json({ msg: "Message added successfully." });
    } else {
      return res.json({ msg: "Failed to add message to the database" });
    }
  } catch (ex) {
    next(ex);
  }
};
