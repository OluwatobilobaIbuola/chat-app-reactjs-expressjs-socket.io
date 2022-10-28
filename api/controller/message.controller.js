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

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.params;
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages?.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.status(200).json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};
