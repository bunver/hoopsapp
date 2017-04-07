/**
 * Created by JiaxinZhang on 4/2/2017.
 */
class ActiveUser{
    constructor(x, y, speed, updateTime, status, city, activeID) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.updateTime = updateTime;
        this.status = status;
        this.city = city;
        this.token = "";
        this.activeID = activeID;
        this.clusterID = null;
    }
}