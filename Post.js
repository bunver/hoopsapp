/**
 * Created by JiaxinZhang on 4/2/2017.
 */
class Post {
    constructor(x, y, content, time, postID, posterid, feedback, status) {
        this.x = x;
        this.y = y;
        this.content = content;
        this.time = time;
        this.postID = postID;
        this.posterid = posterid;
        this.feedback = [];
        this.status = status;
    }
}