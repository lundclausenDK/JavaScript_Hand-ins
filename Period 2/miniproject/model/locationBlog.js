var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationBlogSchema = new Schema({
    info: {type: String, required: true},
    pos: {
        longitude: {type: Number, required: true},
        latitude: {type: Number, required: true}
    },
    author: Schema.Types.ObjectId,
    likes: [Schema.Types.ObjectId],
    created: {type: Date, default: Date.now},
    lastUpdated: Date
    //img: [string]
});

locationBlogSchema.virtual("slug").get(function() {
    return "/locationBlog/" + this._id;
});

locationBlogSchema.pre("save", function(next) {
    this.password = "poiofqjf9f3o9jF3o9" + this.password;
    this.lastUpdated = Date.now;
});

module.exports = mongoose.model("locationBlog", locationBlogSchema);