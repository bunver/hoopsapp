/**
 * Created by JiaxinZhang on 4/2/2017.
 */
import "User";
import "Post";
import "UserTable";
import "ActiveUserTable";
import "Cluster";

var userTable = ActiveUserTable();

function optics(cluster){
    // TO DO: Implement Optics logics
    return cluster;
}

function clusify(cluster){
    var newcluster = optics(cluster);
    populatePostsToCluster(cluster, posts);
    cluster = newcluster;
    return cluster;
}

function populatePostsToCluster (cluster, post){

}