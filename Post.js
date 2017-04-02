/**
 * Created by JiaxinZhang on 4/2/2017.
 */
class Post {
    constructor(x, y, content, time, postID, posterid, status, speed) {
        this.x = x;
        this.y = y;
        this.content = content;
        this.time = time;
        this.postID = postID;
        this.posterid = posterid;
        this.comments = [];
        this.status = status;
        this.speed = speed; // this represents the speed of the person
        // when he or she posted it
    }
}