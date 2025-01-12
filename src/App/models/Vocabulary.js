const mongoose = require("mongoose");

const VocabularySchema = new mongoose.Schema({
  englishWord: {
    type: String,
    required: true,
  },
  vietnameseMeaning: {
    type: String,
    required: true,
  },
  partOfSpeech: {
    type: String, // e.g., noun, verb, adjective
    enum: ["noun", "verb", "adjective", "adverb", "other"],
    required: true,
  },
  exampleSentence: {
    english: {
      type: String,
      required: false,
    },
    vietnamese: {
      type: String,
      required: false,
    },
  },
  tags: {
    type: [String], // e.g., ['TOEIC', 'Business']
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Tạo tổ hợp unique index trên englishWord và partOfSpeech
VocabularySchema.index({ englishWord: 1, partOfSpeech: 1 }, { unique: true });

module.exports = mongoose.model("Vocabulary", VocabularySchema);
